import { Hero } from '@/components/hero';
import { Posts } from '@/components/posts';

export const HomePage = () => {
  return (
    <div className="max-w-7xl">
      <Hero />
      <Posts />
    </div>
  );
};
