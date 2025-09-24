import React from 'react'
import { useState } from "react";
import {
  FaTachometerAlt,
  FaPenFancy,
  FaChartBar,
  FaBars,
  FaTimes, // ✅ Add this
} from "react-icons/fa";
import { motion } from "framer-motion";
import SidebarButton from '@/comp/SidebarButton';
import DashboardCards from '@/comp/DashboardCards';
import PostsManager from '@/comp/PostsManager';
import AnalyticsSection from '@/comp/AnalyticsSection';
function AdminPanel() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="w-full max-w-[80rem] bg-green-50 dark:bg-slate-900 text-gray-800 dark:text-white">
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
    </nav>
  </div>

  {/* Desktop Sidebar */}
  <nav className="hidden lg:block space-y-4">
    <SidebarButton icon={<FaTachometerAlt />} label="Dashboard" active={active} setActive={setActive} />
    <SidebarButton icon={<FaPenFancy />} label="Posts" active={active} setActive={setActive} />
    <SidebarButton icon={<FaChartBar />} label="Analytics" active={active} setActive={setActive} />
  </nav>
</aside>


      {/* Main */}
      <main className="w-full p-4 sm:p-6 lg:w-4/5 overflow-x-auto">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6 text-2xl sm:text-3xl font-extrabold text-green-800 dark:text-green-300">
          {active}
        </motion.h1>

        {active === "Dashboard" && <DashboardCards  />}

        {active === "Posts" && (
          <PostsManager/>
        )}

        {active === "Analytics" && <AnalyticsSection  />}
      </main>
    </div>
  </div>
  )
}

export default AdminPanel