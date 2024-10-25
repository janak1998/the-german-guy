import React from "react";
import { Button } from "./ui/button";

const serviceData = [
  {
    title: "Consulting",
    description:
      "Professional consulting services to help you navigate your career path.",
  },
  {
    title: "Language Classes",
    description:
      "Join our language classes to improve your communication skills.",
  },
  {
    title: "Before Arrival Setup",
    description: "Effortless moves to Germany and beyond with expert guidance.",
  },
  {
    title: "After Arrival Setup",
    description: "Get assistance with setting up your new life after arrival.",
  },
  {
    title: "Job Applications",
    description: "Support in landing the perfect job to kickstart your career.",
  },
];

const Services = () => {
  return (
    <section className="container px-4 py-10 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          How We Help You
        </h2>
        <p className="text-lg mt-2 text-gray-500 dark:text-gray-300">
          Guiding you through every step of the process.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center p-6 w-full sm:w-1/2 lg:w-1/4 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300 h-full"
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-primary mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm0 0v6m0 0H9m3 0h3"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-center my-2 text-gray-500 dark:text-gray-300">
                {service.description}
              </p>
            </div>
            <Button className="mt-2">More Info</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
