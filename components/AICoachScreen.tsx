import { 
  ArrowLeft,
  Star, 
  TrendingUp, 
  Heart, 
  Zap, 
  Target,
  Award,
  Activity,
  Moon,
  Droplets,
  ChevronRight,
  Brain,
  BarChart3
} from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface AICoachScreenProps {
  onBack: () => void;
}

export function AICoachScreen({ onBack }: AICoachScreenProps) {
  return (
    <div className="pb-20 px-4 space-y-6 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 min-h-screen">
      {/* Header */}
      <div className="pt-12 pb-4">
        <div className="flex items-center space-x-4 mb-6">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors glassmorphism"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">AI Coach</h1>
            <p className="text-gray-400 font-light">Your personal performance advisor</p>
          </div>
        </div>
      </div>

      {/* Coach Profile */}
      <div className="luxury-card-purple p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-glow-purple">
            <Brain className="text-white" size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">Coach Sarah</h3>
            <p className="text-purple-300 text-sm font-light">AI Performance Specialist</p>
            <div className="flex items-center mt-2">
              <div className="flex space-x-1 mr-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={12} />
                ))}
              </div>
              <span className="text-xs text-gray-400">Certified Elite Trainer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main AI Message */}
      <div className="luxury-card-purple p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-glow-purple">
            <Star className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gradient-purple">Today's Performance Insight</h4>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                High Priority
              </Badge>
            </div>
            <blockquote className="text-white text-base font-light leading-relaxed mb-4 italic border-l-2 border-purple-500/50 pl-4">
              "Your recovery metrics are absolutely exceptional this week, Jordan! Your resting heart rate has dropped 3 BPM and sleep efficiency improved by 15%. This puts you in the perfect position to increase training intensity. I recommend pushing to 85% max heart rate in today's HIIT session."
            </blockquote>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Generated 2 hours ago</span>
              <Button 
                size="sm" 
                className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30"
              >
                View Details
                <ChevronRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wellness Scores */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Wellness Assessment</h3>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Recovery Score */}
          <div className="luxury-card p-4 text-center">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="3" fill="none" />
                <circle 
                  cx="20" 
                  cy="20" 
                  r="16" 
                  stroke="rgb(0, 212, 255)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="100.48"
                  strokeDashoffset="8.04"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-gradient-cyan">92</span>
              </div>
            </div>
            <h4 className="font-semibold text-white mb-1">Recovery</h4>
            <p className="text-xs text-gray-400">Excellent</p>
          </div>

          {/* Sleep Quality */}
          <div className="luxury-card p-4 text-center">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="3" fill="none" />
                <circle 
                  cx="20" 
                  cy="20" 
                  r="16" 
                  stroke="rgb(168, 85, 247)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="100.48"
                  strokeDashoffset="12.06"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-gradient-purple">88</span>
              </div>
            </div>
            <h4 className="font-semibold text-white mb-1">Sleep</h4>
            <p className="text-xs text-gray-400">Very Good</p>
          </div>

          {/* Stress Level */}
          <div className="luxury-card p-4 text-center">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="3" fill="none" />
                <circle 
                  cx="20" 
                  cy="20" 
                  r="16" 
                  stroke="rgb(34, 197, 94)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="100.48"
                  strokeDashoffset="70.34"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-green-400">30</span>
              </div>
            </div>
            <h4 className="font-semibold text-white mb-1">Stress</h4>
            <p className="text-xs text-gray-400">Low</p>
          </div>

          {/* Readiness */}
          <div className="luxury-card p-4 text-center">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="3" fill="none" />
                <circle 
                  cx="20" 
                  cy="20" 
                  r="16" 
                  stroke="rgb(249, 115, 22)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="100.48"
                  strokeDashoffset="5.02"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-orange-400">95</span>
              </div>
            </div>
            <h4 className="font-semibold text-white mb-1">Readiness</h4>
            <p className="text-xs text-gray-400">Peak</p>
          </div>
        </div>
      </div>

      {/* Workout Suggestions */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Recommended Workouts</h3>
        
        <div className="space-y-3">
          <div className="luxury-card p-4 hover-lift cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">High-Intensity Cardio</h4>
                <p className="text-sm text-gray-400">45 min • Perfect for your recovery level</p>
                <div className="flex items-center mt-2">
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mr-2">
                    Recommended
                  </Badge>
                  <span className="text-xs text-gray-500">85% max HR target</span>
                </div>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </div>

          <div className="luxury-card p-4 hover-lift cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Activity className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">Strength Training</h4>
                <p className="text-sm text-gray-400">60 min • Upper body focus</p>
                <div className="flex items-center mt-2">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mr-2">
                    Alternative
                  </Badge>
                  <span className="text-xs text-gray-500">Progressive overload</span>
                </div>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Previous Insights */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Recent Insights</h3>
        
        <div className="space-y-3">
          <div className="luxury-card p-4">
            <div className="flex items-start space-x-3">
              <TrendingUp className="text-green-400 mt-1" size={16} />
              <div className="flex-1">
                <p className="text-sm text-gray-300 font-light">
                  Your squat form has improved significantly - 23% better depth consistency over the last two weeks.
                </p>
                <span className="text-xs text-gray-500">Yesterday</span>
              </div>
            </div>
          </div>

          <div className="luxury-card p-4">
            <div className="flex items-start space-x-3">
              <Heart className="text-red-400 mt-1" size={16} />
              <div className="flex-1">
                <p className="text-sm text-gray-300 font-light">
                  Resting heart rate trending down - excellent cardiovascular adaptation to your training.
                </p>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
            </div>
          </div>

          <div className="luxury-card p-4">
            <div className="flex items-start space-x-3">
              <Award className="text-yellow-400 mt-1" size={16} />
              <div className="flex-1">
                <p className="text-sm text-gray-300 font-light">
                  New personal record achieved! Your deadlift progression is ahead of schedule.
                </p>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 font-semibold">
          <BarChart3 className="mr-2" size={16} />
          Full Analysis
        </Button>
        
        <Button className="bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30 font-semibold">
          <Target className="mr-2" size={16} />
          Update Goals
        </Button>
      </div>
    </div>
  );
}