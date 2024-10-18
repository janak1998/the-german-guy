"use client";
// pages/calculate.js
import { useState } from "react";

const CalculatePrice = () => {
  const [activeTab, setActiveTab] = useState("bachelors");
  const [subOption, setSubOption] = useState("");

  const services = {
    bachelors: {
      name: "Bachelors",
      subOptions: {
        public: 1000,
        private: 2000,
      },
    },
    masters: {
      name: "Masters",
      subOptions: {
        public: 1000,
        private: 2000,
      },
    },
    ausbildung: {
      name: "Ausbildung",
      subOptions: {
        option1: 1200,
        option2: 1300,
      },
    },
    aupair: {
      name: "Au Pair",
      subOptions: {
        option1: 800,
        option2: 900,
      },
    },
    highSkilledWork: {
      name: "High Skilled Work Permit",
      subOptions: {
        option1: 2500,
        option2: 2700,
      },
    },
  };

  const getPrice = () => {
    if (activeTab && subOption) {
      return services[activeTab].subOptions[subOption] || 0;
    }
    return 0;
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Calculate Your Cost
      </h1>

      {/* Tabs for Service Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <span className="flex w-full justify-center">
          Please select the service you want
        </span>
        {Object.keys(services).map((key) => (
          <button
            key={key}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ease-in-out ${
              activeTab === key
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => {
              setActiveTab(key);
              setSubOption(""); // Reset sub option when changing tab
            }}
          >
            {services[key].name}
          </button>
        ))}
      </div>

      {/* Sub-options for each service */}
      <div className="border border-gray-300 rounded-lg p-6 shadow-md">
        {Object.keys(services[activeTab].subOptions).map((optionKey) => (
          <label className="block mb-2" key={optionKey}>
            <input
              type="radio"
              name="subOption"
              value={optionKey}
              checked={subOption === optionKey}
              onChange={(e) => setSubOption(e.target.value)}
              className="mr-2"
            />
            {`${optionKey.charAt(0).toUpperCase() + optionKey.slice(1)} - Rs ${
              services[activeTab].subOptions[optionKey]
            }`}
          </label>
        ))}
      </div>

      {/* Display the calculated price */}
      <div className="text-xl font-semibold mt-6 text-center">
        Total Price: Rs {getPrice()}
      </div>
    </div>
  );
};

export default CalculatePrice;
