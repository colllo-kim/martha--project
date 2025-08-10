import React from 'react'

function Whatwedo() {
  return (
 <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-800 dark:text-green-300">What We Do</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              icon: "🌳",
              title: "Tree Growing & Agroforestry",
              desc: "Annual community drives to plant indigenous and fruit trees, restoring degraded land and improving livelihoods.",
            }, {
              icon: "💧",
              title: "Spring Protection",
              desc: "Construction of concrete headwalls, storage tanks, and distribution lines to provide safe water to households.",
            }, {
              icon: "🪨",
              title: "Soil Conservation",
              desc: "Training farmers on terracing, cover cropping, and climate‑smart agriculture to curb erosion.",
            }].map((f) => (
              <div key={f.title} className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg dark:bg-slate-800">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl dark:bg-slate-700">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-800 dark:text-blue-300">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Whatwedo