import { 
  Users, 
  Trophy, 
  Flame, 
  Star, 
  Crown,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  UserPlus,
  Target,
  Zap,
  CheckCircle2,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CommunityTab() {
  const [joinedGroups] = useState(['VASA Lehi', 'Biceps & Bible Bros']);

  return (
    <div className="pb-20 px-4 space-y-8 livt-bg-gradient min-h-screen scroll-container">
      {/* Header */}
      <div className="pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl livt-logo">Community</h1>
            <p className="livt-text-muted text-sm">Connect and compete</p>
          </div>
          <Badge className="livt-badge livt-badge-success px-4 py-2">
            <Users className="mr-1" size={14} />
            2 Groups
          </Badge>
        </div>
      </div>

      {/* Your Community Standing - BOLD */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl livt-text-primary mb-2">Your Community Standing</h2>
          <p className="livt-text-secondary">How you rank in your groups</p>
        </div>

        {/* Community Rankings Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* VASA Lehi Rank */}
          <div className="livt-card-performance p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-livt-cyan/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-livt-cyan"></div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="livt-text-performance mb-4" size={32} />
              <div className="text-3xl livt-text-primary mb-1">#12</div>
              <p className="text-sm livt-text-primary mb-1">VASA Lehi</p>
              <div className="flex items-center livt-text-success text-xs">
                <TrendingUp className="mr-1" size={10} />
                +3 this week
              </div>
            </div>
          </div>

          {/* Biceps & Bible Bros Rank */}
          <div className="livt-card-ai p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-livt-purple/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-livt-purple"></div>
            <div className="flex flex-col items-center text-center">
              <Crown className="livt-text-ai mb-4" size={32} />
              <div className="text-3xl livt-text-primary mb-1">#23</div>
              <p className="text-sm livt-text-primary mb-1">Bible Bros</p>
              <div className="flex items-center livt-text-warning text-xs">
                <Flame className="mr-1" size={10} />
                8 day devotion
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Stats Summary */}
        <div className="livt-card p-6 shadow-xl border border-white/20">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl livt-text-primary mb-1">2,289</div>
              <div className="text-sm livt-text-muted">Total XP</div>
            </div>
            <div>
              <div className="text-2xl livt-text-success mb-1">5</div>
              <div className="text-sm livt-text-muted">Workouts</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-1">
                <Flame className="livt-text-warning mr-1 streak-fire-animate" size={20} />
                <span className="text-2xl livt-text-primary">15</span>
              </div>
              <div className="text-sm livt-text-muted">Day Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Communities - BOLD */}
      <div className="space-y-6">
        <h3 className="text-2xl livt-text-primary">My Communities</h3>
        
        <div className="space-y-4">
          {/* VASA Lehi - BOLD */}
          <div className="livt-card-performance p-8 livt-hover-lift shadow-xl border border-livt-cyan/30">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-livt-cyan to-livt-cyan rounded-xl flex items-center justify-center shadow-lg">
                <MapPin className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-xl livt-text-primary">VASA Lehi</h4>
                  <Badge className="livt-badge livt-badge-performance">
                    Gym
                  </Badge>
                </div>
                <p className="livt-text-secondary mb-3">Your local fitness community</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg livt-text-primary">847</div>
                    <div className="text-xs livt-text-muted">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg livt-text-primary">#12</div>
                    <div className="text-xs livt-text-muted">Your Rank</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="livt-card p-6 bg-black/20 border border-livt-cyan/20">
              <h5 className="livt-text-primary mb-3">Weekly Challenge</h5>
              <p className="text-sm livt-text-secondary mb-4">Complete 5 workouts for VASA gear</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="livt-text-muted">Progress</span>
                  <span className="livt-text-primary">4/5 workouts</span>
                </div>
                <div className="livt-progress h-3">
                  <div className="livt-progress-bar" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Biceps & Bible Bros - BOLD */}
          <div className="livt-card-ai p-8 livt-hover-lift shadow-xl border border-livt-purple/30">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-livt-purple to-livt-purple rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-xl livt-text-primary">Biceps & Bible Bros</h4>
                  <Badge className="livt-badge livt-badge-ai">
                    Creator
                  </Badge>
                </div>
                <p className="livt-text-secondary mb-3">Faith-based fitness brotherhood</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg livt-text-primary">1,247</div>
                    <div className="text-xs livt-text-muted">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg livt-text-primary">#23</div>
                    <div className="text-xs livt-text-muted">Your Rank</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="livt-card p-6 bg-black/20 border border-livt-purple/20">
              <h5 className="livt-text-primary mb-3">February Focus</h5>
              <p className="text-sm livt-text-secondary mb-4">"Discipline over motivation"</p>
              <div className="flex items-center justify-between text-sm">
                <span className="livt-text-ai">Daily devotions: 8/10</span>
                <Badge className="livt-badge livt-badge-ai text-xs">
                  <Star className="mr-1" size={10} />
                  Elite
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This Week's Achievements - BOLD */}
      <div className="space-y-6">
        <h3 className="text-2xl livt-text-primary">Community Highlights</h3>
        
        <div className="space-y-4">
          {/* Personal Achievement */}
          <div className="livt-card-performance p-6 shadow-xl border border-livt-cyan/30 livt-hover-lift">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-livt-cyan to-livt-cyan rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="text-black" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">Your Achievement</h4>
                <p className="livt-text-secondary">Climbed 3 spots at VASA this week!</p>
                <Badge className="mt-2 livt-badge livt-badge-performance">
                  <TrendingUp className="mr-1" size={10} />
                  Rising Star
                </Badge>
              </div>
            </div>
          </div>

          {/* Community Star - VASA */}
          <div className="livt-card p-6 shadow-xl border border-data-amber/30 livt-hover-lift">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-data-amber to-data-amber rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="text-black" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">VASA Champion</h4>
                <p className="livt-text-secondary">Marcus Johnson - 7 workouts this week!</p>
                <Badge className="mt-2 livt-badge livt-badge-warning">
                  <Flame className="mr-1" size={10} />
                  Beast Mode
                </Badge>
              </div>
            </div>
          </div>

          {/* Community Star - Bible Bros */}
          <div className="livt-card-ai p-6 shadow-xl border border-livt-purple/30 livt-hover-lift">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-livt-purple to-livt-purple rounded-xl flex items-center justify-center shadow-lg">
                <Star className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">Faith & Fitness</h4>
                <p className="livt-text-secondary">Sarah Chen - 22 day devotion streak!</p>
                <Badge className="mt-2 livt-badge livt-badge-ai">
                  <CheckCircle2 className="mr-1" size={10} />
                  Faithful
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Communities - BOLD */}
      <div className="space-y-6">
        <h3 className="text-2xl livt-text-primary">Discover</h3>
        
        <div className="space-y-4">
          <div className="livt-card p-6 livt-hover-lift shadow-xl border border-white/20">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-data-red to-data-red rounded-xl flex items-center justify-center shadow-lg">
                <Flame className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">Iron Paradise</h4>
                <p className="livt-text-secondary">Hardcore strength training</p>
                <div className="flex items-center space-x-4 text-sm livt-text-muted mt-2">
                  <span>2,340 members</span>
                  <span>•</span>
                  <span>Powerlifting focused</span>
                </div>
              </div>
              <Button className="livt-button-primary livt-hover-lift livt-scale-tap">
                <UserPlus className="mr-1" size={16} />
                Join
              </Button>
            </div>
          </div>

          <div className="livt-card p-6 livt-hover-lift shadow-xl border border-white/20">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-livt-purple to-livt-purple rounded-xl flex items-center justify-center shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">FitMoms United</h4>
                <p className="livt-text-secondary">Supporting moms' fitness journey</p>
                <div className="flex items-center space-x-4 text-sm livt-text-muted mt-2">
                  <span>890 members</span>
                  <span>•</span>
                  <span>Family-friendly</span>
                </div>
              </div>
              <Button className="livt-button-primary livt-hover-lift livt-scale-tap">
                <UserPlus className="mr-1" size={16} />
                Join
              </Button>
            </div>
          </div>

          <div className="livt-card p-6 livt-hover-lift shadow-xl border border-white/20">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-data-green to-data-green rounded-xl flex items-center justify-center shadow-lg">
                <Target className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">CrossFit Warriors</h4>
                <p className="livt-text-secondary">High-intensity functional fitness</p>
                <div className="flex items-center space-x-4 text-sm livt-text-muted mt-2">
                  <span>1,567 members</span>
                  <span>•</span>
                  <span>WOD focused</span>
                </div>
              </div>
              <Button className="livt-button-primary livt-hover-lift livt-scale-tap">
                <UserPlus className="mr-1" size={16} />
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}