import { useState, useRef, useEffect, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import biologyLogo from "../assets/biologylover02.jpg";
import "../styles/aipracticeChat.css";
import { getUserId, isLoggedIn } from "../utils/auth";
import { Pencil, Trash2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  files?: { name: string; type: string; url: string }[];
  timestamp: Date;
}

interface ConversationItem {
  id: number;
  title: string;
  createdAt: string;
}

// Memoized Header Component to prevent re-renders
const ChatHeader = memo(({ 
  onMenuClick, 
  onBackClick, 
  onClearClick 
}: { 
  onMenuClick: () => void;
  onBackClick: () => void;
  onClearClick: () => void;
}) => (
  <div className="chat-header">
    <button className="menu-btn" onClick={onMenuClick}>
      ☰
    </button>
    <button className="back-btn" onClick={onBackClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
    <div className="chat-header-info">
      <h2>AI Biology Assistant</h2>
      <span className="status-indicator">
        <span className="status-dot"></span>
        Online
      </span>
    </div>
    <button className="clear-btn" onClick={onClearClick} title="Clear Chat">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
));

ChatHeader.displayName = 'ChatHeader';

export default function AIPracticeChat() {
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [conversations, setConversations] = useState<ConversationItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
 const loggedIn = isLoggedIn();

  // Memoized callbacks to prevent header re-renders
  const handleMenuClick = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleClearChat = useCallback(() => {
    setMessages([]);
    setConversationId(null);
    setSelectedFiles([]);
  }, []);

  // Load conversations on mount
 useEffect(() => {
  if (isLoggedIn()) {
    loadConversations();
  }
}, []);

  // Redirect if not logged in
  useEffect(() => {
    if (!loggedIn) {
      navigate("/ai-home");
    }
  }, [loggedIn, navigate]);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    if (chatBoxRef.current) {
      requestAnimationFrame(() => {
        chatBoxRef.current?.scrollTo({
          top: chatBoxRef.current.scrollHeight,
          behavior: "auto"
        });
      });
    }
  }, [messages.length]);
  
  // Load all conversations
 const loadConversations = async () => {
  try {
    const userId = getUserId();
    if (!userId) return;

    const response = await fetch(`${API_BASE}/api/ai/conversations/${userId}`);
    const data = await response.json();
    const normalized = data.map((c: any) => ({
    id: c.id,
    title: c.title ?? "New Chat",
    createdAt: c.createdAt
  }));

  setConversations(normalized);

    // setConversations(data);
  } catch (error) {
    console.error("Error loading conversations:", error);
  }
};


  // Load a specific conversation
  const loadConversation = async (convId: number) => {
    try {
      const response = await fetch(`${API_BASE}/api/ai/history/${convId}`);
      const data = await response.json();
      
      const formattedMessages: Message[] = data.map((msg: any, idx: number) => ({
        id: `${msg.id || idx}`,
        role: msg.role,
        content: msg.content,
        timestamp: new Date(msg.createdAt)
      }));
      
      setMessages(formattedMessages);
      setConversationId(convId);
      setSidebarOpen(false);
    } catch (error) {
      console.error("Error loading conversation:", error);
    }
  };

  // Delete conversation
  const deleteConversation = async (convId: number) => {
    try {
      await fetch(`${API_BASE}/api/ai/conversation/delete/${convId}`, {
        method: "DELETE"
      });
      loadConversations();
      if (conversationId === convId) {
        handleClearChat();
      }
    } catch (error) {
      console.error("Error deleting conversation:", error);
    }
  };

  // Rename conversation
  const renameConversation = async (convId: number, newName: string) => {
  try {
    await fetch(`${API_BASE}/api/ai/conversation/rename/${convId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName })
    });

    // reload list
    loadConversations();

  } catch (error) {
    console.error("Rename error:", error);
  }
};


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
    
    // Clean up line breaks
    output = output.replace(/\r/g, "");
    output = output.replace(/\n{3,}/g, "\n\n");

    // Process line by line
    const lines = output.split("\n");
    const formatted: string[] = [];
    let inList = false;
    let listType = "";

    lines.forEach((line) => {
      const trimmed = line.trim();
      
      // Skip empty lines
      if (!trimmed) {
        if (inList) {
          formatted.push(listType === "ul" ? "</ul>" : "</ol>");
          inList = false;
          listType = "";
        }
        formatted.push("<br>");
        return;
      }

      // Check for headings with **text:** or **text**
      if (trimmed.match(/^\*\*(.+?):\*\*$/)) {
        if (inList) {
          formatted.push(listType === "ul" ? "</ul>" : "</ol>");
          inList = false;
          listType = "";
        }
        const heading = trimmed.replace(/^\*\*(.+?):\*\*$/, "$1");
        formatted.push(`<h2>${heading}</h2>`);
        return;
      }
      
      if (trimmed.match(/^\*\*(.+?)\*\*$/)) {
        if (inList) {
          formatted.push(listType === "ul" ? "</ul>" : "</ol>");
          inList = false;
          listType = "";
        }
        const heading = trimmed.replace(/^\*\*(.+?)\*\*$/, "$1");
        formatted.push(`<h2>${heading}</h2>`);
        return;
      }

      // Check for bullet points (*, -, •, ■)
      if (trimmed.match(/^[\*\-•■]\s+(.+)$/)) {
        const content = trimmed.replace(/^[\*\-•■]\s+/, "");
        if (!inList || listType !== "ul") {
          if (inList) {
            formatted.push("</ol>");
          }
          formatted.push("<ul>");
          inList = true;
          listType = "ul";
        }
        formatted.push(`<li>${content}</li>`);
        return;
      }

      // Check for numbered lists
      if (trimmed.match(/^\d+\.\s+(.+)$/)) {
        const content = trimmed.replace(/^\d+\.\s+/, "");
        if (!inList || listType !== "ol") {
          if (inList) {
            formatted.push("</ul>");
          }
          formatted.push("<ol>");
          inList = true;
          listType = "ol";
        }
        formatted.push(`<li>${content}</li>`);
        return;
      }

      // Regular text
      if (inList) {
        formatted.push(listType === "ul" ? "</ul>" : "</ol>");
        inList = false;
        listType = "";
      }

      // Handle inline bold **text**
      let processedLine = trimmed.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      
      formatted.push(`<p>${processedLine}</p>`);
    });

    // Close any remaining lists
    if (inList) {
      formatted.push(listType === "ul" ? "</ul>" : "</ol>");
    }

    return formatted.join("");
  };

 const groupConversations = (convs: ConversationItem[]) => {
  const groups: Record<string, ConversationItem[]> = {};

  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  convs.forEach(conv => {

    if (!conv.createdAt) return;

    const dateObj = new Date(conv.createdAt);
    // invalid date guard
    if (isNaN(dateObj.getTime())) {
      console.warn("Invalid date:", conv.createdAt);
      return;
    }

    const date = dateObj.toDateString();

    let label = "Older";

    if (date === today) label = "Today";
    else if (date === yesterday) label = "Yesterday";

    if (!groups[label]) groups[label] = [];
    groups[label].push(conv);
  });

  return groups;
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
        userId: getUserId(),
        message: text,
        files: fileData,
      }),
    });

    const rawText = await resp.text();

    if (!resp.ok) {
      console.error("Server error:", rawText);
      throw new Error("Server error");
    }

    if (!rawText.trim().startsWith("{")) {
      console.error("Invalid response (not JSON):", rawText);
      throw new Error("Invalid response from server");
    }

    const data = JSON.parse(rawText);

    if (!conversationId && data.conversationId) {
      setConversationId(data.conversationId);
      loadConversations();
    }

    return data;
  }

  const handleSend = async () => {
    if (!input.trim() && selectedFiles.length === 0) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
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
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: crypto.randomUUID(),
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      {/* Sidebar */}
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
      
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Chat History</h3>
          <button className="new-chat-btn" onClick={handleClearChat}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            New Chat
          </button>
        </div>
        
        <div className="conversation-list">
  {conversations.length > 0 && Object.entries(groupConversations(conversations)).map(([label, convs]) => (
    <div key={label}>
      <div className="conversation-group-title">{label}</div>

      {convs.map(conv => (
        <div key={conv.id} className="conversation-item">
        <button
          className="conversation-btn"
          onClick={() => loadConversation(conv.id)}
        >
          <span className="conversation-title">
            {editingId === conv.id ? (
              <input
                value={editingTitle}
                autoFocus
                onChange={(e) => setEditingTitle(e.target.value)}
                onBlur={() => {
                  if (editingTitle.trim()) {
                    renameConversation(conv.id, editingTitle);
                  }
                  setEditingId(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    renameConversation(conv.id, editingTitle);
                    setEditingId(null);
                  }
                }}
                className="rename-input"
              />
            ) : (
              conv.title || `Chat ${conv.id}`
            )}
          </span>
        </button>

        <button
          className="edit-conv-btn"
          onClick={(e) => {
            e.stopPropagation();
            setEditingId(conv.id);
            setEditingTitle(conv.title || "");
          }}
        >
          <Pencil size={16} />
        </button>

        <button
          className="delete-conv-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteConversation(conv.id);
          }}
        >
          <Trash2 size={16} />
        </button>

      </div>

            ))}
          </div>
        ))}
      </div>

      </div>

      {/* Header */}
      <ChatHeader 
        onMenuClick={handleMenuClick}
        onBackClick={handleBackClick}
        onClearClick={handleClearChat}
      />

      {/* Chat Container */}
      <div className="chat-container">
        <div className="chat-box" ref={chatBoxRef}>
          {messages.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
              <img src={biologyLogo} alt="Biology Lover AI" />
            </div>
              <h3>Start Your Practice Session</h3>
              <p>Ask questions, upload images, or share files to get started!</p>
              <div className="suggestion-chips">
                <button className="chip" onClick={() => setInput("Explain photosynthesis in detail")}>
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
            messages.map((msg) => (
              <div key={msg.id} className={`message-wrapper ${msg.role}`}>
                <div className="message-avatar">
                  {msg.role === "user" ? (
                    <div className="avatar-user">You</div>
                  ) : (
                    <div className="avatar-bot">
                      <img src={biologyLogo} alt="Biology Lover AI" />
                    </div>
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
                <div className="avatar-bot">
                  <img src={biologyLogo} alt="Biology Lover AI" />
                </div>
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