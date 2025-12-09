'use client';

import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  className?: string;
}

export function LoadingOverlay({
  isVisible,
  message = 'Loading...',
  className = ''
}: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className='absolute inset-0 z-60'>
      <div
        className={`absolute inset-0 bg-white/60 dark:bg-black/20 backdrop-blur-sm flex justify-center transition-opacity duration-200 ${className}`}
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 1%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 1%, black 95%, transparent 100%)',
        }}
      >
        <div className="flex flex-col items-center gap-3 mt-[10%]">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          <div className="text-sm text-gray-600 dark:text-neutral-300 font-medium">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}