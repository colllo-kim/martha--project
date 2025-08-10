import React from 'react'
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";

function PostItem({ posts }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <div
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group overflow-hidden rounded-2xl bg-green-50 shadow-lg transition hover:shadow-xl dark:bg-slate-800 flex flex-col h-[480px]"
        >
          {/* Image */}
          <div className="overflow-hidden p-2">
            <img
              src={`${import.meta.env.VITE_API_URL_ASSETS}/uploads/${post.image}`}
              alt={post.title}
              className="h-52 w-full mt-3 object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="mb-2 text-xl font-bold text-blue-800 dark:text-blue-300 line-clamp-2">
              {post.title}
            </h3>

            <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <FaUser /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {post.date}
              </span>
            </div>

            <p className="mb-3 text-gray-700 dark:text-gray-300 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-slate-700 dark:text-green-300"
                >
                  <FaTags /> {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                to={`/single-blog/${post.id}`}
                className="inline-block rounded-full bg-green-700 px-5 py-2 text-sm font-medium text-white hover:bg-green-600"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostItem
