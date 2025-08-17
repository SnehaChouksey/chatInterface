import ChatWindow from "./ChatWindow";
import TopButtons from "./TopButtons";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface MainDivProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const MainDiv = ({ messages, onSendMessage }: MainDivProps) => {
  return (
    <div className="relative h-full w-full rounded-lg shadow-lg bg-white flex flex-col p-[4px]">
      {/* Top Buttons */}
      <div className="flex justify-end gap-2 p-2">
        <TopButtons />
      </div>

      {/* Chat Window fills remaining space */}
      <div className="flex-1 min-h-0">
        <ChatWindow messages={messages} onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default MainDiv;
