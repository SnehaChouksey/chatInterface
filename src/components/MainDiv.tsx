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
    <div className="relative h-full w-full rounded-lg  bg-white flex flex-col  ">
      {/* Top Buttons */}
      <div className="relative flex justify-end mt-0 rounded-lg bg-white gap-0.1 ">
        <div className="flex bg-gray-200 rounded-bl-full w-xs h-xs pr-1 ">
       <div className="w-xs h-12 bg-white transform skew-x-21 rounded-tr-lg "></div>

        </div>
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
