import React, { useEffect, useState, useContext } from 'react';
import { setTheme, getTheme } from '@/utils/themeUtils';
import logo from '@/assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { AppContext } from '@/context/AppContext';
import { SignInButton, UserButton } from '@clerk/clerk-react';

function Header() {
  const [theme, setThemeState] = useState(getTheme());
  const [isNavShowing, setIsNavShowing] = useState(false);
  const { user } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  // const ADMIN_EMAIL = 'kamendiwatersourceenvironment@gmail.com'; // replace with your admin email
   const ADMIN_EMAIL = 'onemanlivity@gmail.com';

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-green-900 max-w-[80rem] w-full m-auto h-[5rem]  flex items-center justify-between sticky top-0 z-10 text-white">
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-2">
        <img className="w-6 h-6 object-contain" src={logo} alt="Logo" />
        <span className="font-semibold text-lg hidden sm:inline">Kamendi</span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-green-300 transition border-b-2 ${
              isActive(item.path) ? 'border-green-300 text-green-300' : 'border-transparent'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="bg-white text-black rounded-full p-2 flex items-center justify-center hover:bg-gray-100"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-blue-600" />
          )}
        </button>

        {/* Auth buttons */}
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button className="bg-green-300 text-green-900 px-4 py-1 rounded-full font-medium text-sm hover:bg-green-400 transition">
              Login
            </button>
          </SignInButton>
        )}

        {/* Admin Panel link */}
        {user?.emailAddresses?.[0]?.emailAddress === ADMIN_EMAIL && (
          <Link
            to="/admin"
            className="bg-green-300 text-green-900 px-4 py-1 rounded-full font-medium text-sm hover:bg-green-400"
          >
            Panel
          </Link>
        )}

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-2 text-white"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {isNavShowing && (
        <div className="absolute top-[5rem] left-0 w-full bg-green-800 flex flex-col md:hidden py-4 z-20 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-2 ${
                isActive(item.path)
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-700 hover:text-white'
              }`}
              onClick={() => setIsNavShowing(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
