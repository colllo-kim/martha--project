import React from 'react'
import { FaRegLightbulb, FaUsers, FaHandsHelping } from "react-icons/fa";
import { Link } from 'react-router-dom';
function AboutUs() {
  const pillars = [
    {
      icon: <FaRegLightbulb className="text-yellow-500 text-3xl" />,
      title: "Our Vision",
      text: "Model environmental organization contributing to a resilient and sustainable community."
    },
    {
      icon: <FaHandsHelping className="text-green-600 text-3xl" />,
      title: "Our Mission",
      text: "To promote water and environmental conservation in Kamendi and the wider Cherangany ecosystem through tree growing, soil and spring protection."
    },
    {
      icon: <FaUsers className="text-blue-600 text-3xl" />,
      title: "Our Motto",
      text: "We are greener and resilient together."
    }
  ];
  
  const coreValues = [
    "Environmental Stewardship",
    "Community Empowerment",
    "Sustainability",
    "Accountability",
    "Partnerships",
    "Youth Engagement"
  ];
  return (
    <section className="bg-white dark:bg-slate-900 px-4 py-5">
    <div className="mx-auto max-w-6xl">
      <h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl font-extrabold text-green-800 dark:text-green-300"
      >
        About Us
      </h2>

      {/* Organization Purpose */}
      <div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          Kamendi Environment CBO is a grassroots organization dedicated to addressing pressing environmental issues affecting the Cherangany ecosystem and Kamendi community. Through impactful programs, inclusive partnerships, and evidence-driven advocacy, we empower local communities to conserve natural resources, enhance climate resilience, and foster a greener future.
        </p>
      </div>

      {/* Vision - Mission - Motto */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl bg-green-50 p-6 text-center shadow-md dark:bg-slate-800"
          >
            <div className="mb-3 flex justify-center">{p.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-blue-800 dark:text-blue-300">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.text}</p>
          </div>
        ))}
      </div>
        
      <section className="rounded-xl bg-gray-50 dark:bg-slate-800 p-6 shadow mt-[20px]">
          <h2 className="mb-4 text-2xl font-bold text-green-700 dark:text-green-300">
            🌿 School and village Based Agroforestry & Climate Resilience
          </h2>
          <p className="mb-4">
            We collaborate with schools to create sustainable farms that integrate high-value fruit trees, vegetables, and herbs, promoting nutrition, skills development, and income generation.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li><strong>Empowers students</strong> through clubs like the 4K Club and hands-on learning</li>
            <li><strong>Supports school budgets</strong> by selling farm produce and reinvesting income</li>
            <li><strong>Enhances food security</strong> and climate-smart agriculture practices</li>
          </ul>
        </section>

      <section className='text-center mt-[20px]'>
          <h2 className="mb-4 text-2xl font-semibold text-blue-800 dark:text-blue-300">
            💡 Our Approach to Impact
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Spring protection systems to provide clean water access to remote communities</li>
            <li>Agroforestry and tree growing initiatives in schools and community farms</li>
            <li>Soil protection through sustainable farming methods</li>
            <li>Environmental education and capacity building with students and community members</li>
          </ul>
        </section>

      
      {/* Core Values */}
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <h3 className="mb-6 text-center text-2xl font-bold text-green-700 dark:text-green-300">Our Core Values</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <li
              key={i}
              className="rounded-lg bg-white px-6 py-4 text-center text-gray-700 shadow dark:bg-slate-800 dark:text-gray-300"
            >
              {v}
            </li>
          ))}
        </ul>
      </div>
          
      <section className='text-center space-y-1 mt-6'>

          
          <h2 className="mb-4 text-2xl font-semibold text-blue-800 dark:text-blue-300">
            🤝 Our Stakeholders
          </h2>
          <ul className="list-disc list-inside space-y-2 ">
            <li><strong>Students:</strong> Change agents and custodians of the environment</li>
              <li><strong>Environment & National Goverment Administration:</strong> Technical and policy support</li>
            <li><strong>Schools:</strong> Grounds for practical agroforestry innovation</li>
            <li><strong>Parents & Community:</strong> Support, labor, and local knowledge</li>
            <li><strong>Ministry of Education & Agriculture:</strong> Technical and policy support</li>
            <li><strong>NGOs/CSOs:</strong> Funding, capacity building, and scaling efforts</li>
            <li><strong>County Government:</strong> Seedlings, market access, and infrastructure</li>
              <li><strong>Forestry:</strong> Support and collaboration</li>
          </ul>
        </section>

      {/* Team CTA */}
      <div className="mt-20 text-center">
        <h3 className="mb-3 text-2xl font-semibold text-blue-800 dark:text-blue-300">
          Our People, Our Strength
        </h3>
        <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
          We are a diverse team of passionate environmentalists, community leaders, educators, and youth volunteers working hand-in-hand to protect and restore the environment. Join us as a volunteer, partner, or ambassador.
        </p>

        <Link
          to={"/contact"}
          className="mt-6 inline-block rounded-full bg-green-700 px-8 py-4 text-white hover:bg-green-600"
        >
          Join Our Mission
        </Link>
      

      </div>
      
    </div>
  </section>
  )
}

export default AboutUs