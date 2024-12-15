import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Countdown from "./Countdown";

const AnalyticsCharts = () => {
  // Sample data for monthly invites
  const monthlyData = [
    { month: "Jan", guests: 20 },
    { month: "Feb", guests: 35 },
    { month: "Mar", guests: 25 },
    { month: "Apr", guests: 45 },
    { month: "May", guests: 30 },
    { month: "Jun", guests: 50 },
  ];

  // Sample data for RSVP responses
  const rsvpData = [
    { name: "Accepts with pleasure", value: 75 },
    { name: "Decline with regrets", value: 25 },
  ];

  const RSVP_COLORS = ["#000000", "#666666"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Total Guests Card */}
      <Countdown />

      {/* RSVP Response Card */}
      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">RSVP Responses</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={rsvpData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {rsvpData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={RSVP_COLORS[index % RSVP_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Total Invited Guests: {rsvpData[0].value + rsvpData[1].value}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
