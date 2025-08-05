import { 
  Settings,
  Edit3,
  Share2,
  Trophy,
  Target,
  Flame,
  CheckCircle2,
  MoreHorizontal,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Timer,
  BarChart3,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProfileTab() {
  const [activeTab, setActiveTab] = useState('programs');
  
  // User profile data (LIVT as placeholder)
  const userProfile = {
    name: "LIVT",
    username: "livt",
    isVerified: true,
    joinedDate: "January 2023"
  };

  // Current Programs
  const currentPrograms = [
    {
      name: "Elite HIIT Challenge",
      creator: "FitnessGuru",
      progress: 65,
      daysLeft: 12,
      totalWorkouts: 24,
      completedWorkouts: 15,
      difficulty: "Advanced"
    },
    {
      name: "Strength Builder Pro",
      creator: "IronMike",
      progress: 40,
      daysLeft: 28,
      totalWorkouts: 36,
      completedWorkouts: 14,
      difficulty: "Intermediate"
    },
    {
      name: "Morning Mobility",
      creator: "YogaFlow",
      progress: 80,
      daysLeft: 5,
      totalWorkouts: 15,
      completedWorkouts: 12,
      difficulty: "Beginner"
    }
  ];

  // Personal Records
  const personalRecords = [
    {
      exercise: "Bench Press",
      weight: "225 lbs",
      reps: 5,
      date: "2 days ago",
      improvement: "+10 lbs",
      category: "Strength"
    },
    {
      exercise: "Deadlift",
      weight: "315 lbs",
      reps: 3,
      date: "1 week ago",
      improvement: "+15 lbs",
      category: "Strength"
    },
    {
      exercise: "5K Run",
      weight: "22:34",
      reps: null,
      date: "3 days ago",
      improvement: "-1:15",
      category: "Cardio"
    },
    {
      exercise: "Pull-ups",
      weight: "Bodyweight",
      reps: 15,
      date: "5 days ago",
      improvement: "+3 reps",
      category: "Strength"
    },
    {
      exercise: "Plank Hold",
      weight: "3:45",
      reps: null,
      date: "1 week ago",
      improvement: "+45 sec",
      category: "Core"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden pb-20">
      {/* Ultra Dark Background Effects - Matching Onboarding */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/3 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/2 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/1 to-transparent rounded-full" />
      </div>

      {/* Header - Simplified */}
      <div className="pt-12 pb-8 px-4 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold livt-logo">Profile</h1>
          </div>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors glassmorphism hover-lift">
            <Settings size={24} className="text-luxury-primary" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 relative z-10 space-y-8">
        
        {/* Profile Section - Onboarding Style */}
        <div className="text-center space-y-6 counter-animate">
          {/* Profile Picture with Glow */}
          <div className="relative mx-auto w-32 h-32">
            <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden shadow-2xl bg-black flex items-center justify-center">
              <div 
                className="text-2xl font-bold livt-logo text-white livt-glow-subtle"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.15)',
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))'
                }}
              >
                LIVT
              </div>
            </div>
            {/* Verification Badge */}
            {userProfile.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-blue-500 rounded-full border-4 border-black flex items-center justify-center shadow-glow-white">
                <CheckCircle2 className="text-white" size={20} />
              </div>
            )}
          </div>

          {/* Name & Username */}
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <h2 className="text-3xl text-luxury-primary font-bold">{userProfile.name}</h2>
              {userProfile.isVerified && (
                <CheckCircle2 className="text-blue-500" size={24} />
              )}
            </div>
            <p className="text-luxury-secondary">@{userProfile.username}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-3">
            <Button
              className="glow-button px-8 py-3 text-lg font-semibold rounded-xl hover-lift scale-in"
            >
              <Edit3 className="mr-2" size={18} />
              Edit Profile
            </Button>
            <Button className="livt-button-secondary p-3 hover-lift scale-in">
              <Share2 size={18} />
            </Button>
          </div>
        </div>

        {/* Highlights Section - Onboarding Card Style */}
        <div className="onboarding-card p-6 slide-in">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center space-y-3 hover-lift scale-in cursor-pointer">
              <div className="mx-auto">
                <Trophy className="text-luxury-primary" size={32} />
              </div>
              <span className="text-xs text-luxury-muted block">PRs</span>
            </div>
            <div className="text-center space-y-3 hover-lift scale-in cursor-pointer">
              <div className="mx-auto">
                <Target className="text-luxury-primary" size={32} />
              </div>
              <span className="text-xs text-luxury-muted block">Goals</span>
            </div>
            <div className="text-center space-y-3 hover-lift scale-in cursor-pointer">
              <div className="mx-auto">
                <Flame className="text-luxury-primary" size={32} />
              </div>
              <span className="text-xs text-luxury-muted block">Workouts</span>
            </div>
            <div className="text-center space-y-3 hover-lift scale-in cursor-pointer">
              <div className="mx-auto">
                <BookOpen className="text-luxury-primary" size={32} />
              </div>
              <span className="text-xs text-luxury-muted block">Programs</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation - Onboarding Style */}
        <div className="onboarding-card p-1 slide-in">
          <div className="grid grid-cols-2 gap-1">
            <button 
              className={`py-4 px-6 rounded-xl text-center transition-all hover-lift scale-in ${
                activeTab === 'programs' 
                  ? 'bg-white/10 text-luxury-primary shadow-glow-white' 
                  : 'text-luxury-muted hover:text-luxury-secondary'
              }`}
              onClick={() => setActiveTab('programs')}
            >
              <BookOpen className="mx-auto mb-2" size={20} />
              <span className="text-sm font-semibold">Programs</span>
            </button>
            <button 
              className={`py-4 px-6 rounded-xl text-center transition-all hover-lift scale-in ${
                activeTab === 'prs' 
                  ? 'bg-white/10 text-luxury-primary shadow-glow-white' 
                  : 'text-luxury-muted hover:text-luxury-secondary'
              }`}
              onClick={() => setActiveTab('prs')}
            >
              <Trophy className="mx-auto mb-2" size={20} />
              <span className="text-sm font-semibold">PRs</span>
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="space-y-4">
          {activeTab === 'programs' && (
            <div className="space-y-4">
              {currentPrograms.map((program, index) => (
                <div 
                  key={index} 
                  className="onboarding-card p-6 hover-lift scale-in cursor-pointer slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl text-luxury-primary font-bold mb-1">{program.name}</h3>
                        <p className="text-luxury-secondary text-sm">by {program.creator}</p>
                      </div>
                      <Badge className={`livt-badge ${
                        program.difficulty === 'Advanced' ? 'livt-badge-warning' :
                        program.difficulty === 'Intermediate' ? 'livt-badge-performance' :
                        'livt-badge-success'
                      }`}>
                        {program.difficulty}
                      </Badge>
                    </div>

                    {/* Progress */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-luxury-secondary">Progress</span>
                        <span className="text-lg text-luxury-primary font-bold counter-animate">{program.progress}%</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden glassmorphism">
                        <div 
                          className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ease-out pulse-glow"
                          style={{ width: `${program.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg text-luxury-primary font-bold counter-animate">
                          {program.completedWorkouts}/{program.totalWorkouts}
                        </div>
                        <div className="text-xs text-luxury-muted">Workouts</div>
                      </div>
                      <div>
                        <div className="text-lg text-luxury-primary font-bold counter-animate">{program.daysLeft}</div>
                        <div className="text-xs text-luxury-muted">Days Left</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center text-lg text-luxury-primary font-bold">
                          <Calendar size={16} className="mr-1" />
                          Active
                        </div>
                        <div className="text-xs text-luxury-muted">Status</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'prs' && (
            <div className="space-y-4">
              {personalRecords.map((pr, index) => (
                <div 
                  key={index} 
                  className="onboarding-card p-6 hover-lift scale-in cursor-pointer slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    {/* Category Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center glassmorphism ${
                      pr.category === 'Strength' ? 'bg-white/5' :
                      pr.category === 'Cardio' ? 'bg-white/5' :
                      'bg-white/5'
                    }`}>
                      {pr.category === 'Strength' && <Trophy className="text-luxury-primary" size={20} />}
                      {pr.category === 'Cardio' && <Timer className="text-luxury-primary" size={20} />}
                      {pr.category === 'Core' && <Target className="text-luxury-primary" size={20} />}
                    </div>

                    {/* PR Info */}
                    <div className="flex-1">
                      <h4 className="text-lg text-luxury-primary font-bold">{pr.exercise}</h4>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-luxury-secondary text-xl font-bold counter-animate">
                          {pr.weight}
                          {pr.reps && ` × ${pr.reps}`}
                        </span>
                        <Badge className="livt-badge-success text-xs">
                          <TrendingUp className="mr-1" size={10} />
                          {pr.improvement}
                        </Badge>
                      </div>
                      <p className="text-xs text-luxury-muted">{pr.date}</p>
                    </div>

                    {/* Achievement Icon */}
                    <div>
                      <Award className="text-luxury-primary" size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}