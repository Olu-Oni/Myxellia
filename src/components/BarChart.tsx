import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MyBarChart: React.FC = () => {
  const data = [
    { month: "Jan", blue: 35, green: 27, red: 10 },
    { month: "Feb", blue: 5, green: 27, red: 10 },
    { month: "Mar", blue: 15, green: 7, red: 3 },
    { month: "Apr", blue: 15, green: 25, red: 10 },
    { month: "May", blue: 10, green: 0, red: 7 },
    { month: "Jun", blue: 37, green: 49, red: 7 },
    { month: "Jul", blue: 23, green: 37, red: 17 },
    { month: "Aug", blue: 23, green: 5, red: 17 },
    { month: "Sep", blue: 37, green: 35, red: 7 },
  ];

  // Custom formatter for Y-axis
  const formatYAxis = (value: number) => {
    return `${value}m`;
  };

  return (
    <div className="text-[10px] relative right-2">
      <ResponsiveContainer width={370} height={180} >
        <RechartsBarChart data={data} >
          <XAxis dataKey="month" />
          <YAxis
            type="number"
            tickFormatter={formatYAxis}
            domain={[0, 50]}
            ticks={[0, 10, 20, 30, 40, 50]}
          />
          <Bar dataKey="blue" fill="#3b82f6" barSize={4} />
          <Bar dataKey="green" fill="#10b981" barSize={4} />
          <Bar dataKey="red" fill="#ef4444" barSize={4} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
