
import React, { useContext, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import logo from '@/assets/logo.png';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import  community from '@/assets/community.png'
import mantree from '@/assets/man-tree.png'
import school from '@/assets/school.png'
import general from '@/assets/general.png'
import man from '@/assets/man.png'
import soil from '@/assets/soil.png'
import water from '@/assets/water.png'
import educate from '@/assets/educating.png'


//recent images
import  gnhimg from '@/assets/gnhimg.jpg'
import img2 from '@/assets/img2.jpg'
import kids from '@/assets/kids.jpg'
import klya from '@/assets/klya.jpg'
import schimg from '@/assets/schimg.jpg'
import schphoto from '@/assets/schphoto.jpg'
import wmn from '@/assets/wmn.jpg'

import soil2 from '@/assets/soil-2.png'
import communtytree from '@/assets/com-tree.png'
import { AppContext } from '@/context/AppContext';
function Home() {
  const {currentUser} = useContext(AppContext);
    const navigate = useNavigate();
    const token = currentUser?.token
  useEffect(() =>{
   if(!token){
    navigate('/login')
   }
  },[currentUser])
  const carouselImages = [
    { src: mantree, alt: "Tree Planting" },
    { src: school, alt: "Water Project" },
    { src: community, alt: "Community Event" },
    {src: general , alt: "general"},
    { src : man , alt:"man grwowing tree"},
    { src: communtytree, alt: "community planting tree" },
    { src: educate, alt: "Community education" },
    {src: soil , alt: "soil conservation"},
    { src : water , alt:"water conservation"}
  ];

  const RecentImages = [
    { src: gnhimg, alt: "Tree Planting with Benon secondary school" },
    { src: img2, alt: "Engaging community members" },
    { src: kids, alt: "Planting trees" },
    {src: klya , alt: "Tree planting with Kalya school"},
    { src : schimg, alt:"School photo"},
    { src: schphoto, alt: " Benon Students" },
    { src: wmn, alt: "Local efforts" },
  ];
 
  const stats = [
    { value: 35000, label: "Trees Planted" },
    { value: 12, label: "Springs Protected" },
    { value: 5200, label: "Households Reached" },
    { value: 15, label: "Partner Schools" },
  ];

  

  return (
    <div className='flex flex-col gap-3'>
      {/* HERO */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-20">
          <div>
            <h1 className="mb-6 text-3xl md:text-5xl font-extrabold leading-tight text-green-900 dark:text-green-300">
              Greener Together.<br className="hidden sm:block" /> Resilient Forever.
            </h1>
            <p className="mb-8 max-w-md text-lg text-gray-700 dark:text-gray-300">
              Kamendi Environment CBO empowers communities across the Cherangany ecosystem through water conservation, tree growing, and soil protection programmes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="rounded-full bg-green-700 px-6 py-3 text-white shadow hover:bg-green-600">
                Explore Programs
              </Link>
              <Link to="/contact" className="rounded-full border border-green-700 px-6 py-3 text-green-700 hover:bg-green-100 dark:hover:bg-slate-700 dark:text-green-300 dark:border-green-300">
                Get Involved
              </Link>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="mt-6 md:mt-0">
            <Carousel
              arrows
              autoPlay
              autoPlaySpeed={4000}
              infinite
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
                mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
              }}
              itemClass="px-2"
            >
              {carouselImages.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="h-72 w-full rounded-3xl object-cover shadow-lg md:h-96"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </header>
      {/* VISION */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            To be a model environmental organization that builds a resilient and sustainable community through proactive conservation efforts and strong partnerships.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-800 dark:text-green-300">What We Do</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              icon: "🌳",
              title: "Tree Growing & Agroforestry",
              desc: "Annual community drives to plant indigenous and fruit trees, restoring degraded land and improving livelihoods.",
            }, {
              icon: "💧",
              title: "Spring Protection",
              desc: "Construction of concrete headwalls, storage tanks, and distribution lines to provide safe water to households.",
            }, {
              icon: "🪨",
              title: "Soil Conservation",
              desc: "Training farmers on terracing, cover cropping, and climate‑smart agriculture to curb erosion.",
            }].map((f) => (
              <div key={f.title} className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg dark:bg-slate-800">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl dark:bg-slate-700">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-800 dark:text-blue-300">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       
      {/* RECENT ACTIVITIES */}
<section className="bg-white dark:bg-slate-900 py-16">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="mb-12 text-center text-3xl font-bold text-green-800 dark:text-green-300">Recent Activities</h2>
    <Carousel
      customLeftArrow={
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-green-700 hover:text-green-900">
          <FaChevronLeft size={24} />
        </button>
      }
      customRightArrow={
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-green-700 hover:text-green-900">
          <FaChevronRight size={24} />
        </button>
      }
      responsive={{
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
      }}
      arrows
      infinite
      autoPlay
      autoPlaySpeed={5000}
      itemClass="px-4"
      containerClass="relative"
    >
      {RecentImages.map((img, index) => (
        <div
          key={index}
          className="bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md flex flex-col"
        >
          <img src={img.src} alt={img.alt} className="h-60 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">{img.alt}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              This activity demonstrates our continued commitment to sustainability and community engagement.
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
</section>


      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-green-700 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-wide">Join Us in Planting the Future</h2>
          <p className="mb-8 text-lg">
            Together we can combat climate change, protect water sources, and secure a sustainable tomorrow.
          </p>
          <Link to="/contact" className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg hover:bg-gray-200">
            Become a Volunteer
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;