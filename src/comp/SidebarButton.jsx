import React from "react";

function SidebarButton({ icon, label, active, setActive }) {
    return (
      <button
        onClick={() => setActive(label)}
        className={`flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left font-medium transition hover:bg-green-100 dark:hover:bg-slate-700 ${active === label ? "bg-green-200 dark:bg-slate-700" : ""}`}
      >
        {icon} {label}
      </button>
    );
  }
  export default SidebarButton;