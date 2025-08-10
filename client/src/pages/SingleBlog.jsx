import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";

function SingleBlog() {
  const { blogId } = useParams();
  const [post, setPost] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs/id/${blogId}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching single blog:", error);
      }
    };

    fetchPost();
  }, [blogId]);

  if (!post) {
    return (
      <section className="bg-white dark:bg-slate-900 min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Loading blog...
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-slate-900 min-h-screen flex items-center px-4 py-10">
      <div className="mx-auto max-w-4xl w-full">
        {/* Blog Title */}
        <h1 className="text-4xl font-extrabold text-green-800 dark:text-green-300 mb-6 text-center leading-snug">
          {post.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <span className="flex items-center gap-2">
            <FaUser className="text-green-700 dark:text-green-300" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-green-700 dark:text-green-300" />
            {post.date}
          </span>
        </div>

        {/* Featured image */}
        <div className="overflow-hidden rounded-2xl shadow-lg mb-8">
          <img
            src={`${import.meta.env.VITE_API_URL_ASSETS}/uploads/${post.image}`}
            alt={post.title}
            className="w-full h-80 object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 rounded-full bg-green-100 px-4 py-1.5 text-xs font-medium text-green-800 dark:bg-slate-700 dark:text-green-300"
            >
              <FaTags /> {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="text-gray-800 dark:text-gray-200 leading-relaxed prose prose-green dark:prose-invert max-w-none text-center">
          {post.content || post.excerpt}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block rounded-full bg-green-700 px-6 py-2 text-sm font-medium text-white hover:bg-green-600 transition"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SingleBlog;
