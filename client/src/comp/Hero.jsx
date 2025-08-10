import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';

const Hero = () => {
  const { posts } = useContext(AppContext);

  // Show the most recent 10 posts
  const recentPosts = posts;

  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-8 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left content */}
        <div>
          <h1 className="mb-6 text-3xl md:text-5xl font-extrabold text-green-900 dark:text-green-300 leading-tight">
            Greener Together.<br className="hidden sm:block" />
            Resilient Forever.
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-700 dark:text-gray-300">
            Kamendi Environment CBO empowers communities across the Cherangany ecosystem through water conservation, tree growing, and soil protection programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="rounded-full bg-green-700 px-6 py-3 text-white shadow hover:bg-green-600 transition"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-green-700 px-6 py-3 text-green-700 hover:bg-green-100 dark:hover:bg-slate-700 dark:text-green-300 dark:border-green-300 transition"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            arrows
            autoPlay
            autoPlaySpeed={4000}
            infinite
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
              tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
              mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
            }}
            itemClass="px-2"
          >
            {recentPosts.map((post, index) => (
              <img
                key={index}
                src={
                  post.image?.startsWith('http')
                    ? post.image
                    : `${import.meta.env.VITE_API_URL_ASSETS}/uploads/${post.image || 'default.jpg'}`
                }
                alt={post.title || `Post ${index + 1}`}
                className="w-full h-64 sm:h-80 md:h-96 rounded-3xl object-cover shadow-lg"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </header>
  );
};

export default Hero;
