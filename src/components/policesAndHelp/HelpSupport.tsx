import React from "react";
import "../../styles/policesAndhelp/ploicesOrhelp.css";

const HelpSupport: React.FC = () => {
  return (
    <div className="static-page">
      <h1>Terms of Service</h1>
      <p className="last-updated">Last Updated: February 2, 2026</p>

      <section>
        <h2>1. Acceptance of Agreement</h2>
        <p>
          By using BiologyLover, you agree to these Terms of Service. If you do
          not agree, please do not use our platform. These terms apply to all
          visitors, students, and contributors.
        </p>
      </section>

      <section>
        <h2>2. Intellectual Property Rights</h2>
        <p>
          The content on BiologyLover, including handwritten notes, custom
          diagrams, and quiz questions, is protected by copyright laws. You
          cannot copy, reproduce, or sell our "MASTER BIOLOGY" series or any
          other content without explicit permission.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide true information during registration.</li>
          <li>Maintain the security of your account.</li>
          <li>Use the platform for learning and not for spamming or hacking.</li>
        </ul>
      </section>

      <section>
        <h2>4. Digital Products & Payments</h2>
        <p>
          Pre-orders for educational books are final. Digital notes are
          delivered via your registered email or dashboard. Ensure your email
          is correct to avoid delivery issues.
        </p>
      </section>

      <section>
        <h2>5. Disclaimer</h2>
        <p>
          BiologyLover provides study materials for competitive exams like NEET
          and Board exams. While we aim for accuracy, we do not guarantee exam
          success or 100% error-free content.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          For questions regarding these terms, contact us at:
          <br />
          📧 <strong>support@biologylover.com</strong>
        </p>
      </section>
    </div>
  );
};

export default HelpSupport;