import { Home, Activity, Users, Dumbbell, User } from 'lucide-react';

interface MobileNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function MobileNavigation({ activeTab, onTabChange }: MobileNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'train', label: 'Train', icon: Dumbbell },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 livt-bg-gradient backdrop-blur-lg border-t border-white/10 z-40">
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center p-3 min-w-0 flex-1 transition-all duration-200 livt-scale-tap ${
                isActive ? 'transform scale-105' : 'opacity-60 hover:opacity-80'
              }`}
            >
              <div className={`p-2 rounded-xl mb-1 transition-all livt-hover-lift ${
                isActive 
                  ? 'livt-card-performance shadow-xl border border-livt-cyan/30' 
                  : 'hover:bg-white/10'
              }`}>
                <Icon 
                  size={22} 
                  className={`${
                    isActive ? 'livt-text-performance' : 'text-gray-400'
                  } transition-colors`}
                />
              </div>
              <span className={`text-xs font-medium ${
                isActive ? 'livt-text-performance' : 'text-gray-400'
              } transition-colors`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}