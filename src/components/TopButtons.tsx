import { Settings, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button"; // keep shadcn button


export default function TopButtons() {
  return (
    <div className="flex gap-2 bg-gray-200 border rounded-bl-2xl p-2 h-xs hover: border-none ">
      
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 rounded-full bg-transparent hover:shadow-inner hover:bg-white transition-all"
      >
        <Settings size={16} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 rounded-full bg-transparent hover:shadow-inner hover:bg-white transition-all"
      >
        <MoreHorizontal size={16} />
      </Button>
    </div>
  );
}
