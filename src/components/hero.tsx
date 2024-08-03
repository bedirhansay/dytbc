const post = {
  image: image,
  category: 'Design',
  title: 'Improve your design skills: Develop an "eye" for design',
  description:
    'Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.',
  author: {
    name: 'Amélie Laurent',
    image: image,
  },
  published_date: '10 April 2024',
  tags: ['Design', 'Research', 'Presentation'],
};

import { Label } from '@radix-ui/react-label';
import Image from 'next/image';
import image from '../../public/meal.webp';

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col py-8 gap-2">
        <small className="text-primary">Blog yazılarımız</small>
        <Label className="text-2xl font-bold">{post.title}</Label>
      </div>
      <div className="relative  mx-auto overflow-hidden bg-white rounded-xl shadow-md !h-1/3">
        <Image className="absolute inset-0 h-full w-full object-cover" src={post.image} alt="Design Image" />
        <div className="relative px-8 pt-96 pb-8 bg-black bg-opacity-50">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.category}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
            {post.title}
          </a>
          <p className="mt-2 text-gray-300">{post.description}</p>
          <div className="mt-4 flex items-center">
            <Image className="h-10 w-10 rounded-full mr-4" src={post.author.image} alt="Author Image" />
            <div className="text-sm">
              <p className="text-white leading-none">{post.author.name}</p>
              <p className="text-gray-400">{post.published_date}</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-700 text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
