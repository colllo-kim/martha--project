import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 max-w-[75rem] w-[100vw] m-auto">
      <div className="max-w-6xl mx-auto px-3 grid md:grid-cols-3 gap-8 text-sm">
        
        {/* Logo and socials */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center"> 
            <img
              className="object-cover h-[4rem] w-[4rem]"
              src={logo}
              alt="Kamendi Logo"
            />
            <p>Resilience, growing greener together.</p>
          </div>
          {/**
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold mb-2 text-black">Socials</h4>
            <div className="flex gap-4 text-xl">
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaFacebook />
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FaYoutube />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="#" className="text-green-500 hover:text-green-700">
                <FaWhatsapp />
              </a>
            </div>
          </div>
           */}
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Our Services</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:kamendiwatersourceenvironment@gmail.com"
              className="hover:underline text-blue-300"
            >
              kamendiwatersourceenvironment@gmail.com
            </a>
          </p>
          <p>Phone: +254 707 984 291</p>
          <p>Location: Kamendi, Cherangany</p>
        </div>
      </div>

      {/* Footer bottom */}
      <p className="text-center mt-6 text-xs">
        © {new Date().getFullYear()} Kamendi Water Sources & Environmental Conservation Group
      </p>
    </footer>
  );
}

export default Footer;
