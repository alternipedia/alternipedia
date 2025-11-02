import SlidingNotFoundText from '@/app/(client-renders)/sliding-not-found-text';

import '@/app/globals.css';
import { Button } from './(components)/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default async function NotFound() {
  return (
    <div className="relative  text-center mt-16 flex flex-col justify-center items-center min-h-[60vh] px-4">
      <h1 className="text-6xl font-bold  mb-4">404</h1>
      <SlidingNotFoundText />
      
      <Link href="/" passHref className="cursor-pointer">
        <Button variant="outline" className="mt-4 cursor-pointer">
          <Home />
        </Button>
      </Link>
    </div>
  );
}