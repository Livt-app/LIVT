import { 
  Calendar,
  Clock,
  Target,
  Flame,
  Trophy,
  TrendingUp,
  Activity,
  CheckCircle2,
  Play,
  BarChart3,
  Zap,
  Heart,
  Dumbbell,
  Timer,
  Star,
  Award,
  Crown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TrainTab() {
  const [activeWeek, setActiveWeek] = useState(2);
  
  // Current workout plan data
  const currentPlan = {
    name: "Elite HIIT Challenge",
    creator: "Marcus Johnson",
    week: 2,
    totalWeeks: 8,
    progress: 38,
    workoutsCompleted: 9,
    totalWorkouts: 24,
    nextWorkout: {
      title: "HIIT Cardio Blast",
      duration: "45 min",
      intensity: "High",
      exercises: 8,
      type: "Cardio"
    }
  };

  const weeklyWorkouts = [
    { day: 'Mon', title: 'HIIT Cardio Blast', duration: '45 min', completed: true, type: 'cardio' },
    { day: 'Tue', title: 'Upper Body Power', duration: '50 min', completed: true, type: 'strength' },
    { day: 'Wed', title: 'Core & Flexibility', duration: '30 min', completed: false, type: 'recovery' },
    { day: 'Thu', title: 'Lower Body Burn', duration: '55 min', completed: false, type: 'strength' },
    { day: 'Fri', title: 'Full Body HIIT', duration: '40 min', completed: false, type: 'cardio' },
    { day: 'Sat', title: 'Active Recovery', duration: '25 min', completed: false, type: 'recovery' },
    { day: 'Sun', title: 'Rest Day', duration: '0 min', completed: false, type: 'rest' }
  ];

  return (
    <div className="pb-20 px-4 space-y-8 livt-bg-gradient min-h-screen scroll-container">
      {/* Header */}
      <div className="pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl livt-logo">Train</h1>
            <p className="livt-text-muted text-sm">Your workout plan</p>
          </div>
          <Button className="livt-button-secondary livt-hover-lift livt-scale-tap">
            <BarChart3 className="mr-1" size={16} />
            Analytics
          </Button>
        </div>
      </div>

      {/* CURRENT WORKOUT PLAN - HERO SECTION */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl livt-text-primary mb-2">Your Current Plan</h2>
          <p className="livt-text-secondary">Stay consistent, build strength</p>
        </div>

        {/* Plan Overview Card - BOLD */}
        <div className="livt-card-performance p-8 relative overflow-hidden livt-hover-lift shadow-2xl border-2 border-livt-cyan/30">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-livt-cyan via-livt-purple to-data-green"></div>
          
          {/* Plan Header */}
          <div className="text-center mb-6">
            <h3 className="text-4xl livt-text-primary mb-3">{currentPlan.name}</h3>
            <p className="livt-text-performance text-lg">Created by {currentPlan.creator}</p>
            <div className="flex items-center justify-center space-x-4 text-sm livt-text-secondary mt-2">
              <span>Week {currentPlan.week} of {currentPlan.totalWeeks}</span>
              <span>•</span>
              <span>{currentPlan.workoutsCompleted}/{currentPlan.totalWorkouts} workouts</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="livt-text-muted">Overall Progress</span>
              <span className="livt-text-primary">{currentPlan.progress}%</span>
            </div>
            <div className="livt-progress h-3">
              <div className="livt-progress-bar" style={{ width: `${currentPlan.progress}%` }} />
            </div>
          </div>

          {/* Next Workout Preview */}
          <div className="livt-card p-6 mb-6 bg-black/20 border border-livt-cyan/20">
            <h4 className="livt-text-primary mb-3 text-center font-bold">Next: {currentPlan.nextWorkout.title}</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl livt-text-primary mb-1">{currentPlan.nextWorkout.duration}</div>
                <div className="text-sm livt-text-muted">Duration</div>
              </div>
              <div>
                <div className="text-2xl livt-text-primary mb-1">{currentPlan.nextWorkout.exercises}</div>
                <div className="text-sm livt-text-muted">Exercises</div>
              </div>
              <div>
                <div className="text-2xl livt-text-primary mb-1">{currentPlan.nextWorkout.intensity}</div>
                <div className="text-sm livt-text-muted">Intensity</div>
              </div>
            </div>
          </div>
          
          {/* Action Button - BOLD */}
          <Button className="livt-button-primary w-full py-6 text-xl livt-hover-lift livt-scale-tap shadow-xl">
            <Play className="mr-3" size={24} />
            START TODAY'S WORKOUT
          </Button>
        </div>
      </div>

      {/* This Week's Schedule */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl livt-text-primary">This Week</h3>
          <div className="flex items-center space-x-2">
            <Button className="livt-button-secondary livt-hover-lift livt-scale-tap px-3 py-2">
              Week {activeWeek - 1}
            </Button>
            <Button className="livt-button-primary livt-hover-lift livt-scale-tap px-3 py-2">
              Week {activeWeek}
            </Button>
            <Button className="livt-button-secondary livt-hover-lift livt-scale-tap px-3 py-2">
              Week {activeWeek + 1}
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {weeklyWorkouts.map((workout, index) => (
            <div 
              key={index} 
              className={`livt-card p-6 livt-hover-lift cursor-pointer ${
                workout.completed ? 'border border-data-green/30' : 
                workout.day === 'Wed' ? 'livt-card-performance border-2 border-livt-cyan/30' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Day & Status */}
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    workout.completed ? 'bg-data-green/20' :
                    workout.day === 'Wed' ? 'bg-livt-cyan/20' :
                    workout.type === 'rest' ? 'bg-livt-gray/20' :
                    'bg-white/10'
                  }`}>
                    {workout.completed ? (
                      <CheckCircle2 className="livt-text-success" size={24} />
                    ) : workout.day === 'Wed' ? (
                      <Target className="livt-text-performance" size={24} />
                    ) : workout.type === 'rest' ? (
                      <Heart className="livt-text-muted" size={24} />
                    ) : (
                      <Dumbbell className="text-white" size={24} />
                    )}
                  </div>
                  <div>
                    <div className="text-sm livt-text-muted">{workout.day}</div>
                    <div className="livt-text-primary font-bold">{workout.title}</div>
                  </div>
                </div>

                {/* Workout Info */}
                <div className="flex-1 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm livt-text-secondary">
                    <div className="flex items-center">
                      <Clock className="mr-1" size={14} />
                      {workout.duration}
                    </div>
                    <Badge className={`livt-badge ${
                      workout.type === 'cardio' ? 'livt-badge-performance' :
                      workout.type === 'strength' ? 'livt-badge-warning' :
                      workout.type === 'recovery' ? 'livt-badge-success' :
                      'livt-badge-default'
                    }`}>
                      {workout.type}
                    </Badge>
                  </div>
                  
                  {workout.day === 'Wed' && (
                    <Button className="livt-button-primary px-4 py-2 livt-hover-lift livt-scale-tap">
                      <Play className="mr-1" size={14} />
                      Start
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* METRICS SECTION - MOVED LOWER */}
      <div className="space-y-6">
        <h3 className="text-2xl livt-text-primary">Performance Metrics</h3>
        
        {/* Weekly Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* Workouts This Week */}
          <div className="livt-card-performance p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-livt-cyan/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-livt-cyan"></div>
            <div className="flex flex-col items-center text-center">
              <Dumbbell className="livt-text-performance mb-4" size={32} />
              <div className="text-2xl livt-text-primary mb-1">2/5</div>
              <p className="text-sm livt-text-primary">Workouts</p>
            </div>
          </div>

          {/* Total Minutes */}
          <div className="livt-card p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-data-amber/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-data-amber"></div>
            <div className="flex flex-col items-center text-center">
              <Timer className="livt-text-warning mb-4" size={32} />
              <div className="text-2xl livt-text-primary mb-1">95</div>
              <p className="text-sm livt-text-primary">Minutes</p>
            </div>
          </div>

          {/* Calories Burned */}
          <div className="livt-card p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-data-red/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-data-red"></div>
            <div className="flex flex-col items-center text-center">
              <Flame className="livt-text-error mb-4" size={32} />
              <div className="text-2xl livt-text-primary mb-1">847</div>
              <p className="text-sm livt-text-primary">Calories</p>
            </div>
          </div>

          {/* Streak */}
          <div className="livt-card-ai p-6 relative overflow-hidden livt-hover-lift shadow-xl border border-livt-purple/30">
            <div className="absolute top-0 right-0 w-full h-1 bg-livt-purple"></div>
            <div className="flex flex-col items-center text-center">
              <Trophy className="livt-text-ai mb-4" size={32} />
              <div className="text-2xl livt-text-primary mb-1">28</div>
              <p className="text-sm livt-text-primary">Day Streak</p>
            </div>
          </div>
        </div>

        {/* Performance Chart Preview */}
        <div className="livt-card p-6 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg livt-text-primary">Weekly Performance</h4>
            <Button className="livt-button-secondary px-3 py-2 livt-hover-lift livt-scale-tap">
              <BarChart3 className="mr-1" size={14} />
              View All
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-2 h-32">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="flex flex-col items-center">
                <div className="flex-1 flex items-end mb-2">
                  <div 
                    className={`w-6 rounded-t ${
                      index < 2 ? 'bg-livt-cyan' : 'bg-white/20'
                    }`}
                    style={{ 
                      height: index < 2 ? `${60 + (index * 20)}%` : '20%' 
                    }}
                  />
                </div>
                <div className="text-xs livt-text-muted">{day}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements & Goals */}
      <div className="space-y-6">
        <h3 className="text-2xl livt-text-primary">Achievements</h3>
        
        <div className="space-y-4">
          {/* Recent Achievement */}
          <div className="livt-card-performance p-6 shadow-xl border border-livt-cyan/30 livt-hover-lift">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-data-amber to-data-amber rounded-xl flex items-center justify-center shadow-lg">
                <Award className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">Consistency King</h4>
                <p className="livt-text-secondary">Completed 2 weeks straight!</p>
                <Badge className="mt-2 livt-badge livt-badge-warning">
                  <Star className="mr-1" size={10} />
                  New Achievement
                </Badge>
              </div>
            </div>
          </div>

          {/* Next Goal */}
          <div className="livt-card p-6 shadow-xl border border-white/20 livt-hover-lift">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-livt-cyan to-livt-cyan rounded-xl flex items-center justify-center shadow-lg">
                <Target className="text-black" size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg livt-text-primary mb-1">Next Goal</h4>
                <p className="livt-text-secondary">Complete 3 more workouts this week</p>
                <div className="mt-3">
                  <div className="livt-progress h-2">
                    <div className="livt-progress-bar" style={{ width: '40%' }} />
                  </div>
                  <div className="flex justify-between text-xs livt-text-muted mt-1">
                    <span>2/5 workouts</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}