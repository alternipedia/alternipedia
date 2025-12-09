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
    <div className={`absolute inset-0 bg-white/60 dark:bg-black/20 backdrop-blur-sm z-50 flex justify-center transition-opacity duration-200 ${className}`}>
      <div className="flex flex-col items-center gap-3 mt-[10%]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <div className="text-sm text-gray-600 dark:text-neutral-300 font-medium">
          {message}
        </div>
      </div>
    </div>
  );
}