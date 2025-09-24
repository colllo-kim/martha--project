import React from 'react'
import { Link } from "react-router-dom";
function Cta() {
  return (
  <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-green-700 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-wide">Join Us in Growing the Future</h2>
          <p className="mb-8 text-lg">
            Together we can combat climate change, protect water sources, and secure a sustainable tomorrow.
          </p>
          <Link to="/contact" className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg hover:bg-gray-200">
            Become a Volunteer
          </Link>
        </div>
      </section>
  )
}

export default Cta