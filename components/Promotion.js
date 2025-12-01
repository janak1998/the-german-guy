import React from "react";
import { Button } from "./ui/button";

const Promotion = () => {
  return (
    <section className="container px-4 py-10 mx-auto mt-6 rounded-lg shadow-md py-8 bg-gray-100 dark:bg-gray-900 mb-10 flex flex-col items-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
        Latest Announcements & Offers
      </h2>
      <p className="text-center mb-8 text-gray-700 dark:text-gray-300 text-lg lg:text-2xl">
        Stay updated with the latest promotions and important announcements.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <i className="fas fa-bullhorn text-2xl text-gray-900 dark:text-gray-100"></i>
          </div>
          <div className="flex flex-col h-full justify-between items-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 text-center">
              Visa Process Deadline Extensions
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-center">
              The deadlines for visa applications have been extended. Check the
              new dates.
            </p>
            <Button className="max-w-[200px]">Learn More</Button>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <i className="fas fa-tag text-2xl text-gray-300 dark:text-gray-100"></i>
          </div>
          <div className="flex flex-col h-full justify-between items-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-100 dark:text-gray-200">
                Get your BARMER Health Insurance
              </h3>
              <p className="mb-4 text-gray-400 dark:text-gray-300">
                German Public Health Insurance {
                url: "https://feather-insurance.com/en/public-health-insurance/barmer?utm_source=hoc9lz2rfjmgtdp5"
                },
              </p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors max-w-[200px]">
              Apply Now 
              </Button>
              url: "https://feather-insurance.com/en/public-health-insurance/barmer?utm_source=hoc9lz2rfjmgtdp5"
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <i className="fas fa-calendar-alt text-2xl text-gray-900 dark:text-gray-100"></i>
          </div>
          <div className="flex flex-col h-full justify-between items-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 text-center">
              New German University Guidelines
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-center">
              Updated guidelines for applications to German universities.
            </p>
            <Button className="max-w-[200px]">Learn More</Button>
          </div>
        </div>
        <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <i className="fas fa-tag text-2xl text-gray-300 dark:text-gray-100"></i>
          </div>
          <div className="flex flex-col h-full justify-between items-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-100 dark:text-gray-200">
                Free Resume Review for New Students
              </h3>
              <p className="mb-4 text-gray-400 dark:text-gray-300">
                Book a session to get your resume reviewed for free.
              </p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors max-w-[200px]">
              Claim Offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
