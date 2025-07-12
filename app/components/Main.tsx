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
  // Sample data - in a real app this would come from an API
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
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <nav className="text-sm text-gray-500 mb-1">
              Dashboard / Overview
            </nav>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, Sarah!
            </h1>
            <p className="text-gray-600">
              Here what is happening with your business today
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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

            <button className="p-2 text-gray-500 hover:text-gray-700 relative">
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              <svg
                className="h-6 w-6"
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

            <div className="hidden md:flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                S
              </div>
              <span className="text-sm font-medium">Sarah Johnson</span>
            </div>
          </div>
        </div>
      </header>

      {/* Key Metrics */}
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {metric.value}
                  </p>
                </div>
                <span className="text-2xl">{metric.icon}</span>
              </div>
              <div
                className={`mt-3 flex items-center text-sm ${
                  metric.isPositive ? "text-green-500" : "text-red-500"
                }`}>
                {metric.change}
                {metric.isPositive ? (
                  <svg
                    className="w-4 h-4 ml-1"
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
                    className="w-4 h-4 ml-1"
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

      {/* Charts Section */}
      <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Monthly Performance
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPerformance}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="users"
                  name="Active Users"
                  fill="#4f46e5"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="revenue"
                  name="Revenue ($)"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Traffic Sources
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
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

      {/* Recent Activity and Trends */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                <h3 className="font-medium text-gray-800">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
                <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
              </div>
            ))}
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center mt-4">
              View all activity
              <svg
                className="w-4 h-4 ml-1"
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

        {/* Revenue Trend */}
        <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Revenue Trend
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyPerformance}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Avg. monthly growth</p>
              <p className="text-green-500 font-medium">+8.2%</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              Export data
              <svg
                className="w-4 h-4 ml-1"
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
    </div>
  );
};

export default Dashboard;
