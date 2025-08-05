import { useState } from 'react';
import { MobileNavigation } from './MobileNavigation';
import { EnhancedHomeTab } from './EnhancedHomeTab';
import { TrainTab } from './TrainTab';
import { CreatorTab } from './CreatorTab';
import { CommunityTab } from './CommunityTab';
import { ProfileTab } from './ProfileTab';
import { NotificationsScreen } from './NotificationsScreen';
import { OnboardingFlow } from './OnboardingFlow';
import { MobileLogin } from './MobileLogin';
import { AICoachScreen } from './AICoachScreen';
import { WorkoutPlanViewer } from './WorkoutPlanViewer';

export function MobileApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAICoach, setShowAICoach] = useState(false);
  const [showWorkoutPlan, setShowWorkoutPlan] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const renderActiveTab = () => {
    if (showNotifications) {
      return <NotificationsScreen onBack={() => setShowNotifications(false)} />;
    }

    if (showAICoach) {
      return <AICoachScreen onBack={() => setShowAICoach(false)} />;
    }

    if (showWorkoutPlan) {
      return <WorkoutPlanViewer onBack={() => setShowWorkoutPlan(false)} />;
    }

    switch (activeTab) {
      case 'home':
        return <EnhancedHomeTab onShowNotifications={() => setShowNotifications(true)} />;
      case 'train':
        return <TrainTab />;
      case 'creator':
        return <CreatorTab />;
      case 'community':
        return <CommunityTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <EnhancedHomeTab onShowNotifications={() => setShowNotifications(true)} />;
    }
  };

  if (showOnboarding) {
    return <OnboardingFlow onComplete={() => setShowOnboarding(false)} />;
  }

  if (showLogin) {
    return <MobileLogin onBack={() => setShowLogin(false)} />;
  }

  return (
    <div className="w-full max-w-sm mx-auto livt-bg-gradient min-h-screen relative">
      {/* Tab Content */}
      <div className="h-full overflow-y-auto scroll-container">
        {renderActiveTab()}
      </div>

      {/* Bottom Navigation - hide when showing special screens */}
      {!showAICoach && !showWorkoutPlan && !showNotifications && (
        <MobileNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {/* Demo buttons - Updated with LIVT styling */}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        <button
          onClick={() => setShowOnboarding(true)}
          className="livt-button-performance px-3 py-2 rounded-xl text-xs livt-hover-lift livt-scale-tap shadow-xl"
        >
          Onboarding
        </button>
        <button
          onClick={() => setShowLogin(true)}
          className="livt-button-secondary px-3 py-2 rounded-xl text-xs livt-hover-lift livt-scale-tap"
        >
          Login
        </button>
        <button
          onClick={() => setShowAICoach(true)}
          className="livt-button-ai px-3 py-2 rounded-xl text-xs livt-hover-lift livt-scale-tap shadow-xl"
        >
          AI Coach
        </button>
        <button
          onClick={() => setShowWorkoutPlan(true)}
          className="livt-button-primary px-3 py-2 rounded-xl text-xs livt-hover-lift livt-scale-tap"
        >
          Workout
        </button>
      </div>
    </div>
  );
}