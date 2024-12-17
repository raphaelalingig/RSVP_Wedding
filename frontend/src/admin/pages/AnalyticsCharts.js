import React, { useMemo } from "react";
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

const AnalyticsCharts = ({ guestLists = [] }) => {
  // Calculate RSVP statistics from guestLists
  const rsvpStats = useMemo(() => {
    const stats = {
      confirmed: 0,
      declined: 0,
      pending: 0,
    };

    guestLists.forEach((guest) => {
      switch (guest.status) {
        case 1: // Changed from 2 to 1 for Confirmed
          stats.confirmed++;
          break;
        case 3: // 3 remains same for Declined
          stats.declined++;
          break;
        case 2: // Changed from 1 to 2 for Pending
        default:
          stats.pending++;
          break;
      }
    });

    return [
      { name: "Accepts with pleasure", value: stats.confirmed },
      { name: "Decline with regrets", value: stats.declined },
      { name: "Pending responses", value: stats.pending },
    ];
  }, [guestLists]);

  const RSVP_COLORS = ["#4CAF50", "#F44336", "#FFA726"]; // Green for accepts, Red for declines, Orange for pending

  // Custom label formatter for the pie chart
  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Don't show label if slice is too small

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
                data={rsvpStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {rsvpStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={RSVP_COLORS[index % RSVP_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [value, name]}
                labelFormatter={() => ""}
              />
              <Legend
                formatter={(value, entry) => {
                  const { payload } = entry;
                  return `${value} (${payload.value})`;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-semibold">
            Total Invited Guests: {guestLists.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
