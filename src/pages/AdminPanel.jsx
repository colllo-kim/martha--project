import React from 'react'
import { useState } from "react";
import {
  FaTachometerAlt,
  FaPenFancy,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
  FaTrash,
  FaEdit,
  FaPlus,
  FaTimes, // ✅ Add this
} from "react-icons/fa";

//import ReactQuill from "react-quill";
//import "react-quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import SidebarButton from '@/comp/SidebarButton';
import DashboardCards from '@/comp/DashboardCards';
import PostsManager from '@/comp/PostsManager';
import AnalyticsSection from '@/comp/AnalyticsSection';
import logo from '@/assets/logo.png'
function AdminPanel() {

  const mockPosts = [
    {
      id: 1,
      title: "How Tree Planting is Reviving the Cherangany Ecosystem",
      author: "Admin",
      date: "2025-07-05",
      tags: ["Environment", "Forestry"],
      image: logo,
      excerpt:
        "Explore how our tree planting initiatives have improved biodiversity, reduced erosion, and brought hope to communities.",
      content: "<p>Full post content here...</p>",
    },
    {
      id: 2,
      title: "Protecting Springs: Lifelines for Kamendi",
      author: "Jane W.",
      date: "June 22, 2025",
      tags: ["Water", "Conservation"],
      image: logo,
      excerpt:
        "A closer look into the science and community collaboration behind spring protection and water access in our region.",
    },
    {
      id: 3,
      title: "What Schools Can Do to Fight Climate Change",
      author: "Environmental Club",
      date: "June 10, 2025",
      tags: ["Education", "Climate Action"],
      image: logo,
      excerpt:
        "From tree nurseries to waste management clubs, schools are stepping up for a greener tomorrow.",
    },
    {
      id: 4,
      title: "What Schools Can Do to Fight Climate Change",
      author: "Environmental Club",
      date: "June 10, 2025",
      tags: ["Education", "Climate Action"],
      image: logo,
      excerpt:
        "From tree nurseries to waste management clubs, schools are stepping up for a greener tomorrow.",
    },
    {
      id: 5,
      title: "What Schools Can Do to Fight Climate Change",
      author: "Environmental Club",
      date: "June 10, 2025",
      tags: ["Education", "Climate Action"],
      image: logo,
      excerpt:
        "From tree nurseries to waste management clubs, schools are stepping up for a greener tomorrow.",
    },
    {
      id: 6,
      title: "What Schools Can Do to Fight Climate Change",
      author: "Environmental Club",
      date: "June 10, 2025",
      tags: ["Education", "Climate Action"],
      image: logo,
      excerpt:
        "From tree nurseries to waste management clubs, schools are stepping up for a greener tomorrow.",
    },
  ];
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [posts, setPosts] = useState(mockPosts);
  const [editingPost, setEditingPost] = useState(null);
  const blankPost = {
    title: "",
    author: "",
    date: new Date().toISOString().slice(0, 10),
    tags: [],
    image: "", // can be URL or file preview
    excerpt: "",
    content: "",
    file: null,
  };
  const [newPost, setNewPost] = useState(blankPost);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  
  const mockAnalytics = [
    { month: "Jan", visits: 400, users: 240 },
    { month: "Feb", visits: 300, users: 139 },
    { month: "Mar", visits: 500, users: 380 },
    { month: "Apr", visits: 700, users: 430 },
    { month: "May", visits: 650, users: 390 },
    { month: "Jun", visits: 900, users: 600 },
  ];
  const savePost = () => {
    const { title, author, date, excerpt, content } = newPost;
    if (!title || !author || !date || !excerpt || !content)
      return alert("Please fill out all required fields");
    const img = newPost.file ? URL.createObjectURL(newPost.file) : newPost.image || logo;
    setPosts([
      {
        id: Date.now(),
        ...newPost,
        image: img,
      },
      ...posts,
    ]);
    setNewPost(blankPost);
  };

  const updatePost = () => {
    const updated = { ...editingPost };
    if (editingPost.file) updated.image = URL.createObjectURL(editingPost.file);
    setPosts(posts.map((p) => (p.id === updated.id ? updated : p)));
    setEditingPost(null);
  };

  const deletePost = (id) => setPosts(posts.filter((p) => p.id !== id));

  // Pagination helpers
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  

  return (
    <div className="w-full max-w-[75rem] bg-green-50 dark:bg-slate-900 text-gray-800 dark:text-white">
    <div className="lg:flex">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/5 bg-white dark:bg-slate-800 p-4 shadow-md">
  <div className="mb-8 flex items-center justify-between lg:justify-start">
    <h2 className="text-xl font-bold text-green-700">Admin Panel</h2>
    <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Mobile Dropdown */}
  <div className={`lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
    <nav className="space-y-4 pb-4 border-b border-gray-300 dark:border-gray-600">
      <SidebarButton icon={<FaTachometerAlt />} label="Dashboard" active={active} setActive={setActive} />
      <SidebarButton icon={<FaPenFancy />} label="Posts" active={active} setActive={setActive} />
      <SidebarButton icon={<FaChartBar />} label="Analytics" active={active} setActive={setActive} />
      <button className="mt-6 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-red-600 hover:bg-red-100 dark:hover:bg-red-800">
        <FaSignOutAlt /> Logout
      </button>
    </nav>
  </div>

  {/* Desktop Sidebar */}
  <nav className="hidden lg:block space-y-4">
    <SidebarButton icon={<FaTachometerAlt />} label="Dashboard" active={active} setActive={setActive} />
    <SidebarButton icon={<FaPenFancy />} label="Posts" active={active} setActive={setActive} />
    <SidebarButton icon={<FaChartBar />} label="Analytics" active={active} setActive={setActive} />
    <button className="mt-10 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-red-600 hover:bg-red-100 dark:hover:bg-red-800">
      <FaSignOutAlt /> Logout
    </button>
  </nav>
</aside>


      {/* Main */}
      <main className="w-full p-4 sm:p-6 lg:w-4/5 overflow-x-auto">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6 text-2xl sm:text-3xl font-extrabold text-green-800 dark:text-green-300">
          {active}
        </motion.h1>

        {active === "Dashboard" && <DashboardCards posts={posts.length} users={35} projects={7} />}

        {active === "Posts" && (
          <PostsManager
            posts={posts}
            currentPosts={currentPosts}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            newPost={newPost}
            setNewPost={setNewPost}
            editingPost={editingPost}
            setEditingPost={setEditingPost}
            savePost={savePost}
            updatePost={updatePost}
            deletePost={deletePost}
          />
        )}

        {active === "Analytics" && <AnalyticsSection data={mockAnalytics} />}
      </main>
    </div>
  </div>
  )
}

export default AdminPanel