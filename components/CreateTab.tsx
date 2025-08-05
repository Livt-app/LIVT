import { Plus, Dumbbell, Apple, Target, Share2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function CreateTab() {
  return (
    <div className="pb-20 px-4 space-y-6">
      {/* Header */}
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-bold">Create & Share</h1>
        <p className="text-gray-600 dark:text-gray-400">Build your perfect training plan</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-6 text-center hover-lift cursor-pointer bg-gradient-to-br from-accent/10 to-blue-500/10 border-accent/30">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
            <Dumbbell className="text-white" size={24} />
          </div>
          <h3 className="font-semibold">Workout Plan</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Create custom workouts</p>
        </Card>
        
        <Card className="p-6 text-center hover-lift cursor-pointer bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Apple className="text-white" size={24} />
          </div>
          <h3 className="font-semibold">Meal Plan</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Design nutrition plans</p>
        </Card>
      </div>

      {/* Plan Builder */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Quick Plan Builder</h3>
        <div className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            <Target className="mr-2" size={16} />
            Set Fitness Goal
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Plus className="mr-2" size={16} />
            Add Exercises
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Share2 className="mr-2" size={16} />
            Share with Community
          </Button>
        </div>
      </Card>

      {/* Templates */}
      <div className="space-y-4">
        <h3 className="font-semibold">Popular Templates</h3>
        
        <div className="space-y-3">
          {[
            { name: "HIIT Burn", type: "Cardio", duration: "20 min", difficulty: "Intermediate" },
            { name: "Strength Builder", type: "Strength", duration: "45 min", difficulty: "Advanced" },
            { name: "Morning Flow", type: "Yoga", duration: "15 min", difficulty: "Beginner" }
          ].map((template, index) => (
            <Card key={index} className="p-4 hover-lift cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{template.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {template.type} • {template.duration} • {template.difficulty}
                  </p>
                </div>
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  Use Template
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Creator Tools */}
      <Card className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30">
        <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Creator Tools</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Ready to monetize your expertise? Unlock advanced creation tools and start earning.
        </p>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Upgrade to Creator
        </Button>
      </Card>
    </div>
  );
}