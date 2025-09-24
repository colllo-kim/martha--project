// Entry Point: main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './comp/Layout';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ClerkProvider} from '@clerk/clerk-react'

//IMPORT YOUR PUBLISHABLE KEY
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISHABLE_KEY){
  throw new Error('Missing Publishable key')
}


import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdminPanel from './pages/AdminPanel';
import ErrorPage from './pages/ErrorPage';
import Services from './pages/Services';
import Login from './pages/Login';
import AppContextProvider from './context/AppContext';
import SingleBlog from './pages/SingleBlog';

const router = createBrowserRouter([
  // Redirect root to /login
  

  // Public routes
  {
    path: '/login',
    element: <Login />,
  },
  

  // App routes wrapped with layout (flat structure)
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'admin', element: <AdminPanel /> },
      { path: 'single-blog/:blogId', element: <SingleBlog /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
    </ClerkProvider>
  </React.StrictMode>
);
