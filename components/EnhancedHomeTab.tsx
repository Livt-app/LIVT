import { 
  Zap, 
  Droplets, 
  Apple, 
  Moon, 
  Star, 
  ChevronRight, 
  Target, 
  Trophy,
  Activity,
  Flame,
  TrendingUp,
  Calendar,
  Play,
  Check,
  Users,
  Crown,
  ArrowRight,
  Eye,
  DollarSign,
  Clock,
  CheckCircle2,
  Timer,
  BarChart3,
  Heart,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EnhancedHomeTabProps {
  onShowNotifications?: () => void;
}

export function EnhancedHomeTab({ onShowNotifications }: EnhancedHomeTabProps) {
  const [showPlanPreview, setShowPlanPreview] = useState(false);

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long', 
    day: 'numeric' 
  });

  const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  if (showPlanPreview) {
    return <PlanPreviewModal onClose={() => setShowPlanPreview(false)} />;
  }

  return (
    <div className="pb-20 px-4 space-y-8 livt-bg-gradient min-h-screen scroll-container">
      {/* Top Section - Clean Header with Icons */}
      <div className="pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl livt-logo">LIVT</h1>
            <p className="livt-text-muted text-sm">{currentDate}</p>
            {/* Subtle streak */}
            <div className="flex items-center mt-2 text-xs">
              <div className="flex items-center livt-text-warning">
                <Flame className="mr-1 streak-fire-animate" size={14} />
                <span className="font-semibold">28 day streak</span>
              </div>
            </div>
          </div>
          
          {/* Top Right Icons - Clean Instagram Style */}
          <div className="flex items-center space-x-6">
            {/* Notifications Heart Icon - Clean */}
            <button 
              onClick={onShowNotifications}
              className="livt-hover-lift livt-scale-tap"
            >
              <Heart className="text-white" size={24} />
            </button>
            
            {/* DM Icon */}
            <button className="livt-hover-lift livt-scale-tap">
              <MessageCircle className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION - Today's Workout */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl livt-text-primary mb-2">{dayOfWeek}'s Workout</h2>
          <p className="livt-text-secondary">Ready to dominate today</p>
        </div>

        {/* Featured Workout Card - BOLD */}
        <div className="livt-card-performance p-8 relative overflow-hidden livt-hover-lift cursor-pointer shadow-2xl border-2 border-livt-cyan/30" onClick={() => setShowPlanPreview(true)}>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-livt-cyan via-livt-purple to-data-green"></div>
          
          {/* Workout Header */}
          <div className="text-center mb-6">
            <h3 className="text-4xl livt-text-primary mb-3">HIIT Cardio Blast</h3>
            <div className="flex items-center justify-center space-x-4 text-lg livt-text-performance">
              <div className="flex items-center">
                <Clock className="mr-2" size={20} />
                45 min
              </div>
              <div className="flex items-center">
                <Flame className="mr-2" size={20} />
                High Intensity
              </div>
            </div>
          </div>

          {/* Workout Preview */}
          <div className="livt-card p-6 mb-6 bg-black/20 border border-livt-cyan/20">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl livt-text-primary mb-1">8</div>
                <div className="text-sm livt-text-muted">Rounds</div>
              </div>
              <div>
                <div className="text-2xl livt-text-primary mb-1">45s</div>
                <div className="text-sm livt-text-muted">Work</div>
              </div>
              <div>
                <div className="text-2xl livt-text-primary mb-1">15s</div>
                <div className="text-sm livt-text-muted">Rest</div>
              </div>
            </div>
          </div>
          
          {/* Action Button - BOLD */}
          <Button className="livt-button-primary w-full py-6 text-xl livt-hover-lift livt-scale-tap shadow-xl">
            <Play className="mr-3" size={24} />
            START WORKOUT
          </Button>

          {/* Creator Attribution - Subtle */}
          <div className="text-center mt-4">
            <p className="text-xs livt-text-muted opacity-60">Created by Marcus "The Beast" Johnson</p>
          </div>
        </div>
      </div>

      {/* Bold Check-ins - Icon Focused */}
      <div className="space-y-6">
        <h3 className="text-2xl livt-text-primary">Today's Check-ins</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Hydration - BOLD */}
          <div className="livt-card-performance p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-livt-cyan/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-livt-cyan"></div>
            <div className="flex flex-col items-center text-center">
              <Droplets className="livt-text-performance mb-4" size={40} />
              <div className="text-2xl livt-text-primary mb-1">87%</div>
              <p className="text-sm livt-text-primary">Hydration</p>
            </div>
          </div>

          {/* Nutrition - BOLD */}
          <div className="livt-card p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-data-green/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-data-green"></div>
            <div className="flex flex-col items-center text-center">
              <Apple className="livt-text-success mb-4" size={40} />
              <div className="text-2xl livt-text-primary mb-1">84%</div>
              <p className="text-sm livt-text-primary">Nutrition</p>
            </div>
          </div>

          {/* Sleep - BOLD */}
          <div className="livt-card-ai p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-livt-purple/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-livt-purple"></div>
            <div className="flex flex-col items-center text-center">
              <Moon className="livt-text-ai mb-4" size={40} />
              <div className="text-2xl livt-text-primary mb-1">8h</div>
              <p className="text-sm livt-text-primary">Sleep</p>
            </div>
          </div>

          {/* Recovery - BOLD */}
          <div className="livt-card p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-data-amber/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-data-amber"></div>
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="livt-text-warning mb-4" size={40} />
              <div className="text-2xl livt-text-primary mb-1">Peak</div>
              <p className="text-sm livt-text-primary">Recovery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bold Weekly Progress */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl livt-text-primary">This Week</h3>
          <Button className="livt-button-secondary livt-hover-lift livt-scale-tap">
            <BarChart3 className="mr-2" size={16} />
            Details
          </Button>
        </div>
        
        <div className="livt-card-performance p-8 shadow-xl border border-livt-cyan/30">
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="text-center">
              <div className="text-4xl livt-text-success mb-2">4/5</div>
              <div className="text-sm livt-text-muted">Workouts</div>
              <div className="flex items-center justify-center livt-text-success text-sm mt-2">
                <CheckCircle2 className="mr-1" size={16} />
                On Track
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl livt-text-primary mb-2">80%</div>
              <div className="text-sm livt-text-muted">Complete</div>
              <div className="livt-progress h-2 mt-3">
                <div className="livt-progress-bar" style={{ width: '80%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bold Community Quick View */}
      <div className="livt-card-ai p-8 shadow-xl border border-livt-purple/30">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl livt-text-primary">Your Communities</h3>
          <ChevronRight className="livt-text-muted" size={24} />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-livt-cyan to-livt-cyan rounded-xl flex items-center justify-center shadow-lg">
              <Users className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <p className="livt-text-primary font-bold">VASA Lehi</p>
              <p className="text-sm livt-text-muted">Ranked #12 this week</p>
            </div>
            <Badge className="livt-badge livt-badge-performance">
              Active
            </Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-livt-purple to-livt-purple rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <p className="livt-text-primary font-bold">Biceps & Bible Bros</p>
              <p className="text-sm livt-text-muted">Devotion streak: 8 days</p>
            </div>
            <Badge className="livt-badge livt-badge-ai">
              Elite
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

// Plan Preview Modal Component
function PlanPreviewModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="livt-bg-gradient rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto scroll-container shadow-2xl">
        {/* Header */}
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-t-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=225&fit=crop"
              alt="HIIT Cardio Blast Workout"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center glassmorphism transition-all livt-hover-lift shadow-xl">
                <Play className="text-white ml-1" size={32} />
              </button>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors text-xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl livt-text-primary mb-2">HIIT Cardio Blast</h2>
            <p className="livt-text-secondary">High-intensity interval training for maximum fat burn and cardiovascular fitness.</p>
            <p className="text-sm livt-text-muted mt-2 opacity-60">Created by Marcus "The Beast" Johnson</p>
          </div>

          {/* Workout Structure */}
          <div className="livt-card-performance p-6 border border-livt-cyan/30">
            <h3 className="livt-text-primary mb-4 text-center font-bold">Today's Structure</h3>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="text-2xl livt-text-primary">8</div>
                <div className="text-xs livt-text-muted">Rounds</div>
              </div>
              <div>
                <div className="text-2xl livt-text-primary">45s</div>
                <div className="text-xs livt-text-muted">Work</div>
              </div>
              <div>
                <div className="text-2xl livt-text-primary">15s</div>
                <div className="text-xs livt-text-muted">Rest</div>
              </div>
            </div>
          </div>

          {/* Exercises Preview */}
          <div>
            <h3 className="livt-text-primary mb-3 font-bold">Exercises</h3>
            <div className="space-y-2">
              {[
                "Burpees",
                "Mountain Climbers", 
                "Jump Squats",
                "High Knees"
              ].map((exercise, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 livt-card">
                  <div className="w-6 h-6 bg-livt-cyan rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="livt-text-primary">{exercise}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button className="livt-button-primary w-full py-6 text-xl livt-hover-lift livt-scale-tap shadow-xl">
            <Play className="mr-3" size={24} />
            START WORKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}