import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/blogDetail.css";


interface Subtopic {
  id: string;
  title: string;
  topicId: string;
  content: string;
}

interface Blog {
  title: string;
  subtopics: Subtopic[];
}

const BlogDetail: React.FC = () => {
  const { subject ,topicId} = useParams<{ subject: string,topicId?: string; }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Enhanced blog data with better content structure

 useEffect(() => {
  if (!subject) return;

  if (!blog) setLoading(true);

  fetch(
    `${import.meta.env.VITE_API_BASE}/api/blogs/subject/${subject}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Not Found");
      }
      return res.json();
    })
    .then((data: Blog) => {
  setBlog(data);

  if (topicId) {
    const match = data.subtopics.find(
      (st) => st.topicId === topicId
    );
    if (match) {
      setActiveSubtopic(match.id);
      return;
    }
  }

  setActiveSubtopic(data.subtopics[0]?.id || "");
})
    .catch(() => {
      setBlog({
        title: "Subject Not Found",
        subtopics: [
          {
            id: "notfound",
            title: "Not Found",
            topicId: "notfound",
            content: `
              <div class="error-message">
                <p>🚫 The requested subject is not available.</p>
              </div>
            `,
          },
        ],
      });
      setActiveSubtopic("notfound");
    })
    .finally(() => {
      setLoading(false);
    });
}, [subject]);

// 🫧 Bubble Cursor Effect (Blog page only)
useEffect(() => {
  // Mobile pe disable
  if (window.innerWidth < 768) return;

  const container = document.createElement("div");
  container.id = "bubble-container";
  document.body.appendChild(container);

  const createBubble = (x: number, y: number) => {
    const bubble = document.createElement("span");
    bubble.className = "bubble";

    const size = Math.random() * 6 + 4;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${x + Math.random() * 10 - 5}px`;
    bubble.style.top = `${y + Math.random() * 10 - 5}px`;

    bubble.style.setProperty("--rand", Math.random().toString());

    container.appendChild(bubble);

    setTimeout(() => bubble.remove(), 2500);
  };

  let last = 0;
  const handleMove = (e: MouseEvent) => {
    const now = Date.now();
    if (now - last > 40) {
      createBubble(e.clientX, e.clientY);
      last = now;
    }
  };

  document.addEventListener("mousemove", handleMove);

  return () => {
    document.removeEventListener("mousemove", handleMove);
    container.remove();
  };
}, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading {subject} content...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="error-container">
        <h2>Content Not Available</h2>
        <p>Unable to load the requested subject.</p>
      </div>
    );
  }

  const currentSubtopic = blog.subtopics.find((st) => st.id === activeSubtopic);

  return (
    <div className="blog-detail-container">
      {/* Navigation Sidebar */}
      <nav className="blog-left">
        <div className="sidebar-header">
          <button className="back-btn sidebar-back" onClick={() => navigate("/blogs")}>
                       ← Back to subjects
         </button>
          <h3>{blog.title} Topics</h3>
          <span className="topics-count">{blog.subtopics.length} topics</span>
        </div>

        <ul className="subtopics-list">
          {blog.subtopics.map((subtopic,index) => (
            <li
              key={`${subtopic.id}-${index}`} 
              className={`subtopic-item ${
                activeSubtopic === subtopic.id ? "active" : ""
              }`}
             onClick={() => {
                  setActiveSubtopic(subtopic.id);
                  window.history.replaceState(
                    null,
                    "",
                    `/blog/${subject}/${subtopic.topicId}`
                  );
                }}
            >
              <span className="subtopic-number">
                {/* {String(index + 1).padStart(2, "0")} */}
              </span>
              <span className="subtopic-title">{subtopic.title}</span>
              {activeSubtopic === subtopic.id && (
                <span className="active-indicator"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="blog-right">
        <header className="blog-header">
          {/* <div className="breadcrumb">
            <span>Education</span>
            <span className="separator">/</span>
            <span>{blog.title}</span>
            <span className="separator">/</span>
            <span className="current-topic">
              {currentSubtopic?.title || "Select a Topic"}
            </span>
          </div> */}

          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-meta">
            📚 Educational Content | 🕐 Updated:{" "}
            {new Date().toLocaleDateString()} | 📖 {blog.subtopics.length}{" "}
            Topics
          </p>
        </header>

        {/* Dynamic Content */}
        <article className="blog-content">
          {currentSubtopic ? (
            <section
              key={activeSubtopic}
              className="content-display fade-slide"
              dangerouslySetInnerHTML={{ __html: currentSubtopic.content }}
            />
          ) : (
            <div className="no-content">
              <h3>Welcome to {blog.title}!</h3>
              <p>Select a topic from the sidebar to start learning.</p>
            </div>
          )}
        </article>

        {/* Navigation Footer */}
        <footer className="content-footer">
          <div className="navigation-help">
            <p>
              💡 <strong>Tip:</strong> Use the sidebar to navigate between
              different topics
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default BlogDetail;

