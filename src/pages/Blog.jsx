import React, { useContext, useEffect, useState } from "react";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from '@/assets/logo.png'
import { AppContext } from "@/context/AppContext";
import school from '@/assets/school.png'
import water from '@/assets/water.png'
import communtytree from '@/assets/com-tree.png'
function Blog() {

  const {currentUser} = useContext(AppContext);
  const navigate = useNavigate();
   const token = currentUser?.token;
  const [posts, setPosts] = useState([]);
  const dummyPosts = [
    {
      id: 1,
      title: "How Tree Planting is Reviving the Cherangany Ecosystem",
      author: "Martha",
      date: "July 5, 2025",
      tags: ["Environment", "Forestry"],
      image: communtytree,
      excerpt:
        "Explore how our tree planting initiatives have improved biodiversity, reduced erosion, and brought hope to communities.",
    },
    {
      id: 2,
      title: "Protecting Springs: Lifelines for Kamendi",
      author: "Martha",
      date: "June 22, 2025",
      tags: ["Water", "Conservation"],
      image: water,
      excerpt:
        "A closer look into the science and community collaboration behind spring protection and water access in our region.",
    },
    {
      id: 3,
      title: "What Schools Can Do to Fight Climate Change",
      author: "Environmental Club",
      date: "June 10, 2025",
      tags: ["Education", "Climate Action"],
      image: school,
      excerpt:
        "From tree nurseries to waste management clubs, schools are stepping up for a greener tomorrow.",
    },
    
  ];

  useEffect(() => {
    if(!token){
      navigate('/login')
     }

    setTimeout(() => {
      setPosts(dummyPosts);
    }, 500); // simulate async fetch
  }, [currentUser]);
  return (
    <section className="bg-white dark:bg-slate-900 px-4 py-10">
      <div className="mx-auto max-w-7xl gap-2" >
        <h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center text-4xl font-extrabold text-green-800 dark:text-green-300"
        >
          🌿 Green Insights Blog
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">Loading articles...</p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-2xl bg-green-50 shadow-lg transition hover:shadow-xl dark:bg-slate-800"
              >
                <div className="overflow-hidden p-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 w-full mt-3 object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-blue-800 dark:text-blue-300">
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

                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    {post.excerpt}
                  </p>

                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-slate-700 dark:text-green-300"
                      >
                        <FaTags /> {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 inline-block rounded-full bg-green-700 px-5 py-2 text-sm font-medium text-white hover:bg-green-600"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog