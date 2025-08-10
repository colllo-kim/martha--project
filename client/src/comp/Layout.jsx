import React, { useContext } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router'
import { AppContext } from '@/context/AppContext';
function Layout() {
 const {user ,SignIn} = useContext(AppContext);
  return user ? (
    <>

    <div className='h-[100vh] flex flex-col  overflow-y-scroll bg-green-900 gap-2'> 
        <Header />  
      <div className=' bg-green-900 max-w-[75rem] w-[100vw] m-auto   mt-30  justify-between flex  items-center'>
      <Outlet />
    </div>
    <Footer/>
    </div>
    </>
  ) : (
       <div className='flex items-center justify-center h-screen'>
            <SignIn />
        </div>
  )
}

export default Layout