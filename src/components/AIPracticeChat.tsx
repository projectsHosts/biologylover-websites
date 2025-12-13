import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/aipracticeChat.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

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

  const formatResponse = (text: string): string => {
  if (!text) return "";

  let output = text.trim();

  // --- AUTO NORMALIZATION ---
  // Fix messy double spaces, triple newlines etc.
  output = output.replace(/\r/g, "");
  output = output.replace(/\n{3,}/g, "\n\n");
  output = output.replace(/[ ]{2,}/g, " ");

  // --- SMART HEADING DETECTION ---
  // "**Biology**" → <h2>
  output = output.replace(/^\*\*([^*]+)\*\*/gm, (_m, p1) => {
    return `<h2 class="ai-heading">${p1}</h2>`;
  });

  // Lines like "Study Timetable:" → Heading
  output = output.replace(/^([A-Z][A-Za-z ]{2,40}):$/gm, (_m, p1) => {
    return `<h2 class="ai-heading">${p1}</h2>`;
  });

  // Detect lines that look like section headers
  output = output.replace(/^([A-Z][A-Za-z ]{3,50})\s*$/gm, (_m, p1) => {
    if (p1.length < 50) return `<h3 class="ai-subheading">${p1}</h3>`;
    return p1;
  });

  // --- SMART TIMETABLE DETECTION ---
  // Example: "9:00 AM – 10:00 AM: Biology"
  output = output.replace(
    /(\d{1,2}:\d{2}\s*(?:AM|PM))\s*[-–]\s*(\d{1,2}:\d{2}\s*(?:AM|PM)):\s*(.+)/gi,
    (_m, start, end, task) => {
      return `
      <div class="time-row">
        <div class="time-slot">${start} - ${end}</div>
        <div class="time-task">${task}</div>
      </div>`;
    }
  );

  // --- SMART BULLET LIST DETECTION ---
  // "- item" OR "• item" OR "* item"
  output = output.replace(/^[-•*]\s+(.+)$/gm, "<li>$1</li>");

  // wrap <li> inside <ul> automatically
  if (output.includes("<li>")) {
    output = output.replace(/(<li>[\s\S]*?<\/li>)/gm, "<ul>$1</ul>");
  }

  // --- SMART NUMBERED LIST DETECTION ---
  // "1. Step explanation"
  output = output.replace(/^\d+\.\s+(.+)$/gm, "<li>$1</li>");

  if (output.includes("<li>")) {
    output = output.replace(/(<li>[\s\S]*?<\/li>)/gm, "<ol>$1</ol>");
  }

  // --- PARAGRAPH CONVERSION ---
  const parts = output.split("\n");
  output = parts
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (
        block.startsWith("<h2") ||
        block.startsWith("<h3") ||
        block.startsWith("<ul") ||
        block.startsWith("<ol") ||
        block.startsWith("<div class=\"time-row")
      ) {
        return block;
      }
      return `<p>${block}</p>`;
    })
    .join("");

  return output;
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

    const data = await resp.json();

    if (!conversationId) setConversationId(data.conversationId);

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