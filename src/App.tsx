import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const botReply: Message = {
        id: messages.length + 2,
        text: "This is a bot response.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  const handleNewChat = () => setMessages([]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((prev) => !prev)}
        isMobileOpen={isMobileSidebarOpen}
        onMobileToggle={() => setIsMobileSidebarOpen((prev) => !prev)}
        onNewChat={handleNewChat}
      />

      <div className="flex-1 flex flex-col">
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
