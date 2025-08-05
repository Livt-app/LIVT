import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface MobileLoginProps {
  onBack: () => void;
}

export function MobileLogin({ onBack }: MobileLoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/30 text-white flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
      
      {/* Header */}
      <div className="pt-12 pb-8 px-6 relative z-10">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white/10 rounded-full transition-colors glassmorphism"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 relative z-10">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold livt-glow-purple pulse-glow mb-4">LIVT</h1>
          <h2 className="text-xl text-gray-300">Creator Login</h2>
        </div>

        {/* Login Form */}
        <div className="luxury-card p-6 space-y-4 mb-8">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent glassmorphism"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent glassmorphism"
          />
          
          <Button className="w-full bg-accent text-white hover:bg-accent/90 py-4 rounded-xl text-lg font-semibold shadow-glow-cyan hover-lift">
            Log In
          </Button>
          
          <div className="text-center py-2">
            <span className="text-gray-400 text-sm">Forgot Password?</span>
          </div>
          
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
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            <a href="#" className="hover:text-white transition-colors underline">
              Don't have an account? <span className="text-accent">Sign Up</span>
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pb-8 px-6 relative z-10">
        <p className="text-gray-600 text-sm">© 2025 LIVT. All rights reserved.</p>
      </div>
    </div>
  );
}