import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

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
    <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden">
      {/* Messages area */}
      <div className="flex-1 min-h-0 overflow-y-auto px-3 space-y-3 pt-4 pb-20 bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Start a new conversation</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-2xl max-w-xs break-words text-sm ${
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

      {/* Input box */}
      <div className="rounded-b-lg left-0 right-0 px-3 py-2 bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-blue-500 transition"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Message us..."
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
