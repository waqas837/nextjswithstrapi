"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [tabsData, setTabsData] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("https://strapi-backend.drawsketch.co/api/teams");
        const result = await response.json();

        const formattedData = result.data.map((item) => ({
          name: item.attributes.name,
          expertise: item.attributes.expertise,
        }));

        setTabsData(formattedData);
        if (formattedData.length > 0) {
          setActiveTab(formattedData[0].name);
        }
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const activeTabContent =
    tabsData.find((tab) => tab.name === activeTab)?.expertise || "";

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#BA8194] border-opacity-70"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium mb-4">Why Choose Us</h2>
        <h1 className="text-4xl font-bold mb-6">
          We Are Different From Others
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          cupiditate accusantium recusandae soluta explicabo hic!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative w-full md:w-1/2 h-96 flex justify-start items-center">
          {/* Text Circle */}
          <div className="w-80 h-80 bg-[#BA8194] bg-opacity-80 rounded-full flex items-center justify-center text-white p-8 z-10 absolute left-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Industry Experts</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet adipisicing elit. Quas dolores nam
                ipsam odit quod fuga numquam hic quo!
              </p>
            </div>
          </div>

          {/* Image Circle */}
          <div className="w-80 h-80 rounded-full overflow-hidden absolute right-0">
            <img
              src={"img.webp"}
              alt="Professional woman using laptop"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

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

          {/* Tab content area */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4 h-40 overflow-y-auto shadow-inner">
            <p className="text-gray-700">{activeTabContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
