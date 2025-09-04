import React from 'react'
import { FaLeaf, FaTint, FaMountain, FaHandsHelping, FaRecycle, FaGlobeAfrica } from "react-icons/fa";
import community from '@/assets/moblize.jpg'
import general  from '@/assets/general.png'
import man from '@/assets/avocado-donation.jpg'
import school from '@/assets/klya.jpg'
import soil from '@/assets/soil-conservation.jpg'
import water from '@/assets/water-protection.jpg'
import educate from '@/assets/com-donation.jpg'
function ServiceItem() {

    const services = [
    {
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: "Tree Growing & Agroforestry",
      description:
        "We engage local schools, farmers, and youth groups in tree growing drives to combat deforestation. Our agroforestry programs empower farmers to integrate trees with crops, increasing resilience to climate change while improving food security.",
      objectives: [
        "Promote indigenous and fruit tree growing",
        "Restore degraded landscapes",
        "Enhance livelihoods through agroforestry"
      ],
      image: man,
    },
    {
      icon: <FaTint className="text-blue-600 text-4xl" />,
      title: "Water Conservation & Spring Protection",
      description:
        "We identify and protect key water sources such as springs through fencing, tank installation, and gravity flow systems. This ensures long-term access to clean and potable water for communities living in the Cherangany ecosystem.",
      objectives: [
        "Construct spring protection headwalls",
        "Install storage and distribution tanks",
        "Improve access to clean water"
      ],
      image:water,
    },
    {
      icon: <FaMountain className="text-yellow-600 text-4xl" />,
      title: "Soil Conservation & Sustainable Agriculture",
      description:
        "Through training and demonstration farms, we teach farmers best practices for soil retention, erosion control, and sustainable farming. This preserves soil fertility, improves yields, and builds resilience.",
      objectives: [
        "Train on terracing, cover cropping & mulching",
        "Reduce erosion in high-risk zones",
        "Promote climate-smart agriculture"
      ],
      image: soil,
    },
    {
      icon: <FaRecycle className="text-purple-600 text-4xl" />,
      title: "Waste Management & Environmental Clean-Ups",
      description:
        "We organize community clean-ups and awareness drives to manage solid waste, reduce pollution, and promote environmental hygiene in public spaces, schools, and markets.",
      objectives: [
        "Conduct monthly clean-up campaigns",
        "Train on proper waste disposal",
        "Promote recycling and reuse culture"
      ],
      image: general,
    },
    {
      icon: <FaGlobeAfrica className="text-red-600 text-4xl" />,
      title: "Climate Change Education",
      description:
        "We create awareness on climate change, biodiversity loss, and the importance of sustainable practices among school children, communities, and policy stakeholders.",
      objectives: [
        "Partner with schools for climate clubs",
        "Develop conservation learning materials",
        "Host community climate forums"
      ],
      image: educate,
    },
    {
      icon: <FaHandsHelping className="text-pink-600 text-4xl" />,
      title: "Community Mobilization & Capacity Building",
      description:
        "We strengthen community institutions and local leadership to take charge of environmental protection efforts by offering training, support, and technical knowledge.",
      objectives: [
        "Train community-based conservation groups",
        "Mentor local leaders and youth",
        "Facilitate stakeholder collaboration"
      ],
      image: community,
    },
    {
      icon: <FaHandsHelping className="text-pink-600 text-4xl" />,
      title: " 🌿 School and village Based Agroforestry & Climate resilince",
      description:
        "  We empower schools to create sustainable farms that support nutrition, education, and income. This model integrates high-value fruit trees and crops in the school ecosystem..",
      objectives: [
        "Improve school nutrition and food security",
        "Generate school income for welfare and operations",
        "Teach students practical environmental and agriculture skills",
        "Build climate resilience and sustainability awareness"
      ],
      image: school,
    }
  ];
  return (
  <div className="space-y-24">
        {services.map((s, i) => (
              <div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col-reverse items-center gap-10 lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="w-full max-w-xl text-center lg:text-left">
              <div className="mb-3">{s.icon}</div>
              <h3 className="mb-3 text-2xl font-semibold text-blue-800 dark:text-blue-300">{s.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{s.description}</p>
              <ul className="list-disc space-y-2 pl-6 text-left text-gray-600 dark:text-gray-400">
                {s.objectives.map((o, j) => (
                  <li key={j}>{o}</li>
                ))}
              </ul>
            </div>
            <img
              src={s.image}
              alt={s.title}
              className="w-full max-w-xl rounded-3xl object-cover shadow-xl h-72 lg:h-96"
            />
          </div>
        ))}
      </div>
  )
}

export default ServiceItem