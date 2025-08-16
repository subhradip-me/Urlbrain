import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const AnalyticsChart = ({ range, data }) => {
  // Fallback to empty array if data is undefined
  const chartData = Array.isArray(data) ? data : [];

  return (
    <div className="w-full h-full bg-white rounded-xl p-4 transition-all duration-300 ">
      <h2 className="text-xl font-semibold mb-4 text-green-900">
        {range === "7days" && "Weekly Clicks Overview"}
        {range === "30days" && "Monthly Clicks Overview"}
        {range === "90days" && "Quarterly Clicks Overview"}
      </h2>
      <ResponsiveContainer width="100%" height={260} className="font-serif text-[20px]" >
        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} className="text-[20px]">
          <defs>
            <linearGradient id="clicksGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00DF81" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00DF81" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 0" strokeOpacity={0.2} />
          <XAxis dataKey="name" hide={range !== "7days"} />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', fontSize: '20px' }}
            labelStyle={{ color: '#000' }}
            itemStyle={{ color: '#00DF81' }}
          />
          <Area type="monotone" dataKey="clicks" stroke="#00DF81" fillOpacity={1} fill="url(#clicksGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
