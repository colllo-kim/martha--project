// Entry Point: main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './comp/Layout';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdminPanel from './pages/AdminPanel';
import ErrorPage from './pages/ErrorPage';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import AppContextProvider from './context/AppContext';
import SingleBlog from './pages/SingleBlog';

const router = createBrowserRouter([
  // Redirect root to /login
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },

  // Public routes
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  // Protected routes under layout (can be adjusted later to require auth)
  {
    path: '/dashboard',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'admin', element: <AdminPanel /> },
      { path: 'blog/:blogId', element: <SingleBlog /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
