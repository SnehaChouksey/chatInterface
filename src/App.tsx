import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainDiv from "./components/MainDiv";

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
    <div className="flex h-screen bg-gray-200">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((prev) => !prev)}
        isMobileOpen={isMobileSidebarOpen}
        onMobileToggle={() => setIsMobileSidebarOpen((prev) => !prev)}
        onNewChat={handleNewChat}
      />

      {/* Main Chat Frame with visible shadow */}
      <div className="flex-1 m-3">
        <MainDiv messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
