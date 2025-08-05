import { useState } from 'react';
import { Menu, X, Play, ArrowRight, Star, Zap, Users, Target, Share2, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TermsAndConditions } from './TermsAndConditions';
import { PrivacyPolicy } from './PrivacyPolicy';

export function DesktopWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'terms' | 'privacy'>('home');

  if (currentPage === 'login') {
    return <LoginPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsAndConditions onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl livt-logo">LIVT</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-white hover:text-luxury-secondary transition-colors font-medium">Home</a>
                <a href="#preview" className="text-luxury-secondary hover:text-white transition-colors font-medium">Train</a>
                <a href="#creators" className="text-luxury-secondary hover:text-white transition-colors font-medium">Creators</a>
                <a href="#how-it-works" className="text-luxury-secondary hover:text-white transition-colors font-medium">Community</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 glassmorphism"
                onClick={() => setCurrentPage('login')}
              >
                Log In
              </Button>
              <Button className="glow-button shadow-glow-white">
                Start for Free
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glassmorphism border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-white">Home</a>
              <a href="#preview" className="block px-3 py-2 text-base font-medium text-luxury-secondary">Train</a>
              <a href="#creators" className="block px-3 py-2 text-base font-medium text-luxury-secondary">Creators</a>
              <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-luxury-secondary">Community</a>
              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="outline" className="border-white/20 text-white glassmorphism" onClick={() => setCurrentPage('login')}>Log In</Button>
                <Button className="glow-button shadow-glow-white">Start for Free</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background - Male Athlete in Premium Gym */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1920&h=1080&fit=crop"
              alt="Elite athlete training in premium gym environment"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 video-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight livt-logo">
            LIVT
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 value-prop-text">
            Where creators coach. Where athletes grow.
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-luxury-primary">
            Train. Track. Earn.
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-luxury-secondary max-w-3xl mx-auto leading-relaxed font-light">
            The premium fitness platform where athletes, creators, and performance-minded individuals unlock their elite potential.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="glow-button px-8 py-4 text-lg font-semibold shadow-glow-white hover-lift">
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold glassmorphism hover-lift">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center glassmorphism">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Personal Fitness Journey Section */}
      <section className="py-20 bg-luxury-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-luxury-primary">
              Start Your Personal
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 text-luxury-primary">
              Fitness Journey Here.
            </h3>
            <p className="text-xl text-luxury-secondary max-w-2xl mx-auto mb-4 font-light">
              Whatever your goals are, start today.
            </p>
          </div>

          {/* Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Goals Card */}
            <div className="luxury-card p-8 hover-lift cursor-pointer group">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-6 overflow-hidden relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop"
                  alt="Set your fitness goals with elite training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white mb-2">Goals</h4>
                </div>
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 glassmorphism">
                Get a plan
              </Button>
            </div>

            {/* Share Journey Card */}
            <div className="luxury-card p-8 hover-lift cursor-pointer group">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-6 overflow-hidden relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                  alt="Share your fitness journey with community"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white mb-2">Share your</h4>
                  <h4 className="text-2xl font-bold text-white">Journey</h4>
                </div>
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 glassmorphism">
                Build your profile
              </Button>
            </div>

            {/* Community Card */}
            <div className="luxury-card p-8 hover-lift cursor-pointer group">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-6 overflow-hidden relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop"
                  alt="Join elite fitness community"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white mb-2">Join a</h4>
                  <h4 className="text-2xl font-bold text-white">community</h4>
                </div>
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 glassmorphism">
                Join your team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section id="preview" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury-primary livt-glow-subtle">Experience Preview</h2>
            <p className="text-xl text-luxury-muted max-w-3xl mx-auto font-light">
              Get a glimpse of the LIVT experience across all your devices
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Track Everything", 
                  desc: "Comprehensive health metrics with AI insights", 
                  glow: "shadow-glow-data",
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=533&fit=crop"
                },
                { 
                  title: "Train Smart", 
                  desc: "AI-powered workout recommendations", 
                  glow: "shadow-glow-ai",
                  image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=300&h=533&fit=crop"
                },
                { 
                  title: "Earn & Connect", 
                  desc: "Monetize your expertise and build community", 
                  glow: "shadow-glow-data",
                  image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&h=533&fit=crop"
                }
              ].map((feature, index) => (
                <Card key={index} className="luxury-card p-6 hover-lift cursor-pointer group">
                  <div className="aspect-[9/16] bg-gradient-to-br from-white/5 to-white/2 rounded-xl mb-4 overflow-hidden border border-white/10">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 text-luxury-primary ${feature.glow}`}>{feature.title}</h3>
                  <p className="text-luxury-muted font-light">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built for Athletes and Creators */}
      <section id="creators" className="py-20 bg-luxury-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury-primary">
              Built for Athletes <span className="text-luxury-primary livt-glow-subtle">&</span> Creators
            </h2>
            <p className="text-xl text-luxury-muted max-w-3xl mx-auto font-light">
              Whether you're pushing personal limits or building a fitness empire, LIVT gives you the tools to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="luxury-card p-8 hover-lift group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center mr-4 shadow-glow-white">
                  <Zap className="text-black" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-luxury-primary">For Athletes</h3>
              </div>
              <ul className="space-y-3 text-luxury-secondary font-light">
                <li className="flex items-center">
                  <Star className="text-luxury-primary mr-3 flex-shrink-0" size={16} />
                  Advanced performance tracking with WHOOP-style metrics
                </li>
                <li className="flex items-center">
                  <Star className="text-luxury-primary mr-3 flex-shrink-0" size={16} />
                  AI-powered insights and personalized recommendations
                </li>
                <li className="flex items-center">
                  <Star className="text-luxury-primary mr-3 flex-shrink-0" size={16} />
                  Compete with elite athletes globally
                </li>
                <li className="flex items-center">
                  <Star className="text-luxury-primary mr-3 flex-shrink-0" size={16} />
                  Comprehensive health and recovery metrics
                </li>
              </ul>
            </div>

            <div className="luxury-card p-8 hover-lift group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-ai-purple to-ai-purple-dark rounded-full flex items-center justify-center mr-4 shadow-glow-ai">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-luxury-primary">For Creators</h3>
              </div>
              <ul className="space-y-3 text-luxury-secondary font-light">
                <li className="flex items-center">
                  <Star className="text-ai-accent mr-3 flex-shrink-0" size={16} />
                  Monetize your fitness expertise and build income streams
                </li>
                <li className="flex items-center">
                  <Star className="text-ai-accent mr-3 flex-shrink-0" size={16} />
                  Create and sell custom workout and meal plans
                </li>
                <li className="flex items-center">
                  <Star className="text-ai-accent mr-3 flex-shrink-0" size={16} />
                  Build subscription programs and premium content
                </li>
                <li className="flex items-center">
                  <Star className="text-ai-accent mr-3 flex-shrink-0" size={16} />
                  Connect with a premium, engaged community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury-primary livt-glow-subtle">How It Works</h2>
            <p className="text-xl text-luxury-muted max-w-3xl mx-auto font-light">
              Three simple steps to unlock your elite potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Set Goals",
                description: "Define your fitness objectives and let our AI create a personalized training plan tailored to your needs",
                icon: Target,
                color: "text-luxury-primary"
              },
              {
                step: "02",
                title: "Track & Train",
                description: "Monitor your progress with advanced metrics, train with precision, and get real-time feedback",
                icon: Zap,
                color: "text-ai-accent"
              },
              {
                step: "03",
                title: "Earn & Connect",
                description: "Share your journey, build your community, monetize your expertise, and inspire others",
                icon: Share2,
                color: "text-data-positive"
              }
            ].map((step, index) => (
              <div key={index} className="luxury-card p-8 text-center hover-lift group">
                <div className="text-6xl font-black text-white/10 mb-4">{step.step}</div>
                <div className={`w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-white transition-all duration-300`}>
                  <step.icon className={step.color} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-luxury-primary">{step.title}</h3>
                <p className="text-luxury-muted font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join LIVT Today */}
      <section className="py-20 bg-luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury-primary livt-glow-subtle">
            Join LIVT Today
          </h2>
          <p className="text-xl text-luxury-secondary mb-12 max-w-2xl mx-auto font-light">
            Be among the first to experience the future of fitness. Join our exclusive waitlist and get early access.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto glassmorphism rounded-full p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-lg bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none"
            />
            <Button className="glow-button px-8 py-4 text-lg font-semibold rounded-full shadow-glow-white hover-lift">
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Join Community */}
            <div>
              <h3 className="font-semibold mb-4 text-luxury-primary">JOIN OUR COMMUNITY</h3>
              <p className="text-sm text-luxury-muted mb-4 font-light">
                Get updates, drops, and early access to LIVT features
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20 glassmorphism"
                />
                <Button className="w-full glow-button rounded-lg shadow-glow-white">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-semibold mb-4 text-luxury-primary">EXPLORE</h3>
              <ul className="space-y-2">
                <li><a href="#creators" className="text-luxury-muted hover:text-white transition-colors font-light">Creators</a></li>
                <li><a href="#preview" className="text-luxury-muted hover:text-white transition-colors font-light">Mobile App</a></li>
                <li><a href="#how-it-works" className="text-luxury-muted hover:text-white transition-colors font-light">How It Works</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-luxury-primary">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-luxury-muted hover:text-white transition-colors font-light">Contact</a></li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('terms')}
                    className="text-luxury-muted hover:text-white transition-colors font-light text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('privacy')}
                    className="text-luxury-muted hover:text-white transition-colors font-light text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold livt-logo">LIVT</h3>
              <p className="text-luxury-muted font-light">Where creators coach. Where athletes grow.</p>
            </div>
            <p className="text-luxury-muted text-sm">© 2025 LIVT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Enhanced Login Page Component
function LoginPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-luxury-gradient flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold livt-logo mb-4">LIVT</h1>
          <h2 className="text-xl text-luxury-secondary font-light">Creator Login</h2>
        </div>

        {/* Login Form */}
        <div className="luxury-card p-8 space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/20 glassmorphism"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/20 glassmorphism"
          />
          
          <Button className="w-full glow-button py-4 rounded-xl text-lg font-semibold shadow-glow-white hover-lift">
            Login
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-white/20 text-white hover:bg-white/10 py-4 rounded-xl text-lg font-semibold glassmorphism hover-lift"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </Button>
        </div>

        {/* Links */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-luxury-muted font-light">
            <a href="#" className="hover:text-white transition-colors underline">
              Need an account? Sign up
            </a>
          </p>
          <p className="text-luxury-muted font-light">
            <button 
              onClick={onBack}
              className="hover:text-white transition-colors underline"
            >
              ← Back to Home
            </button>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12">
          <p className="text-luxury-muted text-sm">© 2025 LIVT. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}