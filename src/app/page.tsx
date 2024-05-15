'use client';

import About from '@/components/About';
import Leaders from '@/components/Leaders';
import Gallery from '@/components/Gallery';
import Challenge from '@/components/Challenge';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (window as any).erxesSettings = {
      messenger: {
        brand_id: 'DxxGp3',
      },
    };

    (() => {
      const script = document.createElement('script');
      script.src =
        'https://erxes.nomadcyclingclub.com/widgets/build/messengerWidget.bundle.js';
      script.async = true;

      const entry: any = document.getElementsByTagName('script')[0];

      entry.parentNode.insertBefore(script, entry);
    })();
  }, []);

  return (
    <main>
      <Challenge />
      <About />
      <Leaders />
      <Gallery />
    </main>
  );
}
