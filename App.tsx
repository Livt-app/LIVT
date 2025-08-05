import { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { MobileApp } from './components/MobileApp';
import { DesktopWebsite } from './components/DesktopWebsite';
import { Button } from './components/ui/button';

export default function App() {
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* View Toggle */}
      <div className="fixed top-4 left-4 z-50 flex space-x-2">
        <Button
          size="sm"
          variant={viewMode === 'mobile' ? 'default' : 'outline'}
          onClick={() => setViewMode('mobile')}
          className="flex items-center space-x-2"
        >
          <Smartphone size={16} />
          <span>Mobile App</span>
        </Button>
        <Button
          size="sm"
          variant={viewMode === 'desktop' ? 'default' : 'outline'}
          onClick={() => setViewMode('desktop')}
          className="flex items-center space-x-2"
        >
          <Monitor size={16} />
          <span>Desktop Site</span>
        </Button>
      </div>

      {/* Content */}
      {viewMode === 'mobile' ? (
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-sm">
            <MobileApp />
          </div>
        </div>
      ) : (
        <DesktopWebsite />
      )}
    </div>
  );
}