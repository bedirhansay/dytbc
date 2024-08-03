'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { BlogPost } from '../constant/blog-posts';
import BlogPostCard from './ui/post-card';

export const Posts = () => {
  const [activeTab, setActiveTab] = useState('view-all');

  const tabs = [
    { name: 'View all', id: 'view-all' },
    { name: 'Design', id: 'design' },
    { name: 'Product', id: 'product' },
    { name: 'Software Engineering', id: 'software-engineering' },
    { name: 'Customer Success', id: 'customer-success' },
  ];

  return (
    <div>
      <div className="flex items-center gap-4  justify-between py-12  border-gray-300">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? 'text-purple-600 border-purple-600' : 'text-gray-500'
              } pb-2 border-b-2 font-medium`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
        <div className="relative">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Most recent" />
            </SelectTrigger>
            <SelectContent className="absolute right-0 z-50">
              <SelectGroup>
                <SelectItem value="most-recent">Most recent</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid justify-between grid-cols-[repeat(auto-fill,minmax(315px,1fr))] gap-8">
          {BlogPost.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
