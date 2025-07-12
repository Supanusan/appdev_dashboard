"use client";
import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";

type MenuItem = {
  title: string;
  items: string[];
  icon?: React.ReactNode;
};

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({});

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const menuSections: MenuItem[] = [
    {
      title: "MAIN",
      items: ["Dashboard", "Table", "Billing", "RTL"],
      icon: <FiMenu className="text-gray-500" />,
    },
    {
      title: "ACCOUNT PAGES",
      items: ["Profile", "Sign In", "Sign Up"],
      icon: <FiMenu className="text-gray-500" />,
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed md:relative z-40 w-64 md:w-1/5 h-full flex flex-col bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMobileOpen ? "left-0" : "-left-full md:left-0"
        }`}>
        {/* Logo/Title */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">
            PURITY UI DASHBOARD
          </h1>
        </div>

        {/* Menu Sections */}
        <div className="flex-1 overflow-y-auto">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border-b border-gray-100">
              <div
                className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSection(sectionIndex)}>
                <div className="flex items-center">
                  {section.icon}
                  <h2 className="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {section.title}
                  </h2>
                </div>
                {expandedSections[sectionIndex] ? (
                  <FiChevronDown className="text-gray-400" />
                ) : (
                  <FiChevronRight className="text-gray-400" />
                )}
              </div>

              {expandedSections[sectionIndex] && (
                <ul className="pb-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ml-6 rounded">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Help Card */}
        <div className="mt-auto p-4 border-t border-gray-200">
          <div className="bg-gradient-to-bl from-[#4FD1C5] to-[#4FD1C5] text-white rounded-lg p-4 flex flex-col items-center justify-center">
            <h3 className="font-medium text-center">Need help?</h3>
            <p className="text-xs text-center opacity-80 mt-1">
              Please check our docs
            </p>
            <button className="bg-white text-[#4FD1C5] font-medium rounded-md px-4 py-2 mt-3 text-sm hover:bg-opacity-90 transition w-full">
              Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
