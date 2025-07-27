import { AppContext } from '@/context/AppContext';
import React, { useContext, useEffect } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function ContactUs() {
  const {currentUser} = useContext(AppContext);
  const navigate = useNavigate();
  const token = currentUser?.token;
useEffect(() =>{
 if(!token){
  navigate('/login')
 }
},[currentUser])
  return (
    <section className="bg-white dark:bg-slate-900 px-4 py-5">
    <div className="mx-auto max-w-7xl">
      <h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center text-4xl font-extrabold text-green-800 dark:text-green-300"
      >
        Get in Touch with Us
      </h2>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Info Panel */}
        <div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-green-50 p-8 text-gray-800 shadow-lg dark:bg-slate-800 dark:text-gray-300"
        >
          <h3 className="mb-6 text-2xl font-semibold text-blue-800 dark:text-blue-300">
            Contact Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-green-600 text-xl" />
              <div>
                <p className="font-medium">Address</p>
                <p>Kamendi, Cherangany Constituency, Trans-Nzoia County, Kenya</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="mt-1 text-green-600 text-xl" />
              <div>
                <p className="font-medium">Email</p>
                <p>Kamendiwatersources&environmentgroup@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1 text-green-600 text-xl" />
              <div>
                <p className="font-medium">Phone</p>
                <p>+254 707 984 291</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="mt-1 text-green-600 text-xl" />
              <div>
                <p className="font-medium">Office Hours</p>
                <p>Mon - Fri: 8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-6 text-xl">
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaFacebook />
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-700">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
          </div>

          <div className="mt-10">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6841471044097!2d35.057!3d1.0295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fea2548f6e0a7%3A0xb26c6bdf56a!2sCherangany%2C%20Kenya!5e0!3m2!1sen!2ske!4v1718000000000!5m2!1sen!2ske"
              width="100%"
              height="250"
              className="rounded-xl border"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-green-100 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800"
          onSubmit={(e) => {
            e.preventDefault();
            alert("✅ Message sent! Thank you for reaching out.");
          }}
        >
          <h3 className="mb-6 text-2xl font-semibold text-green-800 dark:text-green-300">
            Send Us a Message
          </h3>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Your Name</label>
            <input
              required
              type="text"
              className="w-full rounded border border-gray-300 p-3 focus:ring-green-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Email Address</label>
            <input
              required
              type="email"
              className="w-full rounded border border-gray-300 p-3 focus:ring-green-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Phone Number (Optional)</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-3 focus:ring-green-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Subject</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-3 focus:ring-green-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea
              required
              rows="5"
              className="w-full rounded border border-gray-300 p-3 focus:ring-green-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-green-700 px-6 py-3 text-white hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default ContactUs