import { Settings, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button"; // keep shadcn button

export default function TopButtons() {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 rounded-full bg-white shadow-lg hover:shadow-inner transition-all"
      >
        <Settings size={16} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 rounded-full bg-white shadow-lg hover:shadow-inner transition-all"
      >
        <MoreHorizontal size={16} />
      </Button>
    </div>
  );
}
