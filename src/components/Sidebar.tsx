import { X, Menu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileToggle: () => void;
  onNewChat: () => void;
}

const Sidebar = ({ isCollapsed, onToggle, isMobileOpen, onMobileToggle, onNewChat }: SidebarProps) => {
  const chatHistory = ['Recent chat1','Recent chat2','Recent chat3','Recent chat4','Recent chat5'];

  
  const chatRefs = useRef<(HTMLButtonElement | null)[]>([]);
  chatRefs.current = [];

  const addToRefs = (el: HTMLButtonElement | null) => {
    if (el && !chatRefs.current.includes(el)) chatRefs.current.push(el);
  };

  // GSAP stagger animation
  useEffect(() => {
    if (!isCollapsed || isMobileOpen) {
      gsap.fromTo(
        chatRefs.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.25, ease: 'power2.out' }
      );
    }
  }, [isCollapsed, isMobileOpen]);

  const showChatHistory = !isCollapsed || isMobileOpen;

  return (
    <>
      
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onMobileToggle} />
      )}

      
      <button onClick={onMobileToggle} className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-white border border-gray-300">
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      
      <div className={`fixed md:relative top-0 left-0 h-full bg-white border-r border-gray-200 z-50 flex flex-col transition-all duration-300 ease-in-out
        ${isCollapsed ? 'md:w-16' : 'md:w-64'}
        ${isMobileOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:translate-x-0'}
      `}>
        
        <div className="hidden md:flex justify-end p-2">
          <button onClick={onToggle} className="p-2 rounded-md hover:bg-gray-200 transition-colors">
            {isCollapsed ? <Menu size={16} /> : <X size={16} />}
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4 pt-2">
          <Button onClick={onNewChat} className="w-full py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium">
            {isCollapsed ? '+' : ' New Chat'}
          </Button>
        </div>

        {/* Chat History */}
        {showChatHistory && (
          <div className="flex-1 px-4 pb-4 overflow-y-auto">
            <h3 className="text-xs font-medium text-gray-600 mb-2 opacity-70">Recent Chats</h3>
            <div className="space-y-1">
              {chatHistory.map((chat, index) => (
                <button
                  key={index}
                  ref={addToRefs}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 truncate"
                >
                  {chat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
