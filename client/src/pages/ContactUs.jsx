import React, { useRef } from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaUser,
  FaRegEnvelope,
  FaPhone,
  FaTag,
  FaCommentDots,
} from 'react-icons/fa';

function ContactUs() {

   const formRef = useRef(null);

     const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/xzzvyzro", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Message sent! Thank you for reaching out.");
        formRef.current.reset(); // Clear form only after success
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please check your connection.");
    }
  };
  return (
    <section className="bg-white dark:bg-slate-900 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl sm:text-4xl font-extrabold text-green-800 dark:text-green-300">
          📬 Get in Touch with Us
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl bg-green-50 p-6 sm:p-8 text-gray-800 shadow-lg dark:bg-slate-800 dark:text-gray-300">
            <h3 className="mb-6 text-xl sm:text-2xl font-semibold text-blue-800 dark:text-blue-300">
              📍 Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-green-600 text-xl" />
                <div>
                  <p className="font-medium">Address</p>
                  <p>Kamendi, Cherangany Constituency, Trans-Nzoia County, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-green-600 text-xl" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="break-all">
                    <a
                      href="mailto:kamendiwatersourceenvironment@gmail.com"
                      className="hover:underline text-blue-500"
                    >
                      kamendiwatersourceenvironment@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-green-600 text-xl" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>
                    <a
                      href="tel:+254707984291"
                      className="hover:underline text-blue-500"
                    >
                      +254 707 984 291
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="mt-1 text-green-600 text-xl" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p>Mon - Fri: 8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links
            <div className="mt-8 flex gap-6 text-xl">
              <a href="#" className="text-blue-700 hover:text-blue-900"><FaFacebook /></a>
              <a href="#" className="text-sky-500 hover:text-sky-700"><FaTwitter /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram /></a>
              <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube /></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
              <a href="#" className="text-green-500 hover:text-green-700"><FaWhatsapp /></a>
            </div>
              */}
            {/* Map */}
            <div className="mt-8">
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
             {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-green-100 bg-white p-6 sm:p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <h3 className="mb-6 text-xl sm:text-2xl font-semibold text-green-800 dark:text-green-300">
              ✍️ Send Us a Message
            </h3>

            <div className="mb-4 flex items-center gap-2">
              <FaUser className="text-green-600" />
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div className="mb-4 flex items-center gap-2">
              <FaRegEnvelope className="text-green-600" />
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div className="mb-4 flex items-center gap-2">
              <FaPhone className="text-green-600" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (Optional)"
                className="w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div className="mb-4 flex items-center gap-2">
              <FaTag className="text-green-600" />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div className="mb-6 flex items-start gap-2">
              <FaCommentDots className="mt-2 text-green-600" />
              <textarea
                required
                rows="5"
                name="message"
                placeholder="Write your message here..."
                className="w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
