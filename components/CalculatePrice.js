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
        public: 40000,
        private: 25000,
      },
    },
    masters: {
      name: "Masters",
      subOptions: {
        public: 35000,
        private: 20000,
      },
    },
    ausbildung: {
      name: "Ausbildung",
      subOptions: {
        "Pflege (Nursing)": 250000,
        IT: 250000,
        "Koch/Köchin": 220000,
        Büromanagement: 220000,
        "Hotelfachmann/-frau": 220000,
        Other: "We'll estimate the cost based on your field",
      },
    },
    aupair: {
      name: "Au Pair",
      subOptions: {
        Germany: 150000,
        Austria: 200000,
        Netherlands: 150000,
        Luxembourg: 150000,
        Other: "We'll estimate the cost based on your field",
      },
    },
    highSkilledWork: {
      name: "Skilled Professionals",
      subOptions: {
        Visa: 150000,
      },
    },
    chancenkarte: {
      name: "Chancenkarte (Opportunity Card)",
      subOptions: {
        Visa: 120000,
      },
    },
    volunteerVisa: {
      name: "Voluntary Service Visa",
      subOptions: {
        "FSJ/BFD": 150000,
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
    <div className="max-w-2xl mx-auto p-8" id="calculateCost">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Estimate Your Cost
      </h2>

      {/* Tabs for Service Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <span className="flex w-full justify-center">
          Choose Your Visa Service
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
            {`${optionKey.charAt(0).toUpperCase() + optionKey.slice(1)} - ${
              typeof services[activeTab].subOptions[optionKey] === "number"
                ? `Rs ${services[activeTab].subOptions[optionKey]}`
                : services[activeTab].subOptions[optionKey]
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
