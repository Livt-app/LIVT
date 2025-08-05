import { Trophy, Users, Medal, TrendingUp, Crown, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CompeteTab() {
  return (
    <div className="pb-20 px-4 space-y-6">
      {/* Header */}
      <div className="pt-12 pb-4">
        <h1 className="text-2xl font-bold">Compete</h1>
        <p className="text-gray-600 dark:text-gray-400">Rise through the ranks</p>
      </div>

      {/* Current Rank */}
      <Card className="p-4 bg-gradient-to-r from-accent/10 to-yellow-500/10 border-accent/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Crown className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Your Rank</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">#847 Global • #23 Local</p>
            </div>
          </div>
          <Badge className="bg-accent text-white">Elite</Badge>
        </div>
      </Card>

      {/* Weekly Challenge */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Weekly Challenge</h3>
          <Badge variant="outline">4 days left</Badge>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Target className="text-orange-500" size={20} />
            <div className="flex-1">
              <p className="font-medium">Burn 2,500 calories</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">1,847 / 2,500 calories</p>
            </div>
          </div>
          <Progress value={74} />
          <div className="text-center p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
            <div className="font-bold text-orange-600 dark:text-orange-400">Prize: +500 XP & Badge</div>
          </div>
        </div>
      </Card>

      {/* Leaderboards */}
      <div className="space-y-4">
        <h3 className="font-semibold">Leaderboards</h3>
        
        <Card className="p-4">
          <h4 className="font-medium mb-3">This Week's Top Performers</h4>
          <div className="space-y-3">
            {[
              { rank: 1, name: "Sarah Kim", xp: "12,847", avatar: "female athlete" },
              { rank: 2, name: "Mike Johnson", xp: "11,293", avatar: "male fitness" },
              { rank: 3, name: "Alex Chen", xp: "10,756", avatar: "asian athlete" },
              { rank: 4, name: "You", xp: "9,432", avatar: "user", isUser: true }
            ].map((user, index) => (
              <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                user.isUser ? 'bg-accent/10 border border-accent/30' : 'bg-gray-50 dark:bg-gray-900'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8">
                    {user.rank <= 3 ? (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        user.rank === 1 ? 'bg-yellow-500' : 
                        user.rank === 2 ? 'bg-gray-400' : 'bg-amber-600'
                      }`}>
                        <Medal className="text-white" size={14} />
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-gray-500">#{user.rank}</span>
                    )}
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=32&h=32&fit=crop&crop=face`}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`font-medium ${user.isUser ? 'text-accent' : ''}`}>
                    {user.name}
                  </span>
                </div>
                <span className="font-semibold">{user.xp} XP</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Team Challenges */}
      <Card className="p-4">
        <h4 className="font-medium mb-3">Team Challenges</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Users className="text-blue-500" size={20} />
              <div>
                <p className="font-medium">Team Alpha</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">5 members • 2nd place</p>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Active
            </Badge>
          </div>
        </div>
      </Card>

      {/* Gym Groups */}
      <Card className="p-4">
        <h4 className="font-medium mb-3">Local Gym Groups</h4>
        <div className="space-y-3">
          {[
            { name: "FitLife Downtown", members: "127", distance: "0.8 mi" },
            { name: "CrossFit Warriors", members: "89", distance: "1.2 mi" }
          ].map((gym, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div>
                <p className="font-medium">{gym.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {gym.members} members • {gym.distance} away
                </p>
              </div>
              <Badge variant="outline">Join</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}