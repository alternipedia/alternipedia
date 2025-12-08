"use client";

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import wtf from '@/lib/wtf';
import { Spinner } from '@/app/(components)/ui/spinner';

export default function Random() {
  const params = useParams();
  const router = useRouter();
  const lang = params?.lang || 'en';

  useEffect(() => {
    let mounted = true;

    const fetchRandom = async () => {
      try {
        const randomDoc: any = await wtf.random({ lang });
        const title = typeof randomDoc?.title === 'function' ? randomDoc.title() : randomDoc?.title;
        const randomHref = title ? `/${lang}/wiki/${encodeURI(String(title))}/wikipedia` : `/${lang}`;
        if (mounted) router.push(randomHref);
      } catch (err) {
        console.error('Error fetching random article:', err);
        if (mounted) router.push(`/${lang}`);
      }
    };

    fetchRandom();

    return () => { mounted = false; };
  }, [lang, router]);

  return (
    <div className="flex h-[calc(100vh-20rem)] w-full items-center justify-center">
      <Spinner className="size-8 text-muted-foreground" />
    </div>
  );
}