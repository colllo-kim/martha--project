import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import { FaFileAlt, FaProjectDiagram, FaUsers } from "react-icons/fa";

function DashboardCards() {
  const { stats } = useContext(AppContext);

  const cards = [
    { title: "Total Posts", value: stats.totalPosts, icon: <FaFileAlt className="text-blue-500 text-3xl" /> },
    { title: "Projects", value: stats.totalProjects, icon: <FaProjectDiagram className="text-purple-500 text-3xl" /> },
    { title: "Users", value: stats.totalUsers, icon: <FaUsers className="text-teal-500 text-3xl" /> },
  ];

  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">📊 Dashboard Overview</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl bg-white p-6 shadow hover:shadow-md transition-all duration-300 dark:bg-slate-800 border border-gray-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-slate-700">
                {card.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-white">{card.title}</h2>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCards;
