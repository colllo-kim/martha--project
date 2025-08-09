import React from 'react'
import { Link } from 'react-router-dom';
function WelcomeCont() {
  return (
    <div className="mt-20 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Want to support any of these programs or partner with us?
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-green-700 px-8 py-4 text-white hover:bg-green-600"
        >
          Reach Out To Us
        </Link>
      </div>
  )
}

export default WelcomeCont