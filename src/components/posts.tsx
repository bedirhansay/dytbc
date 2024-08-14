'use client';

import { Filter } from 'lucide-react';
import { useState } from 'react';
import { BlogPost } from '../constant/blog-posts';
import BlogPostCard from './ui/post-card';

export const Posts = () => {
  const [activeTab, setActiveTab] = useState('view-all');

  const tabs = [
    { name: 'Tümü', id: 'view-all' },
    { name: 'Diyet', id: 'healthy-nutrition' },
    { name: 'Kilo Verme', id: 'weight-loss' },
    { name: 'Spor', id: 'sports-nutrition' },
  ];
  return (
    <div>
      <div className="flex items-center gap-4 flex-wrap justify-between pt-12 pb-4 border-b">
        <nav className="flex space-x-4 text-sm whitespace-nowrap flex-wrap ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? 'text-purple-600 border-purple-600' : 'text-gray-500'
              }   font-medium`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
        <div className="relative">
          <Filter />
          {/* <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Most recent" />
            </SelectTrigger>
            <SelectContent className="absolute right-0 z-50">
              <SelectGroup>
                <SelectItem value="most-recent">Most recent</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
        </div>
      </div>

      <div className="mx-auto py-12">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(315px,1fr))] justify-stretch w-full gap-8  ">
          {BlogPost.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
