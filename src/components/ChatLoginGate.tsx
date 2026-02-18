import { useNavigate } from "react-router-dom";
import "../styles/chatlogingate.css";
import { isLoggedIn } from "../utils/auth";

const features = [
  { icon: "🧬", title: "Genetics & DNA",      text: "Understand DNA replication, mutations, genetic inheritance, CRISPR, and molecular biology concepts with step-by-step explanations.", tag: "Molecular Biology" },
  { icon: "🦠", title: "Microbiology",         text: "Explore bacteria, viruses, fungi, and protozoa. Learn about immune responses, infections, and microbial ecology.",                 tag: "Microbiology" },
  { icon: "🌿", title: "Botany & Ecology",     text: "From photosynthesis to ecosystem dynamics — understand plant biology, food webs, biomes, and environmental science.",             tag: "Ecology" },
  { icon: "🧠", title: "Human Anatomy",        text: "Dive into organ systems, neuroscience, physiology, and homeostasis with interactive Q&A and diagram analysis.",                  tag: "Anatomy" },
  { icon: "🔬", title: "Cell Biology",         text: "Master cell structure, organelles, mitosis, meiosis, cellular respiration, and signal transduction pathways.",                   tag: "Cell Biology" },
  { icon: "🐾", title: "Zoology & Evolution",  text: "Study animal kingdoms, evolutionary mechanisms, natural selection, adaptation, and taxonomy classification.",                    tag: "Evolution" },
];

const topics = [
  { icon: "🧫", label: "Cell Division" },       { icon: "🧬", label: "DNA & RNA" },
  { icon: "💊", label: "Pharmacology" },         { icon: "🫀", label: "Cardiovascular System" },
  { icon: "🦷", label: "Histology" },            { icon: "🧪", label: "Biochemistry" },
  { icon: "🐝", label: "Entomology" },           { icon: "🌊", label: "Marine Biology" },
  { icon: "🦴", label: "Skeletal System" },      { icon: "🌱", label: "Plant Physiology" },
  { icon: "🔭", label: "Biophysics" },           { icon: "🦋", label: "Metamorphosis" },
  { icon: "🩸", label: "Haematology" },          { icon: "🧠", label: "Neuroscience" },
  { icon: "🌍", label: "Biogeography" },         { icon: "🦠", label: "Immunology" },
];

const steps = [
  { num: "01", title: "Ask Anything",  text: "Type your biology question — from basic concepts to advanced research topics. No question is too simple or too complex." },
  { num: "02", title: "AI Analyzes",   text: "Our AI searches its deep biology knowledge base, cross-references concepts, and formulates a precise, educational answer." },
  { num: "03", title: "Upload Files",  text: "Share diagrams, PDFs, or lab reports. The AI reads and explains visual content, helping you understand complex figures." },
  { num: "04", title: "Learn & Grow",  text: "Save conversations, ask follow-up questions, and track your learning journey across all biology disciplines." },
];

export default function ChatLoginGate() {
  const navigate = useNavigate();

  const goToChat = () => {
    if (!isLoggedIn()) {
      (window as any).openLogin();
      return;
    }
    navigate("/ai-practice");
  };

  return (
    // ↓ .bio-ai-page is the scoping wrapper — all CSS is scoped inside it
    <div className="bio-ai-page">

      {/* Fixed background layers */}
      <div className="page-bg" />
      <div className="grid-overlay" />
      <div className="scan-beam" />
      <div className="particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">BIO<span>AI</span></div>
        <div className="nav-status">
          <span className="status-led" />
          AI Online &nbsp;·&nbsp; v2.4.1
        </div>
        <button className="nav-cta" onClick={goToChat}>Start Chat</button>
      </nav>

      <div className="homepage">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-badge">
            <span className="badge-dot" />
            Biology Education AI · Always Learning
          </div>

          <h1 className="hero-title">
            Your Personal<br />
            <span className="accent">Biology</span>{" "}
            <span className="accent2">AI</span> Assistant
          </h1>

          <p className="hero-sub">
            From cell biology to ecology — get instant, accurate answers to all your
            biology questions. Built for students, researchers, and every biology lover.
          </p>

          <div className="hero-actions">
            <button className="btn-primary"  onClick={() => {
                        if (!isLoggedIn()) {
                          (window as any).openLogin();
                          return;
                        }
                        navigate("/");  // home page 
                      }}>
              Start Chatting Free →
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Features
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat"><span className="stat-num">50+</span><span className="stat-label">Biology Topics</span></div>
            <div className="stat"><span className="stat-num">24/7</span><span className="stat-label">Always Available</span></div>
            <div className="stat"><span className="stat-num">∞</span><span className="stat-label">Questions Allowed</span></div>
            <div className="stat"><span className="stat-num">AI</span><span className="stat-label">Powered Learning</span></div>
          </div>
        </section>

        {/* ── TOPICS ── */}
        <section className="topics-section" id="features">
          <div className="section-label">// Popular Topics</div>
          <h2 className="section-title">Ask About Any Biology Topic</h2>
          <div className="topics-grid">
            {topics.map((t) => (
              <div className="topic-chip" key={t.label}>
                <span className="chip-icon">{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="section" id="how">
          <div className="section-label">// How It Works</div>
          <h2 className="section-title">Four Simple Steps to<br />Smarter Biology Learning</h2>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <span className="step-num">{s.num}</span>
                <div className="step-title">{s.title}</div>
                <p className="step-text">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DEMO CHAT ── */}
        <section className="demo-section">
          <div className="demo-text">
            <div className="section-label">// Live Demo</div>
            <h2 className="section-title">See BioAI in Action</h2>
            <p className="section-desc">
              Ask any biology question and get a detailed, accurate, educational
              response in seconds. The AI explains at your level.
            </p>
            <ul className="demo-features">
              <li>Explains complex processes with step-by-step breakdowns</li>
              <li>Reads and interprets uploaded diagrams and lab reports</li>
              <li>Suggests related concepts to deepen your understanding</li>
              <li>Gives exam-ready answers with scientific principles</li>
            </ul>
          </div>

          <div className="chat-window">
            <div className="chat-topbar">
              <div className="chat-dot green" /><div className="chat-dot yellow" /><div className="chat-dot red" />
              <span className="chat-topbar-title">BIOAI · CHAT SESSION</span>
            </div>
            <div className="chat-body">
              <div className="msg user">
                <div className="msg-avatar">👤</div>
                <div className="msg-bubble">What is the difference between mitosis and meiosis?</div>
              </div>
              <div className="msg ai">
                <div className="msg-avatar">🤖</div>
                <div className="msg-bubble">
                  Great question! Both are cell division processes, but with key differences:<br /><br />
                  <strong>Mitosis</strong> produces 2 identical daughter cells (diploid) — used for growth and repair.<br /><br />
                  <strong>Meiosis</strong> produces 4 genetically unique cells (haploid) — used for sexual reproduction.
                </div>
              </div>
              <div className="msg user">
                <div className="msg-avatar">👤</div>
                <div className="msg-bubble">Why does meiosis produce 4 cells instead of 2?</div>
              </div>
              <div className="msg ai">
                <div className="msg-avatar">🤖</div>
                <div className="typing-indicator"><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-glow-ring">
            <span className="cta-emoji">🧬</span>
          </div>
          <h2 className="cta-title">Ready to Master Biology?</h2>
          <p className="cta-desc">
            Join thousands of biology students and researchers using BioAI to understand
            life science like never before. Free to start, powerful to use.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => {
                        if (!isLoggedIn()) {
                          (window as any).openLogin();
                          return;
                        }
                        navigate("/");  // home page 
                      }}>Start Chatting Now →</button>
            <button className="btn-secondary" onClick={() => {
                        if (!isLoggedIn()) {
                          (window as any).openLogin();
                          return;
                        }
                        navigate("/topics");  // topics page 
                      }}>Explore Topics</button>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="footer-logo">BioAI</div>
          <div className="footer-text">Built for Biology Lovers · Education Purpose Only · 2026</div>
          <div className="footer-enc">End-to-end encrypted</div>
        </footer>

      </div>
    </div>
  );
}