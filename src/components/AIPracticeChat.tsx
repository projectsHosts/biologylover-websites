import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/aipracticeChat.css";

const API_BASE = import.meta.env.VITE_API_BASE || "https://api.biologylover.com";


interface Message {
  role: "user" | "assistant";
  content: string;
  files?: { name: string; type: string; url: string }[];
  timestamp: Date;
}

export default function AIPracticeChat() {
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  // Remove selected file
  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Format AI response with proper HTML structure

// Format AI response with proper HTML structure
  const formatResponse = (text: string): string => {
    if (!text) return "";

    let output = text.trim();

    // --- NORMALIZE ---
    output = output.replace(/\r/g, "");
    output = output.replace(/\n{3,}/g, "\n\n");

    // --- HEADINGS ---
    // **Text:** or **Text** → <h2>
    output = output.replace(/\*\*([^*]+):\*\*/g, "<h2>$1</h2>");
    output = output.replace(/\*\*([^*]+)\*\*/g, "<h2>$1</h2>");

    // --- BULLET POINTS ---
    // Convert * item → <li>item</li>
    const lines = output.split("\n");
    const formatted: string[] = [];
    let inList = false;

    lines.forEach((line) => {
      const trimmed = line.trim();
      
      // Check if it's a bullet point
      if (trimmed.match(/^\*\s+(.+)$/)) {
        const content = trimmed.replace(/^\*\s+/, "");
        if (!inList) {
          formatted.push("<ul>");
          inList = true;
        }
        formatted.push(`<li>${content}</li>`);
      } 
      // Check if it's a numbered list
      else if (trimmed.match(/^\d+\.\s+(.+)$/)) {
        const content = trimmed.replace(/^\d+\.\s+/, "");
        if (!inList) {
          formatted.push("<ol>");
          inList = true;
        }
        formatted.push(`<li>${content}</li>`);
      }
      // Regular text
      else {
        if (inList) {
          // Check if previous item was ul or ol
          const lastTag = formatted[formatted.length - 2];
          if (lastTag && lastTag.includes("<ul>")) {
            formatted.push("</ul>");
          } else if (lastTag && lastTag.includes("<ol>")) {
            formatted.push("</ol>");
          }
          inList = false;
        }
        
        if (trimmed && !trimmed.startsWith("<h2")) {
          formatted.push(`<p>${trimmed}</p>`);
        } else if (trimmed.startsWith("<h2")) {
          formatted.push(trimmed);
        }
      }
    });

    // Close any open list
    if (inList) {
      const lastTag = formatted[formatted.length - 2];
      if (lastTag && lastTag.includes("<ul>")) {
        formatted.push("</ul>");
      } else if (lastTag && lastTag.includes("<ol>")) {
        formatted.push("</ol>");
      }
    }

    return formatted.join("");
  };





  // Backend API call
 async function sendMessage(text: string, files: File[]) {
  const fileData = await Promise.all(
    files.map(async (file) => ({
      name: file.name,
      type: file.type,
      data: await fileToBase64(file),
    }))
  );

  const resp = await fetch(`${API_BASE}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      conversationId: conversationId,
      userId: "guest-123",
      message: text,
      files: fileData,
    }),
  });

  // 🔥 IMPORTANT: read as TEXT first
  const rawText = await resp.text();

  // ❌ HTTP error (502 / 500 / 504 etc)
  if (!resp.ok) {
    console.error("Server error:", rawText);
    throw new Error("Server error");
  }

  // ❌ Not JSON (HTML page etc)
  if (!rawText.trim().startsWith("{")) {
    console.error("Invalid response (not JSON):", rawText);
    throw new Error("Invalid response from server");
  }

  // ✅ Safe JSON parse
  const data = JSON.parse(rawText);

  if (!conversationId && data.conversationId) {
    setConversationId(data.conversationId);
  }

  return data;
}

  const handleSend = async () => {
    if (!input.trim() && selectedFiles.length === 0) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      files: selectedFiles.map((f) => ({
        name: f.name,
        type: f.type,
        url: URL.createObjectURL(f),
      })),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await sendMessage(input, selectedFiles);

      const botMessage: Message = {
        role: "assistant",
        content: response.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "<h2>Error</h2><p>Sorry, there was an error processing your request. Please try again.</p>",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setSelectedFiles([]);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Clear chat
  const handleClearChat = () => {
    setMessages([]);
    setConversationId(null);
    setSelectedFiles([]);
  };

  return (
    <div className="chat-page">
      {/* Header */}
      <div className="chat-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="chat-header-info">
          <h2>AI Practice Assistant</h2>
          <span className="status-indicator">
            <span className="status-dot"></span>
            Online
          </span>
        </div>
        <button className="clear-btn" onClick={handleClearChat} title="Clear Chat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Chat Container */}
      <div className="chat-container">
        <div className="chat-box" ref={chatBoxRef}>
          {messages.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Start Your Practice Session</h3>
              <p>Ask questions, upload images, or share files to get started!</p>
              <div className="suggestion-chips">
                <button className="chip" onClick={() => setInput("Explain photosynthesis")}>
                  Explain photosynthesis
                </button>
                <button className="chip" onClick={() => setInput("Give me a study timetable for Class 10")}>
                  Class 10 study schedule
                </button>
                <button className="chip" onClick={() => setInput("Help me with chemistry reactions")}>
                  Chemistry help
                </button>
              </div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className={`message-wrapper ${msg.role}`}>
                <div className="message-avatar">
                  {msg.role === "user" ? (
                    <div className="avatar-user">You</div>
                  ) : (
                    <div className="avatar-bot">AI</div>
                  )}
                </div>
                <div className="message-content">
                  <div className={`message-bubble ${msg.role}`}>
                    {msg.files && msg.files.length > 0 && (
                      <div className="message-files">
                        {msg.files.map((file, i) => (
                          <div key={i} className="file-preview">
                            {file.type.startsWith("image/") ? (
                              <img src={file.url} alt={file.name} />
                            ) : (
                              <div className="file-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M13 2v7h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>{file.name}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {msg.role === "assistant" ? (
                      <div dangerouslySetInnerHTML={{ __html: formatResponse(msg.content) }} />
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                  <span className="message-time">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="message-wrapper assistant">
              <div className="message-avatar">
                <div className="avatar-bot">AI</div>
              </div>
              <div className="message-content">
                <div className="message-bubble assistant typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* File Preview Bar */}
        {selectedFiles.length > 0 && (
          <div className="file-preview-bar">
            {selectedFiles.map((file, idx) => (
              <div key={idx} className="file-chip">
                <span className="file-name">{file.name}</span>
                <button className="remove-file" onClick={() => removeFile(idx)}>
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="chat-input-area">
          <button 
            className="attach-btn" 
            onClick={() => fileInputRef.current?.click()}
            title="Attach file"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*,.pdf,.doc,.docx,.txt"
            multiple
            style={{ display: "none" }}
          />
          <input
            className="chat-input"
            placeholder="Type your message... (Press Enter to send)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button 
            className="send-btn" 
            onClick={handleSend} 
            disabled={isLoading || (!input.trim() && selectedFiles.length === 0)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}