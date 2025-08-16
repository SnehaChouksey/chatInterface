import { Settings, MoreHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button'; 

const TopButtons = () => {
  const handleSettings = () => {
    console.log('Settings clicked');
  };

  const handleMore = () => {
    console.log('More options clicked');
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleSettings}
        className="rounded-full hover:bg-gray-200"
      >
        <Settings size={18} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleMore}
        className="rounded-full hover:bg-gray-200"
      >
        <MoreHorizontal size={18} />
      </Button>
    </div>
  );
};

export default TopButtons;
