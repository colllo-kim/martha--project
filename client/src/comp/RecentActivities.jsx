import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AppContext } from '@/context/AppContext';

function RecentActivities() {
  const { posts } = useContext(AppContext);

  // Get the most recent 10 posts
  const recentPosts = posts.slice(0, 10);

  return (
    <section className="bg-white dark:bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-800 dark:text-green-300">
          Recent Activities
        </h2>
        <Carousel
          customLeftArrow={
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-green-700 hover:text-green-900">
              <FaChevronLeft size={24} />
            </button>
          }
          customRightArrow={
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-green-700 hover:text-green-900">
              <FaChevronRight size={24} />
            </button>
          }
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
            tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
            mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
          }}
          arrows
          infinite
          autoPlay
          autoPlaySpeed={5000}
          itemClass="px-4"
          containerClass="relative"
        >
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={`${import.meta.env.VITE_API_URL_ASSETS}/uploads/${post.image}`}
                alt={post.title || `Recent activity ${index + 1}`}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                  {post.title || "Recent Activity"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {post.excerpt || "This activity demonstrates our continued commitment to sustainability and community engagement."}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default RecentActivities;
