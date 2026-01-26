import { useState, useEffect, useRef } from "react";
import StateBooks from "./StateBooks";
import NcertBooks from "./NcertBooks";
import gsap from "gsap";
import "../../styles/resources.css";

export default function Resources() {
  const [activeTab, setActiveTab] = useState<"state" | "ncert">("state");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      gsap.fromTo(
        ".char",
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  return (
    <div className="resources-page">
      <h1 ref={titleRef} className="page-title">
       <p className="page-subtitle">
        1000+ Free PDFs • Class 6–12 • NEET • JEE • Boards
      </p>
      </h1>

      {/* Main Tabs */}
      <div className="glass-box">
      <div className="tab-bar">
        <button
          className={activeTab === "state" ? "active" : ""}
          onClick={() => setActiveTab("state")}
        >
          State Books
        </button>
        <button
          className={activeTab === "ncert" ? "active" : ""}
          onClick={() => setActiveTab("ncert")}
        >
          NCERT Books
        </button>
      </div>
      </div>

      {/* Content */}
      {activeTab === "state" ? <StateBooks /> : <NcertBooks />}
    </div>
  );
}