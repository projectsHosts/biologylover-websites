import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/blogDetail.css";


interface Subtopic {
  id: string;
  title: string;
  content: string;
}

interface Blog {
  title: string;
  subtopics: Subtopic[];
}

const BlogDetail: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Enhanced blog data with better content structure

 useEffect(() => {
  if (!subject) return;

  setLoading(true);

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
      setActiveSubtopic(data.subtopics[0]?.id || "");
    })
    .catch(() => {
      setBlog({
        title: "Subject Not Found",
        subtopics: [
          {
            id: "notfound",
            title: "Not Found",
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
              onClick={() => setActiveSubtopic(subtopic.id)}
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
          <div className="breadcrumb">
            <span>Education</span>
            <span className="separator">/</span>
            <span>{blog.title}</span>
            <span className="separator">/</span>
            <span className="current-topic">
              {currentSubtopic?.title || "Select a Topic"}
            </span>
          </div>

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
              className="content-display"
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

