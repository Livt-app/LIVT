import { Zap, Droplets, Apple, Moon, Star, ChevronRight, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomeTab() {
  return (
    <div className="pb-20 px-4 space-y-6">
      {/* Header */}
      <div className="pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Good Morning</h1>
            <p className="text-gray-600 dark:text-gray-400">Ready to crush your goals?</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center">
            <Zap className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* AI Feedback Bubble */}
      <Card className="glassmorphism p-4 border-accent/20">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
            <Star className="text-white" size={16} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              You're 15% ahead of your weekly goal! Consider adding 10 minutes to today's cardio session for optimal performance.
            </p>
          </div>
        </div>
      </Card>

      {/* XP & Streak Trackers */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">XP Today</span>
            <Zap className="text-accent" size={16} />
          </div>
          <div className="text-2xl font-bold">1,247</div>
          <div className="text-xs text-gray-500">+280 from yesterday</div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Streak</span>
            <Target className="text-orange-500" size={16} />
          </div>
          <div className="text-2xl font-bold">12 Days</div>
          <div className="text-xs text-gray-500">Personal best!</div>
        </Card>
      </div>

      {/* Daily Trackers */}
      <div className="space-y-4">
        <h3 className="font-semibold">Today's Progress</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
            <div className="flex items-center space-x-3">
              <Droplets className="text-blue-500" size={20} />
              <div>
                <p className="font-medium">Hydration</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">6 of 8 glasses</p>
              </div>
            </div>
            <Progress value={75} className="w-20" />
          </div>
          
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/30 rounded-xl">
            <div className="flex items-center space-x-3">
              <Apple className="text-green-500" size={20} />
              <div>
                <p className="font-medium">Macros</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">1,847 of 2,200 cals</p>
              </div>
            </div>
            <Progress value={84} className="w-20" />
          </div>
          
          <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
            <div className="flex items-center space-x-3">
              <Moon className="text-purple-500" size={20} />
              <div>
                <p className="font-medium">Sleep</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">7h 32m last night</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Good
            </Badge>
          </div>
        </div>
      </div>

      {/* Creator Spotlight Carousel */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Creator Spotlight</h3>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[
            { name: "Alex Chen", type: "HIIT Expert", image: "fitness trainer" },
            { name: "Maria Santos", type: "Nutrition Coach", image: "female athlete" },
            { name: "Jake Miller", type: "Strength Coach", image: "male fitness" }
          ].map((creator, index) => (
            <Card key={index} className="flex-shrink-0 w-40 p-3 hover-lift cursor-pointer">
              <div className="w-full h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-3 overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=160&h=96&fit=crop&crop=face`}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-sm">{creator.name}</h4>
              <p className="text-xs text-gray-500">{creator.type}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Daily Quest Card */}
      <Card className="p-4 bg-gradient-to-r from-accent/10 to-blue-500/10 border-accent/30">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-accent">Daily Quest</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Complete 30 minutes of cardio
            </p>
            <div className="flex items-center mt-2">
              <Progress value={60} className="w-32 mr-3" />
              <span className="text-xs text-gray-500">18/30 min</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-accent">+150 XP</div>
            <Badge className="bg-accent text-white">Active</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}