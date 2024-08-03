// components/BlogPostCard.tsx
import { Truncate } from '@/lib/utils/truncate';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogPost {
  category: string;
  image: string | StaticImageData;
  authorImage: string | StaticImageData;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="max-w-sm grid grid-rows-2 bg-white border border-gray-200 rounded-lg shadow-md">
      <Link className="max-h-64 relative overflow-hidden" href="/">
        <Image
          objectFit="cover"
          objectPosition="bottom"
          className="rounded-t-lg "
          fill
          src={post.image}
          alt={post.title}
        />
      </Link>
      <div className="p-4 flex flex-col justify-between">
        <span className="text-xs font-medium text-purple-600 uppercase">{post.category}</span>
        <Link href="/">
          <h5 className="mt-2 mb-2 text-lg font-bold tracking-tight text-gray-900">{post.title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{Truncate(post.description, 40)}</p>
        <div className="mt-4 flex space-x-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary text-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <Image className="w-14 h-14 rounded-full" src={post.authorImage} alt={post.author} width={40} height={40} />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
