// src/features/mocktest/pages/MockTestList.tsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/mocktest.css";

import { fetchMockTestsByExam, startAttempt } from "../api/mockApi";

import { createPremiumOrder, verifyPayment } from "../../../utils/payment";

import type { MockTest } from "../types/mock";

export default function MockTestList() {
  const { examType } = useParams<{ examType: string }>();
  const navigate = useNavigate();

  const [tests, setTests] = useState<MockTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPremiumList, setShowPremiumList] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const freeTests = tests.filter((t) => t.isPremium === false);
  const premiumTests = tests.filter((t) => t.isPremium === true);

  /* ================= SUCCESS FLASH AUTO HIDE ================= */

  useEffect(() => {
    if (!showSuccess) return;
    const t = setTimeout(() => setShowSuccess(false), 4000);
    return () => clearTimeout(t);
  }, [showSuccess]);

  /* ================= LOAD TESTS ================= */

  async function load() {
  if (!examType) return;

  setLoading(true);

  try {
    const data = await fetchMockTestsByExam(examType);
    setTests(data || []);
  } catch (e) {
    console.error("Load error", e);
    setTests([]);
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    load();
  }, [examType]);

  /* ================= START TEST ================= */

 async function handleStart(testId: number) {

  const token = localStorage.getItem("token");

  if (!token) {
    (window as any).openLogin();
    return;
  }

  try {
    const attemptId = await startAttempt(testId);
    navigate(`/mock-attempt/${attemptId}`);
  } catch (e) {
    console.error("Start error", e);
  }
}

  /* ================= PREMIUM UNLOCK ================= */

  async function handlePremiumUnlock() {
    if (paymentLoading) return;
    setPaymentLoading(true);

    try {
      if (!examType) {
        alert("Invalid exam type");
        return;
      }

      const order = await createPremiumOrder(examType);

      if (!(window as any).Razorpay) {
        alert("Payment system not ready. Please refresh.");
        return;
      }

      const rzp = new (window as any).Razorpay({
          key: order.key,
          amount: order.amount,
          currency: order.currency,
          name: "BiologyLover",
          description: "NEET Premium Pack",
          order_id: order.orderId,

          modal: {
            ondismiss: () => {
              alert("Payment cancelled");
            }
          },

          handler: async (resp: any) => {
            await verifyPayment({
              razorpayOrderId: resp.razorpay_order_id,
              razorpayPaymentId: resp.razorpay_payment_id,
              razorpaySignature: resp.razorpay_signature,
            });
            setShowSuccess(true);
            await waitForAccess();
          }
        });


      rzp.open();
    } catch (e) {
      alert("Payment failed");
    } finally {
      setPaymentLoading(false);
    }
  }

  async function waitForAccess() {
    for (let i = 0; i < 5; i++) {
      await load();

      const access = tests.some((t) => t.userHasAccess);
      if (access) return;

      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  /* ================= PREMIUM LOCK CONDITION ================= */

  const hasPremiumAccess = premiumTests.some((t) => t.userHasAccess === true);

  const showPremiumLock = examType === "NEET_FULL" && !hasPremiumAccess;

  /* ================= UI ================= */

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (tests.length === 0) {
    return (
      <div className="container">
        <button className="mock-back-link" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="mock-empty-state">
          <h2>No Tests Available</h2>
          <p>Tests will be added soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* ✅ SUCCESS CARD */}
      {showSuccess && (
        <div className="payment-success-card">
          <h3>🎉 Premium Activated</h3>
          <p>All NEET Full Tests unlocked successfully</p>
        </div>
      )}

      <button className="mock-back-link" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>{examType?.replace(/_/g, " ")} Tests</h2>

      <div className="mock-grid">
        {/* ===== FREE TESTS ===== */}

        {freeTests.map((t) => (
          <div key={t.id} className="mock-card">
            <h3>{t.title}</h3>

            <p>
              <b>Subject:</b> {t.subject}
            </p>
            <p>
              <b>Questions:</b> {t.totalQuestions}
            </p>
            <p>
              <b>Duration:</b> {t.duration} Minutes
            </p>

            {t.difficulty && (
              <span
                className={`mock-difficulty mock-difficulty-${t.difficulty.toLowerCase()}`}
              >
                {t.difficulty}
              </span>
            )}

            <button onClick={() => handleStart(t.id)}>Start Test</button>
          </div>
        ))}

        {/* ===== PREMIUM TEST CARDS ===== */}

        {showPremiumList &&
          premiumTests.map((t) => (
            <div key={t.id} className="mock-card premium-card">
              <h3>{t.title}</h3>

              <p>
                <b>Subject:</b> {t.subject}
              </p>
              <p>
                <b>Questions:</b> {t.totalQuestions}
              </p>
              <p>
                <b>Duration:</b> {t.duration} Minutes
              </p>

              <span className="premium-badge">PREMIUM</span>

              <button onClick={() => handleStart(t.id)}>Start Test</button>
            </div>
          ))}

        {/* ===== PREMIUM LOCK CARD ===== */}
        {/* {showPremiumLock && (
          <div className="mock-card premium-lock">
            <div className="premium-head">
              <i className="fa-solid fa-crown"></i>
              <span className="premium-tag"> PREMIUM</span>
            </div>

            <h3>30 Premium Mock Tests</h3>
            <p className="premium-sub">Full NEET Test Series Access</p>

            <div className="premium-line" />

            <ul className="premium-list">
              <li>Full syllabus coverage</li>
              <li>Real NEET exam pattern</li>
              <li>Detailed score analysis</li>
              <li>Negative marking simulation</li>
            </ul>

            <button
            className="premium-btn"
            onClick={handlePremiumUnlock}
            disabled={paymentLoading}
          >
            {paymentLoading ? "Processing..." : "Unlock Premium"}
          </button>

          </div>
        )} */}

        {/* ===== PREMIUM GROUP CARD (AFTER PAYMENT) ===== */}

        {examType === "NEET_FULL" && hasPremiumAccess && !showPremiumList && (
          <div className="mock-card premium-view">
            <div className="premium-view-top">
              <i className="fa-solid fa-crown"></i>
              <span className="premium-live">ACTIVE</span>
            </div>

            <h3 className="premium-view-title">NEET Premium Pack</h3>

            <p className="premium-view-sub">
              30 Full-Length Mock Tests Unlocked
            </p>

            <div className="premium-divider" />

            <div className="premium-grid-points">
              <div>Latest NEET Pattern</div>
              <div>Full PCB Coverage</div>
              <div>Real Difficulty Mix</div>
              <div>Detailed Analytics</div>
              <div>Negative Marking</div>
              <div>Unlimited Attempts</div>
            </div>

            <div className="premium-status-row">
              <span>🔓 Access Enabled</span>
              <span>📦 Premium Series</span>
            </div>

            <button
              className="premium-view-btn"
              onClick={() => setShowPremiumList(true)}
            >
              View 30 Tests →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
