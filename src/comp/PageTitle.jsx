import React from 'react'

function PageTitle() {
  return (
  <h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-extrabold text-green-800 dark:text-green-300"
      >
        Our Core Programs & Services
      </h2>
  )
}

export default PageTitle