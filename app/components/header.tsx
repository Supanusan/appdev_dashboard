import React from "react";

type MenuItem = {
  title: string;
  items: string[];
};

type Props = {};

export default function Sidebar({}: Props) {
  const menuSections: MenuItem[] = [
    {
      title: "MAIN",
      items: ["Dashboard", "Table", "Billing", "RTL"],
    },
    {
      title: "ACCOUNT PAGES",
      items: ["Profile", "Sign In", "Sign Up"],
    },
  ];

  return (
    <div className="w-1/5 h-full flex flex-col pl-3 bg-white shadow-md">
      {/* Logo/Title */}
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">PURITY UI DASHBOARD</h1>
      </div>

      <hr className="border-gray-200" />

      {/* Menu Sections */}
      {menuSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          <div className="px-4 py-2">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </h2>
          </div>
          <hr className="border-gray-200" />
          <ul className="mt-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Help Card */}
      <div className="mt-auto mb-4 mx-2">
        <div className="bg-gradient-to-bl from-[#4FD1C5] to-[#4FD1C5] text-white rounded-lg p-4 flex flex-col items-center justify-center">
          <h3 className="font-medium text-center">Need help?</h3>
          <p className="text-xs text-center opacity-80 mt-1">
            Please check our docs
          </p>
          <button className="bg-white text-[#4FD1C5] font-medium rounded-md px-4 py-2 mt-3 text-sm hover:bg-opacity-90 transition">
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
