import About from '@/components/About';
import Leaders from '@/components/Leaders';
import Gallery from '@/components/Gallery';
import Challenge from '@/components/Challenge';

export default function Home() {
  return (
    <main>
      <Challenge />
      <About />
      <Leaders />
      <Gallery />
    </main>
  );
}
