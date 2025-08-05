import { 
  ArrowLeft,
  Play, 
  Check, 
  Clock, 
  Target,
  Repeat,
  Weight,
  Timer,
  ChevronDown,
  ChevronUp,
  Star,
  Trophy,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  weight?: string;
  restTime: string;
  videoUrl?: string;
  completed?: boolean;
  notes?: string;
}

interface WorkoutPlanViewerProps {
  onBack: () => void;
}

export function WorkoutPlanViewer({ onBack }: WorkoutPlanViewerProps) {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const workout = {
    name: "HIIT Cardio Blast",
    duration: 45,
    difficulty: "High",
    category: "Cardio",
    description: "High-intensity interval training to boost cardiovascular fitness and burn calories",
    exercises: [
      {
        id: "1",
        name: "Burpees",
        sets: 4,
        reps: "30 sec",
        restTime: "30 sec",
        notes: "Focus on explosive movement, maintain proper form"
      },
      {
        id: "2", 
        name: "Mountain Climbers",
        sets: 4,
        reps: "45 sec",
        restTime: "15 sec",
        notes: "Keep core tight, quick feet movement"
      },
      {
        id: "3",
        name: "Jump Squats",
        sets: 3,
        reps: "20 reps",
        restTime: "45 sec",
        notes: "Land softly, full range of motion"
      },
      {
        id: "4",
        name: "High Knees",
        sets: 3,
        reps: "30 sec",
        restTime: "30 sec",
        notes: "Drive knees up to waist level"
      },
      {
        id: "5",
        name: "Plank Jacks",
        sets: 3,
        reps: "25 reps",
        restTime: "30 sec",
        notes: "Maintain plank position throughout"
      }
    ] as Exercise[]
  };

  const completedCount = completedExercises.length;
  const totalExercises = workout.exercises.length;
  const progressPercentage = (completedCount / totalExercises) * 100;

  const toggleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const toggleExpanded = (exerciseId: string) => {
    setExpandedExercise(expandedExercise === exerciseId ? null : exerciseId);
  };

  return (
    <div className="pb-20 px-4 space-y-6 bg-gradient-to-br from-black via-gray-900 to-orange-900/20 min-h-screen">
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
            <h1 className="text-2xl font-bold text-white">{workout.name}</h1>
            <div className="flex items-center space-x-4 mt-1">
              <span className="text-gray-400 text-sm">{workout.duration} min</span>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                {workout.difficulty}
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                {workout.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Workout Progress */}
        <div className="luxury-card p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Progress</h3>
              <p className="text-gray-400 text-sm">{completedCount} of {totalExercises} exercises</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient-cyan">{Math.round(progressPercentage)}%</div>
              <div className="text-xs text-gray-400">Complete</div>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-4" />
          
          {!workoutStarted ? (
            <Button 
              onClick={() => setWorkoutStarted(true)}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3"
            >
              <Play className="mr-2" size={20} />
              Start Workout
            </Button>
          ) : (
            <div className="flex items-center justify-center space-x-4 text-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">Elapsed</div>
              </div>
              <Button 
                size="sm"
                className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
              >
                <Timer className="mr-1" size={16} />
                Pause
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Exercise List */}
      <div className="space-y-3">
        {workout.exercises.map((exercise, index) => {
          const isCompleted = completedExercises.includes(exercise.id);
          const isExpanded = expandedExercise === exercise.id;
          
          return (
            <div key={exercise.id} className="luxury-card overflow-hidden">
              {/* Exercise Header */}
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleExerciseComplete(exercise.id)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCompleted 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-600 hover:border-green-500'
                    }`}
                  >
                    {isCompleted && <Check size={16} className="text-white" />}
                  </button>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold ${isCompleted ? 'text-gray-400 line-through' : 'text-white'}`}>
                      {index + 1}. {exercise.name}
                    </h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Repeat size={14} />
                        <span>{exercise.sets} sets</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target size={14} />
                        <span>{exercise.reps}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{exercise.restTime} rest</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleExpanded(exercise.id)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="border-t border-white/10 bg-white/5">
                  <div className="p-4 space-y-4">
                    {/* Video Preview */}
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden relative">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop`}
                        alt={`${exercise.name} demonstration`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center glassmorphism transition-all hover-lift">
                          <Play className="text-white ml-1" size={24} />
                        </button>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-black/50 text-white border-0">
                          2:34
                        </Badge>
                      </div>
                    </div>

                    {/* Exercise Notes */}
                    {exercise.notes && (
                      <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                        <h5 className="font-medium text-accent mb-1">Form Notes</h5>
                        <p className="text-sm text-gray-300 font-light">{exercise.notes}</p>
                      </div>
                    )}

                    {/* Set Tracking */}
                    <div className="space-y-2">
                      <h5 className="font-medium text-white">Track Your Sets</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {Array.from({ length: exercise.sets }, (_, i) => (
                          <Button
                            key={i}
                            variant="outline"
                            size="sm"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            Set {i + 1}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Workout Summary */}
      <div className="luxury-card p-5">
        <h3 className="text-lg font-bold text-white mb-4">Workout Summary</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gradient-cyan mb-1">{workout.exercises.length}</div>
            <div className="text-xs text-gray-400">Exercises</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">{workout.duration}</div>
            <div className="text-xs text-gray-400">Minutes</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-1">
              <Zap className="text-orange-500 mr-1" size={16} />
              <span className="text-2xl font-bold text-white">650</span>
            </div>
            <div className="text-xs text-gray-400">Est. Calories</div>
          </div>
        </div>

        {completedCount === totalExercises && (
          <div className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg text-center">
            <Trophy className="text-yellow-500 mx-auto mb-2" size={32} />
            <h4 className="font-bold text-white mb-1">Workout Complete!</h4>
            <p className="text-sm text-gray-300">Great job finishing your HIIT session</p>
            <Button className="mt-3 bg-green-500 hover:bg-green-600 text-white">
              <Star className="mr-2" size={16} />
              Rate Workout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}