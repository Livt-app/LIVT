import { 
  Apple, 
  Droplets, 
  Zap, 
  Plus, 
  Minus,
  Target,
  TrendingUp,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function FuelTab() {
  const [waterIntake, setWaterIntake] = useState(6);
  const [todayMacros] = useState({
    calories: { consumed: 1847, target: 2200 },
    protein: { consumed: 142, target: 165 },
    carbs: { consumed: 178, target: 220 },
    fats: { consumed: 68, target: 85 }
  });

  const waterTarget = 8;
  const waterPercentage = (waterIntake / waterTarget) * 100;

  const addWater = () => {
    if (waterIntake < waterTarget) {
      setWaterIntake(waterIntake + 1);
    }
  };

  const removeWater = () => {
    if (waterIntake > 0) {
      setWaterIntake(waterIntake - 1);
    }
  };

  return (
    <div className="pb-20 px-4 space-y-6 bg-gradient-to-br from-black via-gray-900 to-blue-900/10 min-h-screen">
      {/* Header */}
      <div className="pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Fuel Tracker</h1>
            <p className="text-gray-400 font-light">Monitor your nutrition goals</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-cyan">84%</div>
            <div className="text-xs text-gray-400">Daily Goal</div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="luxury-card p-4 bg-gradient-to-r from-green-500/10 to-transparent border-l-2 border-green-500/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <TrendingUp className="text-green-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Great Progress Today!</h3>
              <p className="text-sm text-gray-400 font-light">You're 84% toward your daily calorie goal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Macros Today */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Macros Today</h3>
        
        <div className="luxury-card p-5">
          {/* Calories */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Zap className="text-orange-400" size={20} />
                <span className="font-semibold text-white">Calories</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">
                  {todayMacros.calories.consumed} / {todayMacros.calories.target}
                </div>
                <div className="text-xs text-gray-400">
                  {todayMacros.calories.target - todayMacros.calories.consumed} remaining
                </div>
              </div>
            </div>
            <Progress 
              value={(todayMacros.calories.consumed / todayMacros.calories.target) * 100} 
              className="h-3 mb-2" 
            />
          </div>

          {/* Protein, Carbs, Fats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-gradient-cyan mb-1">
                {todayMacros.protein.consumed}g
              </div>
              <div className="text-xs text-gray-400 mb-2">of {todayMacros.protein.target}g</div>
              <div className="text-xs font-medium text-white">Protein</div>
              <Progress 
                value={(todayMacros.protein.consumed / todayMacros.protein.target) * 100} 
                className="h-1 mt-2" 
              />
            </div>
            
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">
                {todayMacros.carbs.consumed}g
              </div>
              <div className="text-xs text-gray-400 mb-2">of {todayMacros.carbs.target}g</div>
              <div className="text-xs font-medium text-white">Carbs</div>
              <Progress 
                value={(todayMacros.carbs.consumed / todayMacros.carbs.target) * 100} 
                className="h-1 mt-2" 
              />
            </div>
            
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">
                {todayMacros.fats.consumed}g
              </div>
              <div className="text-xs text-gray-400 mb-2">of {todayMacros.fats.target}g</div>
              <div className="text-xs font-medium text-white">Fats</div>
              <Progress 
                value={(todayMacros.fats.consumed / todayMacros.fats.target) * 100} 
                className="h-1 mt-2" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hydration Tracker */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Hydration</h3>
        
        <div className="luxury-card p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Droplets className="text-blue-400" size={24} />
              <div>
                <h4 className="font-semibold text-white">Water Intake</h4>
                <p className="text-sm text-gray-400 font-light">{waterIntake} of {waterTarget} glasses</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient-cyan">{Math.round(waterPercentage)}%</div>
              <div className="text-xs text-gray-400">Complete</div>
            </div>
          </div>

          {/* Water Glass Visual */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            {Array.from({ length: waterTarget }, (_, i) => (
              <div 
                key={i} 
                className={`w-8 h-10 rounded-b-lg border-2 transition-all ${
                  i < waterIntake 
                    ? 'bg-blue-400/30 border-blue-400 shadow-glow-cyan' 
                    : 'bg-transparent border-gray-600'
                }`}
              >
                <div 
                  className={`w-full rounded-b-lg transition-all duration-500 ${
                    i < waterIntake ? 'bg-blue-400 h-full' : 'h-0'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={removeWater}
              disabled={waterIntake <= 0}
              size="sm"
              variant="outline"
              className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
            >
              <Minus size={16} />
            </Button>
            <div className="text-center">
              <div className="text-lg font-bold text-white">{waterIntake * 8} oz</div>
              <div className="text-xs text-gray-400">consumed</div>
            </div>
            <Button
              onClick={addWater}
              disabled={waterIntake >= waterTarget}
              size="sm"
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-glow-cyan disabled:opacity-50"
            >
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Next Meal Suggestion */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Next Meal Suggestion</h3>
        
        <div className="luxury-card p-5 hover-lift cursor-pointer">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Apple className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-white mb-1">Dinner Recommendation</h4>
              <p className="text-sm text-gray-400 font-light">Based on your daily goals</p>
              <div className="flex items-center mt-2">
                <Clock className="text-gray-500 mr-1" size={12} />
                <span className="text-xs text-gray-500">Suggested for 7:00 PM</span>
              </div>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
          
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h5 className="font-medium text-white mb-2">Grilled Salmon with Quinoa & Vegetables</h5>
            <p className="text-sm text-gray-300 font-light mb-3">Perfect balance to hit your remaining protein and carb targets</p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-gradient-cyan">32g</div>
                <div className="text-xs text-gray-400">Protein</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">28g</div>
                <div className="text-xs text-gray-400">Carbs</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">425</div>
                <div className="text-xs text-gray-400">Calories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Tips */}
      <div className="luxury-card-purple p-5">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-glow-purple">
            <Sparkles className="text-white" size={16} />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gradient-purple mb-2">AI Nutrition Tip</h4>
            <p className="text-sm text-gray-300 font-light">
              You're doing great with protein intake! Consider adding a small handful of nuts to your afternoon snack to reach your healthy fat goals for optimal hormone production.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button 
          className="luxury-card p-4 h-auto flex flex-col items-center space-y-2 bg-transparent border-white/10 hover:bg-white/5 text-white"
          variant="outline"
        >
          <Target className="text-accent" size={24} />
          <span className="text-sm font-medium">Log Meal</span>
        </Button>
        
        <Button 
          className="luxury-card p-4 h-auto flex flex-col items-center space-y-2 bg-transparent border-white/10 hover:bg-white/5 text-white"
          variant="outline"
        >
          <TrendingUp className="text-green-400" size={24} />
          <span className="text-sm font-medium">View Trends</span>
        </Button>
      </div>
    </div>
  );
}