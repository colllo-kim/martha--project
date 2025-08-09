import React from 'react'
import { toast } from "react-toastify";
import PageTitle from '@/comp/PageTitle';
import ServiceItem from '@/comp/ServiceItem';
import SchoolInfo from '@/comp/SchoolInfo';
import WelcomeCont from '@/comp/WelcomeCont';
function Services() {
  return (
    <section className="bg-white dark:bg-slate-900 px-4 py-16 w-full">
    <div className="mx-auto max-w-6xl">
       <PageTitle/>
        
        {/**services container */}
        <ServiceItem  />
         {/* New Section: School Agroforestry Model */}
         <SchoolInfo />
         {/**welcome container */}
         <WelcomeCont/>
    </div>
  </section>
  )
}

export default Services