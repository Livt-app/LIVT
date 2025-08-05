import { 
  ArrowLeft,
  Heart,
  MessageSquare,
  UserPlus,
  Trophy,
  Star,
  Flame,
  CheckCircle2,
  Crown,
  Target,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NotificationsScreenProps {
  onBack: () => void;
}

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: 'Marcus Johnson',
      avatar: 'M',
      action: 'liked your workout completion',
      content: 'HIIT Cardio Blast - 45 mins',
      time: '2m ago',
      icon: Heart,
      iconColor: 'livt-text-error',
      unread: true
    },
    {
      id: 2,
      type: 'follow',
      user: 'Sarah Chen',
      avatar: 'S',
      action: 'started following you',
      content: null,
      time: '1h ago',
      icon: UserPlus,
      iconColor: 'livt-text-performance',
      unread: true
    },
    {
      id: 3,
      type: 'achievement',
      user: 'LIVT',
      avatar: 'L',
      action: 'Achievement unlocked!',
      content: '28 Day Streak Master',
      time: '3h ago',
      icon: Trophy,
      iconColor: 'livt-text-warning',
      unread: true
    },
    {
      id: 4,
      type: 'comment',
      user: 'Alex Rodriguez',
      avatar: 'A',
      action: 'commented on your workout',
      content: '"Great form on those burpees! 🔥"',
      time: '5h ago',
      icon: MessageSquare,
      iconColor: 'livt-text-ai',
      unread: false
    },
    {
      id: 5,
      type: 'community',
      user: 'VASA Lehi',
      avatar: 'V',
      action: 'You moved up 3 spots!',
      content: 'Now ranked #12 in your gym',
      time: '1d ago',
      icon: Target,
      iconColor: 'livt-text-performance',
      unread: false
    },
    {
      id: 6,
      type: 'like',
      user: 'Emma Williams',
      avatar: 'E',
      action: 'liked your progress update',
      content: 'Lost 2.1 lbs this week',
      time: '1d ago',
      icon: Heart,
      iconColor: 'livt-text-error',
      unread: false
    },
    {
      id: 7,
      type: 'milestone',
      user: 'LIVT',
      avatar: 'L',
      action: 'Milestone reached!',
      content: '100 total workouts completed',
      time: '2d ago',
      icon: Star,
      iconColor: 'livt-text-warning',
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="pb-20 px-4 space-y-6 livt-bg-gradient min-h-screen scroll-container">
      {/* Header */}
      <div className="pt-12 pb-4">
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            onClick={onBack}
            className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl livt-logo">Notifications</h1>
            <p className="livt-text-muted text-sm">
              {unreadCount > 0 ? `${unreadCount} new notifications` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button className="livt-button-secondary livt-hover-lift livt-scale-tap">
              Mark All Read
            </Button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          
          return (
            <div 
              key={notification.id} 
              className={`livt-card p-6 livt-hover-lift cursor-pointer relative ${
                notification.unread ? 'border-l-4 border-livt-cyan shadow-xl' : ''
              }`}
            >
              {notification.unread && (
                <div className="absolute top-3 right-3 w-3 h-3 bg-livt-cyan rounded-full"></div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  notification.type === 'like' ? 'bg-data-red/20' :
                  notification.type === 'follow' ? 'bg-livt-cyan/20' :
                  notification.type === 'achievement' || notification.type === 'milestone' ? 'bg-data-amber/20' :
                  notification.type === 'comment' ? 'bg-livt-purple/20' :
                  'bg-livt-cyan/20'
                }`}>
                  <Icon className={notification.iconColor} size={20} />
                </div>

                {/* User Avatar */}
                <div className="livt-avatar livt-avatar-md">
                  <span>{notification.avatar}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="livt-text-primary text-sm">
                        <span className="font-bold">{notification.user}</span>{' '}
                        <span className="font-normal">{notification.action}</span>
                      </h4>
                      {notification.content && (
                        <p className="livt-text-secondary text-sm mt-1">
                          {notification.content}
                        </p>
                      )}
                    </div>
                    <span className="text-xs livt-text-muted whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 mt-3">
                    {notification.type === 'follow' && (
                      <Button className="livt-button-primary px-4 py-2 text-sm livt-hover-lift livt-scale-tap">
                        Follow Back
                      </Button>
                    )}
                    {notification.type === 'comment' && (
                      <Button className="livt-button-secondary px-4 py-2 text-sm livt-hover-lift livt-scale-tap">
                        Reply
                      </Button>
                    )}
                    {(notification.type === 'like' || notification.type === 'community') && (
                      <Button className="livt-button-secondary px-4 py-2 text-sm livt-hover-lift livt-scale-tap">
                        View
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-8"></div>
    </div>
  );
}