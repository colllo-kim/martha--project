import React from 'react'

function SchoolInfo() {
  return (
      <div className="rounded-xl bg-gray-50 dark:bg-slate-800 p-6 shadow-lg mt-[20px]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200">Core Components:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Site Planning:</strong> land zoning, soil testing, and layout for trees, crops, nurseries, composting, and water systems.
                </li>
                <li>
                  <strong>Crop Design:</strong> fruit trees like mango, avocado, passionfruit; intercropped with vegetables; based on agroforestry principles.
                </li>
                <li>
                  <strong>Capacity Building:</strong> teacher and student training via school clubs (e.g., 4K Club) and extension officers.
                </li>
                <li>
                  <strong>Maintenance:</strong> student participation, crop calendar, organic techniques.
                </li>
                <li>
                  <strong>Market Linkages:</strong> connect with local buyers and reinvest income into bursaries and school needs.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200">Partners & Stakeholders:</h3>
              <p>
                Ministry of Education and Agriculture, local governments, NGOs, parents, and students – working together for shared impact and sustainability.
              </p>
            </div>
          </div>
  )
}

export default SchoolInfo