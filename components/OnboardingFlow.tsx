import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check,
  Zap,
  Target,
  TrendingUp,
  Activity,
  Eye,
  Dumbbell,
  Home,
  Users,
  User,
  UserPlus,
  Crown,
  MapPin,
  Heart,
  Book,
  Star
} from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showMicrocopy, setShowMicrocopy] = useState(false);

  const totalSteps = 8;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Screen data with step labels and real athlete images
  const screens = [
    {
      id: 'welcome',
      type: 'welcome',
      title: 'Welcome to LIVT',
      subtitle: "Let's build your fitness experience.",
      cta: 'Get Started',
      stepLabel: null
    },
    {
      id: 'goal',
      type: 'goal_visual',
      title: "What's your primary goal right now?",
      stepLabel: 'Your Goal',
      options: [
        { 
          value: 'build_muscle', 
          label: 'Build muscle', 
          image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop',
          alt: 'Athlete building muscle'
        },
        { 
          value: 'lose_fat', 
          label: 'Lose fat', 
          image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop',
          alt: 'Woman doing cardio workout'
        },
        { 
          value: 'improve_performance', 
          label: 'Improve performance', 
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
          alt: 'Athlete in performance training'
        },
        { 
          value: 'get_consistent', 
          label: 'Get consistent', 
          image: 'https://images.unsplash.com/photo-1506629905586-bfd7ac305441?w=400&h=300&fit=crop',
          alt: 'Person maintaining consistency'
        },
        { 
          value: 'just_exploring', 
          label: 'Just exploring', 
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
          alt: 'Person exploring fitness'
        }
      ]
    },
    {
      id: 'training_style',
      type: 'select',
      title: 'What best describes your training style?',
      stepLabel: 'Training Style',
      helpText: 'Not sure? No worries — we can adjust this later.',
      options: [
        { value: 'beginner', label: 'Beginner', description: 'New to fitness or getting back into it' },
        { value: 'intermediate', label: 'Intermediate', description: 'Training regularly for 6+ months' },
        { value: 'advanced', label: 'Advanced', description: 'Training consistently for 2+ years' },
        { value: 'coach_trainer', label: 'Coach/Trainer', description: 'I train others professionally' }
      ]
    },
    {
      id: 'training_days',
      type: 'slider',
      title: 'How many days a week do you want to train?',
      stepLabel: 'Training Days',
      min: 1,
      max: 7,
      default: 4
    },
    {
      id: 'equipment',
      type: 'multiselect',
      title: 'What equipment do you have access to?',
      stepLabel: 'Equipment Access',
      options: [
        { value: 'full_gym', label: 'Gym (full equipment)', icon: Dumbbell },
        { value: 'dumbbells', label: 'Dumbbells only', icon: Dumbbell },
        { value: 'resistance_bands', label: 'Resistance bands', icon: Activity },
        { value: 'bodyweight', label: 'Bodyweight only', icon: User },
        { value: 'home_setup', label: 'Home setup', icon: Home }
      ]
    },
    {
      id: 'training_with',
      type: 'select',
      title: 'Who are you training with?',
      stepLabel: 'Training Partners',
      options: [
        { value: 'just_me', label: 'Just me', description: 'Training solo and loving it' },
        { value: 'my_coach', label: 'My coach sent me', description: 'Following a specific program' },
        { value: 'creator_follow', label: 'A creator I follow', description: 'Fan of a specific trainer' },
        { value: 'team_gym', label: 'Joining a team/gym crew', description: 'Want to train with others' }
      ]
    },
    {
      id: 'collective',
      type: 'collective_visual',
      title: 'Want to train with a community?',
      subtitle: 'Join others on the same journey',
      stepLabel: 'Your Community',
      options: [
        { 
          value: 'livt_collective', 
          label: 'The LIVT Collective', 
          description: 'Our main community for all fitness goals',
          members: '12,847',
          badge: 'Official',
          image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop'
        },
        { 
          value: 'biceps_bible', 
          label: 'Biceps & Bible Bros', 
          description: 'Faith-based fitness brotherhood',
          members: '1,247',
          badge: 'Creator',
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=200&fit=crop'
        },
        { 
          value: 'vasa_lehi', 
          label: 'VASA Lehi Crew', 
          description: 'Local gym community in Utah',
          members: '847',
          badge: 'Gym',
          image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=200&fit=crop'
        },
        { 
          value: 'not_now', 
          label: 'Not now', 
          description: 'I prefer to train solo for now',
          members: null,
          badge: null,
          image: null
        }
      ]
    },
    {
      id: 'complete',
      type: 'complete',
      title: "You're in.",
      subtitle: 'Welcome to LIVT, Champion.',
      stepLabel: null
    }
  ];

  const currentScreen = screens[currentStep];

  // Personalized microcopy based on selections
  const getMicrocopy = (screenId: string, value: any): string => {
    switch (screenId) {
      case 'goal':
        const goalMessages = {
          'build_muscle': 'Perfect — muscle building is what most of our elite users focus on.',
          'lose_fat': 'Excellent choice — sustainable fat loss is our specialty.',
          'improve_performance': 'Outstanding — performance training is where champions are made.',
          'get_consistent': 'Smart approach — consistency beats perfection every time.',
          'just_exploring': 'Welcome explorer — we will help you find your path.'
        };
        return goalMessages[value] || '';
      
      case 'training_days':
        if (value <= 2) return 'Perfect for getting started without overwhelming yourself.';
        if (value >= 3 && value <= 4) return 'Ideal balance — this is how most elite athletes maintain consistency.';
        if (value >= 5 && value <= 6) return 'Serious dedication — you are training like a pro athlete.';
        if (value === 7) return 'Elite commitment level — we respect the grind.';
        return '';

      case 'equipment':
        if (Array.isArray(value)) {
          if (value.includes('bodyweight')) return 'Bodyweight-only setups? We have got you covered. No gym? No problem.';
          if (value.includes('full_gym')) return 'Full gym access unlocks unlimited potential. Let us maximize it.';
          if (value.includes('home_setup')) return 'Home gym warriors unite — some of our best results come from home.';
          return 'Great equipment choices — we will build the perfect plan around what you have.';
        }
        return '';

      case 'training_with':
        const partnerMessages = {
          'just_me': 'Solo training? We will still make it feel like you have a team behind you.',
          'my_coach': 'Coach-guided training is the fastest path to results. Smart move.',
          'creator_follow': 'Following a creator shows you value expertise. We respect that.',
          'team_gym': 'Team training creates accountability. You will love the community energy.'
        };
        return partnerMessages[value] || '';

      case 'collective':
        const collectiveMessages = {
          'livt_collective': 'Welcome to the main community — you are joining fitness royalty.',
          'biceps_bible': 'Faith and fitness together — this community has incredible energy.',
          'vasa_lehi': 'Local gym communities create the strongest bonds. Great choice.',
          'not_now': 'Solo journey it is — you can always join a community later.'
        };
        return collectiveMessages[value] || '';

      default:
        return '';
    }
  };

  const handleAnswer = (value: any) => {
    if (currentScreen.type === 'multiselect') {
      const currentAnswers = selectedAnswers;
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(item => item !== value)
        : [...currentAnswers, value];
      setSelectedAnswers(newAnswers);
      setAnswers(prev => ({ ...prev, [currentScreen.id]: newAnswers }));
    } else {
      setAnswers(prev => ({ ...prev, [currentScreen.id]: value }));
      
      // Show personalized microcopy
      const microcopy = getMicrocopy(currentScreen.id, value);
      if (microcopy) {
        setShowMicrocopy(true);
        setTimeout(() => setShowMicrocopy(false), 3000);
      }
      
      if (currentScreen.type === 'select' || currentScreen.type === 'goal_visual' || currentScreen.type === 'collective_visual') {
        // Auto-advance for single select after showing microcopy
        setTimeout(() => handleNext(), microcopy ? 1500 : 400);
      }
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setIsTransitioning(true);
      setShowMicrocopy(false);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setSelectedAnswers([]);
        setIsTransitioning(false);
      }, 200);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setIsTransitioning(true);
      setShowMicrocopy(false);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const isStepComplete = () => {
    const answer = answers[currentScreen.id];
    if (currentScreen.type === 'multiselect') {
      return Array.isArray(answer) && answer.length > 0;
    }
    if (currentScreen.type === 'slider') {
      return answer !== undefined;
    }
    return answer !== undefined;
  };

  const renderScreen = () => {
    switch (currentScreen.type) {
      case 'welcome':
        return <WelcomeScreen onNext={handleNext} />;
      case 'goal_visual':
        return (
          <GoalVisualScreen
            screen={currentScreen}
            selectedValue={answers[currentScreen.id]}
            onSelect={handleAnswer}
          />
        );
      case 'select':
        return (
          <SelectScreen
            screen={currentScreen}
            selectedValue={answers[currentScreen.id]}
            onSelect={handleAnswer}
          />
        );
      case 'multiselect':
        return (
          <MultiSelectScreen
            screen={currentScreen}
            selectedValues={selectedAnswers}
            onSelect={handleAnswer}
          />
        );
      case 'slider':
        return (
          <SliderScreen
            screen={currentScreen}
            value={answers[currentScreen.id] || currentScreen.default}
            onChange={handleAnswer}
          />
        );
      case 'collective_visual':
        return (
          <CollectiveVisualScreen
            screen={currentScreen}
            selectedValue={answers[currentScreen.id]}
            onSelect={handleAnswer}
          />
        );
      case 'complete':
        return (
          <CompleteScreen
            answers={answers}
            onComplete={onComplete}
          />
        );
      default:
        return null;
    }
  };

  const currentMicrocopy = getMicrocopy(currentScreen.id, answers[currentScreen.id]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Ultra Dark Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/3 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/2 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/1 to-transparent rounded-full" />
      </div>
      
      {/* Header */}
      {currentScreen.type !== 'welcome' && currentScreen.type !== 'complete' && (
        <div className="pt-12 pb-8 px-4 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={handleBack}
              className="p-2 hover:bg-white/5 rounded-full transition-colors glassmorphism hover-lift"
            >
              <ChevronLeft size={24} className="text-luxury-primary" />
            </button>
            <div className="text-center">
              <div className="text-xs text-luxury-muted mb-2">
                Step {currentStep}: {currentScreen.stepLabel}
              </div>
              <h1 className="text-lg font-bold livt-logo">LIVT</h1>
            </div>
            <div className="w-10 h-10" />
          </div>
          
          {/* Progress Bar - Ultra Luxury */}
          <div className="relative">
            <div className="h-2 bg-white/5 rounded-full overflow-hidden glassmorphism">
              <div 
                className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ease-out pulse-glow"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 flex flex-col justify-center px-4 relative z-10 transition-opacity duration-200 ${
        isTransitioning ? 'opacity-0' : 'opacity-100 slide-in'
      }`}>
        {renderScreen()}
      </div>

      {/* Personalized Microcopy */}
      {showMicrocopy && currentMicrocopy && (
        <div className="fixed bottom-32 left-4 right-4 z-20">
          <div className="bg-luxury-card p-4 max-w-md mx-auto microcopy-fade rounded-2xl">
            <p className="text-sm text-luxury-secondary font-light text-center">{currentMicrocopy}</p>
          </div>
        </div>
      )}

      {/* Continue Button (for multi-select and slider) */}
      {(currentScreen.type === 'multiselect' || currentScreen.type === 'slider') && (
        <div className="pb-8 px-4 relative z-10">
          <Button
            onClick={handleNext}
            disabled={!isStepComplete()}
            className="w-full max-w-md mx-auto flex items-center justify-center glow-button py-4 text-lg font-semibold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover-lift scale-in"
          >
            Continue
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      )}
    </div>
  );
}

// Welcome Screen Component - Enhanced with bigger logo and glow
function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center space-y-12 py-8">
      <div className="counter-animate">
        <div className="mb-12">
          {/* Bigger LIVT Logo with Glow */}
          <h1 
            className="text-8xl font-bold livt-logo mb-6"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.15), 0 0 90px rgba(255, 255, 255, 0.1)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))'
            }}
          >
            LIVT
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full pulse-glow" />
        </div>
        
        {/* Smaller Welcome Text */}
        <h2 className="text-xl font-bold mb-3 text-luxury-primary">Welcome to LIVT</h2>
        <p className="text-sm text-luxury-secondary font-light mb-12">Let's build your fitness experience.</p>
      </div>

      {/* Bigger Glowing Get Started Button */}
      <Button
        onClick={onNext}
        className="px-16 py-6 text-xl font-semibold rounded-xl hover-lift scale-in"
        style={{
          background: 'linear-gradient(135deg, var(--livt-white), var(--livt-light-gray))',
          color: 'var(--livt-black)',
          border: 'none',
          fontWeight: '700',
          transition: 'all 0.2s ease',
          boxShadow: '0 0 40px rgba(255, 255, 255, 0.2), 0 8px 32px rgba(255, 255, 255, 0.1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 255, 255, 0.4), 0 12px 40px rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.2), 0 8px 32px rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(0px) scale(1)';
        }}
      >
        Get Started
        <ChevronRight className="ml-3" size={24} />
      </Button>
    </div>
  );
}

// Goal Visual Screen Component - Real athlete images
function GoalVisualScreen({ screen, selectedValue, onSelect }: any) {
  return (
    <div className="max-w-md mx-auto w-full space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-luxury-primary">{screen.title}</h2>
      </div>

      <div className="space-y-4">
        {screen.options.map((option: any, index: number) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`w-full rounded-xl transition-all hover-lift scale-in onboarding-card overflow-hidden ${
              selectedValue === option.value ? 'selected bounce-select' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-[16/9] relative">
              <ImageWithFallback
                src={option.image}
                alt={option.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-lg">{option.label}</h3>
                  {selectedValue === option.value && (
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-glow-white">
                      <Check size={16} className="text-black" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Select Screen Component
function SelectScreen({ screen, selectedValue, onSelect }: any) {
  return (
    <div className="max-w-md mx-auto w-full space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-luxury-primary">{screen.title}</h2>
        {screen.helpText && (
          <p className="text-sm text-luxury-muted font-light">{screen.helpText}</p>
        )}
      </div>

      <div className="space-y-3">
        {screen.options.map((option: any, index: number) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`w-full p-4 text-left rounded-xl transition-all hover-lift scale-in onboarding-card ${
              selectedValue === option.value ? 'selected bounce-select' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-luxury-primary">{option.label}</h3>
                {option.description && (
                  <p className="text-sm text-luxury-muted font-light mt-1">{option.description}</p>
                )}
              </div>
              {selectedValue === option.value && (
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-4 shadow-glow-white">
                  <Check size={16} className="text-black" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Multi Select Screen Component
function MultiSelectScreen({ screen, selectedValues, onSelect }: any) {
  return (
    <div className="max-w-md mx-auto w-full space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-luxury-primary">{screen.title}</h2>
      </div>

      <div className="space-y-3">
        {screen.options.map((option: any, index: number) => {
          const isSelected = selectedValues.includes(option.value);
          
          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={`w-full p-4 text-left rounded-xl transition-all hover-lift scale-in onboarding-card ${
                isSelected ? 'selected bounce-select' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                {option.icon && (
                  <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center shadow-glow-white">
                    <option.icon className="text-black" size={18} />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-luxury-primary">{option.label}</h3>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected 
                    ? 'bg-white border-white shadow-glow-white' 
                    : 'border-gray-400'
                }`}>
                  {isSelected && <Check size={16} className="text-black" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Slider Screen Component
function SliderScreen({ screen, value, onChange }: any) {
  return (
    <div className="max-w-md mx-auto w-full space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-luxury-primary">{screen.title}</h2>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <div className="text-6xl font-bold text-luxury-primary mb-2 counter-animate">
            {value}
          </div>
          <p className="text-luxury-muted font-light">days per week</p>
        </div>

        <div className="flex justify-center space-x-2">
          {Array.from({ length: 7 }, (_, i) => i + 1).map((day) => (
            <button
              key={day}
              onClick={() => onChange(day)}
              className={`w-12 h-12 rounded-xl border-2 transition-all hover-lift scale-in ${
                value === day
                  ? 'bg-white border-white text-black bounce-select shadow-glow-white'
                  : 'border-gray-400 text-gray-400 hover:border-gray-300'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Collective Visual Screen Component - Community images
function CollectiveVisualScreen({ screen, selectedValue, onSelect }: any) {
  return (
    <div className="max-w-md mx-auto w-full space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-luxury-primary">{screen.title}</h2>
        <p className="text-luxury-muted font-light">{screen.subtitle}</p>
      </div>

      <div className="space-y-4">
        {screen.options.map((option: any, index: number) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`w-full text-left rounded-xl transition-all hover-lift scale-in onboarding-card overflow-hidden ${
              selectedValue === option.value ? 'selected bounce-select' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {option.image ? (
              <>
                <div className="aspect-[2/1] relative">
                  <ImageWithFallback
                    src={option.image}
                    alt={option.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    {option.badge && (
                      <Badge className={`text-xs border-0 ${
                        option.badge === 'Official' 
                          ? 'bg-white/20 text-white'
                          : option.badge === 'Creator'
                          ? 'bg-white/15 text-white'
                          : 'bg-white/10 text-white'
                      }`}>
                        {option.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    {selectedValue === option.value && (
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-glow-white">
                        <Check size={16} className="text-black" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-luxury-primary mb-1">{option.label}</h3>
                  <p className="text-sm text-luxury-secondary font-light mb-2">{option.description}</p>
                  {option.members && (
                    <div className="flex items-center text-xs text-luxury-muted">
                      <Users className="mr-1" size={12} />
                      {option.members} members
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-luxury-primary mb-1">{option.label}</h3>
                    <p className="text-sm text-luxury-muted font-light">{option.description}</p>
                  </div>
                  {selectedValue === option.value && (
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-glow-white">
                      <Check size={16} className="text-black" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Complete Screen Component with Celebration
function CompleteScreen({ answers, onComplete }: any) {
  const userName = 'Champion';
  
  return (
    <div className="text-center space-y-8 relative">
      {/* Ultra Luxury Confetti - Monochromatic */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 20}%`,
              backgroundColor: i % 3 === 0 ? '#ffffff' : i % 3 === 1 ? '#c0c0c0' : '#8a8a8a',
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="counter-animate">
        <div className="mb-8">
          <h1 className="text-6xl font-bold livt-logo mb-4 livt-glow-subtle">LIVT</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full pulse-glow" />
        </div>
        
        <h2 className="text-4xl font-bold mb-4 text-luxury-primary">You're in.</h2>
        <h3 className="text-2xl font-light mb-8 text-luxury-secondary">Welcome to LIVT, {userName}.</h3>
        
        <div className="text-sm text-luxury-muted space-y-2 mb-8">
          <p>Your personalized experience is ready.</p>
          <p>Time to elevate your fitness.</p>
        </div>
      </div>

      <Button
        onClick={onComplete}
        className="glow-button px-12 py-4 text-lg font-semibold rounded-xl hover-lift scale-in"
      >
        Enter LIVT
        <ChevronRight className="ml-2" size={20} />
      </Button>
    </div>
  );
}