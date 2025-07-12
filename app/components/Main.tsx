"use client";
import React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
  Pie,
  PieChart,
} from "recharts";

const Dashboard = () => {
  // Sample data
  const monthlyPerformance = [
    { month: "Jan", users: 4200, revenue: 2800 },
    { month: "Feb", users: 3800, revenue: 1900 },
    { month: "Mar", users: 5100, revenue: 4300 },
    { month: "Apr", users: 3900, revenue: 2400 },
    { month: "May", users: 4700, revenue: 3500 },
    { month: "Jun", users: 5300, revenue: 4100 },
  ];

  const trafficSources = [
    { channel: "Organic", percentage: 45 },
    { channel: "Direct", percentage: 25 },
    { channel: "Social", percentage: 15 },
    { channel: "Email", percentage: 10 },
    { channel: "Referral", percentage: 5 },
  ];

  const keyMetrics = [
    {
      title: "Active Users",
      value: "8,742",
      change: "+12%",
      isPositive: true,
      icon: "👥",
    },
    {
      title: "Total Revenue",
      value: "$48,290",
      change: "+23%",
      isPositive: true,
      icon: "💰",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.4%",
      isPositive: true,
      icon: "📈",
    },
    {
      title: "Avg. Session",
      value: "4m 12s",
      change: "-0.2%",
      isPositive: false,
      icon: "⏱️",
    },
  ];

  const recentActivity = [
    {
      title: "New feature launched",
      description: "The new dashboard layout is now available to all users",
      time: "2 hours ago",
    },
    {
      title: "Scheduled maintenance",
      description: "System will be down for upgrades tomorrow from 2-4 AM",
      time: "Yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header - Mobile Optimized */}
      <header className="mb-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <nav className="text-xs md:text-sm text-gray-500 mb-1">
                Dashboard / Overview
              </nav>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Welcome back, Supanusan!
              </h1>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button className="p-1 text-gray-500 relative">
                <span className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                S
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-600 mb-4">
            Here's what's happening with your business today
          </p>

          {/* Search - Mobile Collapsed */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Key Metrics - Stacked on Mobile */}
      <section className="mb-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 rounded-lg shadow-xs hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">
                    {metric.title}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-gray-800">
                    {metric.value}
                  </p>
                </div>
                <span className="text-xl">{metric.icon}</span>
              </div>
              <div
                className={`mt-2 flex items-center text-xs sm:text-sm ${
                  metric.isPositive ? "text-green-500" : "text-red-500"
                }`}>
                {metric.change}
                {metric.isPositive ? (
                  <svg
                    className="w-3 h-3 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Charts Section - Stacked on Mobile */}
      <section className="mb-6 space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        {/* Performance Chart - Full width on mobile */}
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
            Monthly Performance
          </h2>
          <div className="h-48 sm:h-56 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPerformance}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="users"
                  name="Active Users"
                  fill="#4f46e5"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="revenue"
                  name="Revenue ($)"
                  fill="#10b981"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources - Full width on mobile */}
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
            Traffic Sources
          </h2>
          <div className="h-48 sm:h-56 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="percentage"
                  label={({ channel, percentage }) =>
                    `${channel} ${percentage}%`
                  }>
                  {trafficSources.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"][
                          index % 5
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Recent Activity and Trends - Stacked on Mobile */}
      <section className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        {/* Recent Activity - Full width on mobile */}
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-3 py-1">
                <h3 className="text-sm md:text-base font-medium text-gray-800">
                  {activity.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {activity.description}
                </p>
                <p className="text-2xs md:text-xs text-gray-400 mt-1">
                  {activity.time}
                </p>
              </div>
            ))}
            <button className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium flex items-center mt-3">
              View all activity
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Revenue Trend - Full width on mobile */}
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
            Revenue Trend
          </h2>
          <div className="h-48 sm:h-56 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyPerformance}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <p className="text-xs md:text-sm text-gray-500">
                Avg. monthly growth
              </p>
              <p className="text-green-500 text-sm md:text-base font-medium">
                +8.2%
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium flex items-center">
              Export data
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Navigation (only visible on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-4">
        <button className="text-blue-600 flex flex-col items-center">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="text-gray-500 flex flex-col items-center">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="text-xs mt-1">Analytics</span>
        </button>
        <button className="text-gray-500 flex flex-col items-center">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs mt-1">Finance</span>
        </button>
        <button className="text-gray-500 flex flex-col items-center">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
