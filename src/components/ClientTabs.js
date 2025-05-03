"use client";

import { useState } from "react";

export default function ClientTabs({ tabsData }) {
  const [activeTab, setActiveTab] = useState(
    tabsData.length > 0 ? tabsData[0].name : ""
  );

  const activeTabContent =
    tabsData.find((tab) => tab.name === activeTab)?.expertise || "";

  return (
    <>
      {/* Tabs and content */}

      <div className="w-full md:w-1/2">
        <div className="space-y-4 mb-6">
          {tabsData.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center justify-between w-full rounded-full py-3 px-6 text-lg font-medium ${
                activeTab === tab.name
                  ? "bg-[#BA8194] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <span>&lt;</span>
              <span className="flex-grow text-center">{tab.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 bg-gray-50 rounded-lg p-4 h-40 overflow-y-auto shadow-inner">
          <p className="text-gray-700">{activeTabContent}</p>
        </div>
      </div>
    </>
  );
}
