import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

function AnalyticsSection() {
  const {analyticsData,error,loading} = useContext(AppContext);
   

  
 

  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-800">
      <h2 className="mb-4 text-xl font-bold">Website Visits & Users</h2>

      {loading ? (
        <p className="text-gray-500">Loading analytics...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={analyticsData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#16a34a"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default AnalyticsSection;
