import React from "react";

function DashboardCards({ posts, projects, users }) {
    const cards = [
      { title: "Total Posts", value: posts },
      { title: "Projects", value: projects },
      { title: "Users", value: users },
    ];
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg bg-white p-6 shadow dark:bg-slate-800">
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="text-2xl font-bold text-green-600">{c.value}</p>
          </div>
        ))}
      </div>
    );
  }

  export default DashboardCards