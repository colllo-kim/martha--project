import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import PostItem from "@/comp/PostItem";
function Blog() {

  const { posts} = useContext(AppContext);
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
          <PostItem posts={posts}/>
        )}
      </div>
    </section>
  )
}

export default Blog