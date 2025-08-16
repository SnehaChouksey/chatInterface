import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import TopButtons from "./TopButtons";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const ChatWindow = ({ messages, onSendMessage }: ChatWindowProps) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="relative flex flex-col h-full bg-white mx-4 my-6 rounded-xl border border-gray-300 shadow-lg overflow-hidden">
      
      <div className="absolute top-0  right-0 z-10 px-4 py-4 bg-gray-50 ">
        <TopButtons />
      </div>

      
      <div className="flex-1 overflow-y-auto px-4 space-y-4 pt-24 pb-36 bg-gray-50">
        
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Start a new conversation</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs break-words ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto flex items-center gap-3 bg-white border border-gray-300 rounded-xl shadow-md px-4 py-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Message Us..."
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <Button
            type="submit"
            variant="ghost"
            className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-full"
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
