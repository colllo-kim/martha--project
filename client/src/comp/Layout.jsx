import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className="h-[100vh] flex flex-col overflow-y-scroll bg-green-900">
      {/* Main container with fixed max width */}
      <div className="max-w-[85rem] w-full m-auto flex flex-col flex-1">
        
        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-1 w-full max-w-[80rem] m-auto ">
          <Outlet />
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
