import { 
  Plus, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Star, 
  Eye, 
  MessageSquare,
  ChevronRight,
  Sparkles,
  Crown,
  BarChart3,
  Calendar,
  Target,
  Zap,
  Edit3,
  Search,
  Settings,
  Award,
  Flame,
  Heart,
  Send,
  ArrowUp,
  CheckCircle,
  FileText,
  Camera,
  Layers,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CreatorTab() {
  const [activeView, setActiveView] = useState<'dashboard' | 'upload' | 'plans' | 'clients'>('dashboard');
  const [planFilter, setPlanFilter] = useState<'active' | 'draft' | 'archived'>('active');

  if (activeView === 'upload') {
    return <CreatorUploadFlow onBack={() => setActiveView('dashboard')} />;
  }

  if (activeView === 'plans') {
    return <PlanManagement onBack={() => setActiveView('dashboard')} filter={planFilter} setFilter={setPlanFilter} />;
  }

  if (activeView === 'clients') {
    return <ClientManagement onBack={() => setActiveView('dashboard')} />;
  }

  return (
    <div className="pb-20 px-4 space-y-6 livt-bg-gradient min-h-screen scroll-container">
      {/* Creator Profile Header */}
      <CreatorProfileHeader />

      {/* Monthly Earnings Display */}
      <EarningsDisplayCard />

      {/* KPI Grid */}
      <KPIGrid />

      {/* Quick Actions */}
      <QuickActionsGrid onNavigate={setActiveView} />

      {/* AI Create Card */}
      <AICreateCard onNavigate={() => setActiveView('upload')} />

      {/* Revenue Performance */}
      <RevenuePerformanceCard />

      {/* Top Plans */}
      <TopPlansSection onNavigate={() => setActiveView('plans')} />

      {/* Recent Activity */}
      <RecentActivitySection onNavigate={() => setActiveView('clients')} />

      {/* Achievement Badge */}
      <AchievementCard />

      {/* Floating Action Button */}
      <FloatingActionButton onClick={() => setActiveView('upload')} />
    </div>
  );
}

// Reusable Components for Creator Dashboard

function CreatorProfileHeader() {
  return (
    <div className="pt-12 pb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="livt-avatar livt-avatar-lg">
              <span>M</span>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-data-green rounded-full border-2 border-black flex items-center justify-center">
              <Crown className="text-white" size={12} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl livt-text-primary">Marcus "The Beast" Johnson</h1>
            <div className="flex items-center space-x-2 mt-1">
              <Badge className="livt-badge livt-badge-ai">
                <Crown className="mr-1" size={10} />
                Elite Coach
              </Badge>
              <Badge className="livt-badge livt-badge-success">
                Top 5%
              </Badge>
            </div>
          </div>
        </div>
        <Button className="livt-button-secondary livt-hover-lift livt-scale-tap">
          <Settings className="mr-1" size={14} />
          Settings
        </Button>
      </div>
    </div>
  );
}

function EarningsDisplayCard() {
  return (
    <div className="livt-card p-6 relative overflow-hidden livt-fade-in">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-data-green via-livt-cyan to-livt-purple"></div>
      <div className="text-center">
        <div className="text-5xl font-black livt-text-primary mb-2">$3,847</div>
        <div className="livt-text-secondary mb-3">Monthly Earnings</div>
        <div className="flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center livt-text-success">
            <TrendingUp className="mr-1" size={14} />
            +23% vs last month
          </div>
          <div className="livt-text-muted">•</div>
          <div className="livt-text-ai">
            <Flame className="inline mr-1" size={14} />
            6 month streak
          </div>
        </div>
      </div>
    </div>
  );
}

function KPIGrid() {
  const kpis = [
    { value: "847", label: "Total Students", change: "+12 this week", type: "performance" },
    { value: "4.9", label: "Avg Rating", change: "847 reviews", type: "default", icon: Star },
    { value: "92%", label: "Completion Rate", change: "Industry: 67%", type: "success" }
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {kpis.map((kpi, index) => (
        <div key={index} className={`p-4 text-center cursor-pointer livt-fade-in ${
          kpi.type === 'performance' ? 'livt-card-performance livt-hover-lift livt-scale-tap' : 'livt-card livt-hover-lift livt-scale-tap'
        }`} style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex items-center justify-center mb-1">
            {kpi.icon && <kpi.icon className="text-data-amber mr-1 fill-current" size={16} />}
            <span className="text-2xl font-bold livt-text-primary">{kpi.value}</span>
          </div>
          <div className="text-xs livt-text-muted">{kpi.label}</div>
          <div className={`text-xs mt-1 ${
            kpi.type === 'success' ? 'livt-text-success' : 
            kpi.type === 'performance' ? 'livt-text-performance' : 
            'livt-text-warning'
          }`}>
            {kpi.change}
          </div>
        </div>
      ))}
    </div>
  );
}

function QuickActionsGrid({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button 
        onClick={() => onNavigate('plans')}
        className="livt-card p-4 flex flex-col items-center space-y-2 livt-hover-lift livt-scale-tap cursor-pointer h-auto text-white"
      >
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Layers className="text-white" size={20} />
        </div>
        <span className="font-medium">Manage Plans</span>
        <span className="text-xs livt-text-muted">5 active plans</span>
      </button>

      <button 
        onClick={() => onNavigate('clients')}
        className="livt-card p-4 flex flex-col items-center space-y-2 livt-hover-lift livt-scale-tap cursor-pointer h-auto text-white"
      >
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Users className="text-white" size={20} />
        </div>
        <span className="font-medium">View Clients</span>
        <span className="text-xs livt-text-muted">847 students</span>
      </button>
    </div>
  );
}

function AICreateCard({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="livt-card-ai p-5 relative overflow-hidden livt-hover-lift livt-scale-tap cursor-pointer" onClick={onNavigate}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-livt-purple to-livt-purple"></div>
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gradient-to-br from-livt-purple to-livt-purple rounded-xl flex items-center justify-center">
          <Sparkles className="text-white" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold livt-text-primary mb-1">Create with AI Coach</h3>
          <p className="text-sm livt-text-secondary font-light">Generate personalized workouts in seconds</p>
          <div className="flex items-center mt-2 text-xs livt-text-ai">
            <Zap className="mr-1" size={12} />
            Avg. creator earns $975+ on first AI plan
          </div>
        </div>
        <ChevronRight className="livt-text-ai" size={20} />
      </div>
    </div>
  );
}

function RevenuePerformanceCard() {
  const weeklyData = [
    { week: 'Week 1', amount: '$892', progress: 65 },
    { week: 'Week 2', amount: '$1,124', progress: 82 },
    { week: 'Week 3', amount: '$1,831', progress: 100 },
    { week: 'Week 4', amount: '$1,247', progress: 68 }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold livt-text-primary">Revenue Performance</h3>
        <Button className="livt-button-secondary livt-hover-lift livt-scale-tap">
          <BarChart3 className="mr-1" size={14} />
          Analytics
        </Button>
      </div>
      
      <div className="livt-card-performance p-5">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-3xl font-bold livt-text-success mb-1">$3,847</div>
            <div className="text-sm livt-text-muted mb-2">This Month</div>
            <div className="flex items-center livt-text-success text-sm">
              <ArrowUp className="mr-1" size={14} />
              +23% from last month
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold livt-text-primary mb-1">$47,290</div>
            <div className="text-sm livt-text-muted mb-2">Total Lifetime</div>
            <div className="text-xs livt-text-muted">Since joining LIVT</div>
          </div>
        </div>
        
        <div className="space-y-3">
          {weeklyData.map((week, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="livt-text-muted">{week.week}</span>
                <span className="livt-text-primary font-medium">{week.amount}</span>
              </div>
              <div className="livt-progress h-2">
                <div 
                  className="livt-progress-bar"
                  style={{ width: `${week.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-data-green/10 border border-data-green/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Target className="livt-text-success" size={16} />
            <span className="text-sm livt-text-success font-medium">On track for $4,200+ this month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopPlansSection({ onNavigate }: { onNavigate: () => void }) {
  const plans = [
    {
      name: "HIIT Beast Mode",
      description: "High-intensity fat burning program",
      students: 247,
      price: "$39/mo",
      weeklyRevenue: "$892",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=64&h=64&fit=crop",
      badge: "Best Seller",
      badgeType: "warning"
    },
    {
      name: "Strength Foundation",
      description: "12-week progressive strength program", 
      students: 189,
      price: "$49",
      weeklyRevenue: "$634",
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=64&h=64&fit=crop",
      badge: "Trending",
      badgeType: "performance"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold livt-text-primary">Top Performing Plans</h3>
        <Button 
          className="livt-button-secondary livt-hover-lift livt-scale-tap"
          onClick={onNavigate}
        >
          View All
        </Button>
      </div>
      
      <div className="space-y-3">
        {plans.map((plan, index) => (
          <div key={index} className="livt-card p-4 livt-hover-lift livt-scale-tap cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold livt-text-primary">{plan.name}</h4>
                  <Badge className={`livt-badge ${
                    plan.badgeType === 'warning' ? 'livt-badge-warning' : 'livt-badge-performance'
                  }`}>
                    {plan.badge === "Best Seller" && <Crown className="mr-1" size={10} />}
                    {plan.badge}
                  </Badge>
                </div>
                <p className="text-sm livt-text-muted mb-2 font-light">{plan.description}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="text-center">
                    <div className="livt-text-primary font-medium">{plan.students}</div>
                    <div className="livt-text-muted">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="livt-text-success font-medium">{plan.price}</div>
                    <div className="livt-text-muted">Price</div>
                  </div>
                  <div className="text-center">
                    <div className="livt-text-performance font-medium">{plan.weeklyRevenue}</div>
                    <div className="livt-text-muted">This Week</div>
                  </div>
                </div>
              </div>
              <ChevronRight className="livt-text-muted" size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentActivitySection({ onNavigate }: { onNavigate: () => void }) {
  const activities = [
    { name: "Alex Rodriguez", action: "completed HIIT Beast Mode workout", time: "2 hours ago", avatar: "A" },
    { name: "Sarah Chen", action: "started Strength Foundation program", time: "5 hours ago", avatar: "S" },
    { name: "Mike Johnson", action: "left a 5-star review", time: "1 day ago", avatar: "M" }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold livt-text-primary">Recent Activity</h3>
        <Button 
          className="livt-button-secondary livt-hover-lift livt-scale-tap"
          onClick={onNavigate}
        >
          View All
        </Button>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="livt-card p-4 livt-hover-lift livt-scale-tap cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="livt-avatar livt-avatar-md">
                <span>{activity.avatar}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm livt-text-primary">
                  <span className="font-medium">{activity.name}</span> {activity.action}
                </p>
                <p className="text-xs livt-text-muted">{activity.time}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap">
                  <Heart className="livt-text-success" size={14} />
                </Button>
                <Button className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap">
                  <MessageSquare size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AchievementCard() {
  return (
    <div className="livt-card-ai p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-livt-purple/10 via-transparent to-livt-purple/5"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-livt-purple to-livt-purple rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold livt-text-primary mb-2">Elite Creator Status</h3>
        <p className="livt-text-secondary font-light mb-4">You're in the top 5% of LIVT creators this month</p>
        <Badge className="livt-badge-ai px-4 py-2">
          <Crown className="mr-1" size={12} />
          Early Access Coach
        </Badge>
      </div>
    </div>
  );
}

function FloatingActionButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="livt-fab livt-button-primary"
    >
      <Plus size={24} />
    </button>
  );
}

// Plan Management Component
function PlanManagement({ onBack, filter, setFilter }: { 
  onBack: () => void; 
  filter: 'active' | 'draft' | 'archived';
  setFilter: (filter: 'active' | 'draft' | 'archived') => void;
}) {
  const plans = {
    active: [
      { name: "HIIT Beast Mode", students: 247, revenue: "$892", status: "active", rating: 4.9 },
      { name: "Strength Foundation", students: 189, revenue: "$634", status: "active", rating: 4.8 },
      { name: "Athletic Conditioning", students: 156, revenue: "$421", status: "active", rating: 4.7 }
    ],
    draft: [
      { name: "Powerlifting Mastery", students: 0, revenue: "$0", status: "draft", rating: 0 },
      { name: "Mobility & Recovery", students: 0, revenue: "$0", status: "draft", rating: 0 }
    ],
    archived: [
      { name: "Beginner Basics", students: 89, revenue: "$234", status: "archived", rating: 4.6 }
    ]
  };

  return (
    <div className="pb-20 px-4 space-y-6 livt-bg-gradient min-h-screen scroll-container">
      <div className="pt-12 pb-4">
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            onClick={onBack}
            className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap"
          >
            <ChevronRight className="rotate-180" size={20} />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold livt-text-primary">Plan Management</h1>
            <p className="livt-text-muted font-light">Manage your training programs</p>
          </div>
        </div>

        <div className="flex space-x-2">
          {(['active', 'draft', 'archived'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg transition-all capitalize livt-scale-tap ${
                filter === tab
                  ? 'livt-button-primary'
                  : 'livt-button-secondary'
              }`}
            >
              {tab} ({plans[tab].length})
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {plans[filter].map((plan, index) => (
          <div key={index} className="livt-card p-4 livt-hover-lift livt-scale-tap cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold livt-text-primary">{plan.name}</h3>
              <div className="flex items-center space-x-2">
                <Button className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap">
                  <Eye size={14} />
                </Button>
                <Button className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap">
                  <Edit3 size={14} />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold livt-text-primary">{plan.students}</div>
                <div className="text-xs livt-text-muted">Students</div>
              </div>
              <div>
                <div className="text-lg font-bold livt-text-success">{plan.revenue}</div>
                <div className="text-xs livt-text-muted">Weekly Revenue</div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <Star className="text-data-amber mr-1 fill-current" size={14} />
                  <span className="text-lg font-bold livt-text-primary">{plan.rating || '-'}</span>
                </div>
                <div className="text-xs livt-text-muted">Rating</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Client Management Component  
function ClientManagement({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const clients = [
    { name: "Alex Rodriguez", avatar: "A", lastSeen: "2 hours ago", progress: 85, tier: "Elite", revenue: "$47", planName: "HIIT Beast Mode" },
    { name: "Sarah Chen", avatar: "S", lastSeen: "5 hours ago", progress: 92, tier: "Pro", revenue: "$39", planName: "Strength Foundation" },
    { name: "Mike Johnson", avatar: "M", lastSeen: "1 day ago", progress: 67, tier: "Basic", revenue: "$29", planName: "Athletic Conditioning" },
    { name: "Emma Williams", avatar: "E", lastSeen: "3 hours ago", progress: 78, tier: "Pro", revenue: "$39", planName: "HIIT Beast Mode" }
  ];

  return (
    <div className="pb-20 px-4 space-y-6 livt-bg-gradient min-h-screen scroll-container">
      <div className="pt-12 pb-4">
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            onClick={onBack}
            className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap"
          >
            <ChevronRight className="rotate-180" size={20} />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold livt-text-primary">Client Management</h1>
            <p className="livt-text-muted font-light">847 active students</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 livt-text-muted" size={16} />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="livt-input w-full pl-10 pr-4 py-3"
          />
        </div>
      </div>

      <div className="space-y-3">
        {clients.map((client, index) => (
          <div key={index} className="livt-card p-4 livt-hover-lift livt-scale-tap cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="livt-avatar livt-avatar-md">
                <span>{client.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold livt-text-primary">{client.name}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge className={`livt-badge ${
                      client.tier === 'Elite' 
                        ? 'livt-badge-warning'
                        : client.tier === 'Pro'
                        ? 'livt-badge-ai'
                        : 'livt-badge-default'
                    }`}>
                      {client.tier}
                    </Badge>
                    <span className="text-xs livt-text-success font-medium">{client.revenue}/mo</span>
                  </div>
                </div>
                <p className="text-sm livt-text-muted mb-2 font-light">{client.planName} • {client.lastSeen}</p>
                <div className="flex items-center space-x-2">
                  <div className="livt-progress flex-1 h-1">
                    <div 
                      className="livt-progress-bar"
                      style={{ width: `${client.progress}%` }}
                    />
                  </div>
                  <span className="text-xs livt-text-muted">{client.progress}%</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Button className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap">
                  <Send size={14} />
                </Button>
                <Button className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap">
                  <Eye size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Creator Upload Flow Component
function CreatorUploadFlow({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    description: '',
    days: 4,
    duration: '6 weeks',
    pricing: 'subscription',
    price: '39',
    tags: [] as string[]
  });

  const steps = [
    { title: "Program Basics", desc: "Name, goal & description", icon: FileText },
    { title: "Training Schedule", desc: "Duration & frequency", icon: Calendar },
    { title: "Content Tags", desc: "Focus areas & difficulty", icon: Target },
    { title: "Media Upload", desc: "Cover image & preview", icon: Camera },
    { title: "Pricing Strategy", desc: "Set your rates", icon: DollarSign },
    { title: "Publish & Earn", desc: "Launch your program", icon: Zap }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium livt-text-primary mb-2">Program Name *</label>
              <input
                type="text"
                placeholder="e.g., HIIT Beast Mode"
                className="livt-input w-full p-4"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium livt-text-primary mb-2">Primary Goal *</label>
              <div className="grid grid-cols-2 gap-3">
                {['Fat Loss', 'Muscle Building', 'Strength', 'Endurance', 'General Fitness', 'Athletic Performance'].map((goal) => (
                  <button
                    key={goal}
                    className={`p-3 rounded-xl border transition-all text-sm livt-scale-tap ${
                      formData.goal === goal
                        ? 'livt-button-primary'
                        : 'livt-button-secondary'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, goal }))}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium livt-text-primary mb-2">Description</label>
              <textarea
                rows={4}
                placeholder="Describe your program, what makes it special, who it's for..."
                className="livt-input w-full p-4 resize-none"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
          </div>
        );
      case 6:
        const estimatedStudents = Math.floor(Math.random() * 25) + 25;
        const estimatedRevenue = estimatedStudents * parseInt(formData.price || '39');
        
        return (
          <div className="space-y-6">
            <div className="livt-card-ai p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-livt-purple to-livt-purple rounded-full flex items-center justify-center mx-auto mb-4 livt-pulse">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold livt-text-primary mb-2">Ready to Launch!</h3>
              <p className="livt-text-secondary font-light mb-4">{formData.name} is ready to help students achieve their {formData.goal?.toLowerCase()} goals.</p>
              
              <div className="livt-card p-4 mb-6 text-left">
                <h4 className="font-semibold livt-text-primary mb-3 flex items-center">
                  <TrendingUp className="mr-2 livt-text-success" size={16} />
                  Earning Potential
                </h4>
                <div className="space-y-2 text-sm livt-text-secondary">
                  <div className="flex justify-between">
                    <span>Expected signups (Month 1):</span>
                    <span className="livt-text-performance font-medium">{estimatedStudents}-{estimatedStudents + 25}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly revenue potential:</span>
                    <span className="livt-text-success font-medium">${estimatedRevenue.toLocaleString()}-${(estimatedRevenue + 1000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Program details:</span>
                    <span>{formData.days} days/week • {formData.duration}</span>
                  </div>
                </div>
              </div>
              
              <Button className="livt-button-primary w-full font-bold py-4 text-lg livt-hover-lift livt-scale-tap">
                <Zap className="mr-2" size={16} />
                Publish & Start Earning
              </Button>
            </div>
          </div>
        );
      default:
        return (
          <div className="livt-card p-8 text-center">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-xl font-bold livt-text-primary mb-2">Step {currentStep} Coming Soon</h3>
            <p className="livt-text-muted font-light mb-4">This step is being built. Skip to see the final step.</p>
            <Button 
              onClick={() => setCurrentStep(6)}
              className="livt-button-primary mt-4"
            >
              Skip to Final Step
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="pb-20 px-4 space-y-6 livt-bg-gradient min-h-screen scroll-container">
      <div className="pt-12 pb-4">
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            onClick={onBack}
            className="livt-button-secondary p-2 livt-hover-lift livt-scale-tap"
          >
            <ChevronRight className="rotate-180" size={20} />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold livt-text-primary">Create Program</h1>
            <p className="livt-text-muted font-light">Step {currentStep} of {steps.length}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-sm livt-text-muted mb-2">
            <span>{steps[currentStep - 1]?.title}</span>
            <span>{Math.round((currentStep / steps.length) * 100)}%</span>
          </div>
          <div className="livt-progress h-2">
            <div 
              className="livt-progress-bar"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between mb-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isCompleted = index < currentStep - 1;
            const isCurrent = index === currentStep - 1;
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isCompleted 
                    ? 'bg-data-green text-white'
                    : isCurrent
                    ? 'livt-button-primary'
                    : 'bg-white/10 livt-text-muted'
                }`}>
                  {isCompleted ? <CheckCircle size={16} /> : <StepIcon size={16} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <div className="livt-card p-6">
          <h3 className="text-lg font-bold livt-text-primary mb-2">{steps[currentStep - 1]?.title}</h3>
          <p className="livt-text-muted font-light mb-6">{steps[currentStep - 1]?.desc}</p>
          {renderStep()}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {currentStep > 1 && (
          <Button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="livt-button-secondary flex-1 livt-hover-lift livt-scale-tap"
          >
            Previous
          </Button>
        )}
        <Button
          onClick={() => currentStep < steps.length ? setCurrentStep(currentStep + 1) : onBack()}
          className="livt-button-primary flex-1 font-semibold livt-hover-lift livt-scale-tap"
        >
          {currentStep === steps.length ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
}