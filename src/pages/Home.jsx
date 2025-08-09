
import React from 'react';

import Hero from '@/comp/Hero';
import Vision from '@/comp/Vision';
import Whatwedo from '@/comp/Whatwedo';
import RecentActivities from '@/comp/RecentActivities';
import Cta from '@/comp/Cta';
function Home() {
 
  return  (
    <div className='flex flex-col gap-3'>
      {/* HERO */}
     <Hero/>
     
      {/* VISION */}
      <Vision/>

      {/* WHAT WE DO */}
      <Whatwedo/>
       
      {/* RECENT ACTIVITIES */}
      <RecentActivities/>

      {/* CTA */}
       <Cta/>
    </div>
  ) 
}

export default Home;