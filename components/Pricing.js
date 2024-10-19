import RingBtn from "./RingBtn";
import { Button } from "./ui/button";
import Link from "next/link";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container px-4 py-10 mx-auto text-gray-600 rounded-lg shadow-lg body-font overflow-hidden dark:bg-gray-900 dark:text-gray-400 mt-6 flex-col justify-center items-center"
    >
      <div className="flex flex-col text-center w-full mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold title-font mb-2 text-gray-800 dark:text-gray-200">
          Transparent Pricing Plans
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base lg:text-2xl text-gray-500 dark:text-gray-400">
          Start with a free session and choose a plan that suits your journey.
        </p>
      </div>
      <div className="flex flex-wrap -m-4 justify-center">
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 dark:border-gray-700 flex flex-col relative overflow-hidden">
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium mb-2">
              Free First Session
            </h2>
            <h1 className="text-3xl py-3 text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 leading-none">
              Free
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Kickstart your journey to Germany with personalized guidance.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                30-minute consultation
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Overview of the application and visa process
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Answers to your initial questions
              </li>
            </ul>

            <Button className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
              Book Your Free Session
            </Button>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-[#6C63FF] flex flex-col relative overflow-hidden bg-dark-800 dark:bg-gray-900">
            <span className="bg-[#6C63FF]  text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
              MOST POPULAR
            </span>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium mb-2">
              College + Visa Plan
            </h2>
            <h1 className="text-3xl py-3 text-gray-900 dark:text-white leading-none flex items-center mb-4 border-b border-gray-200 dark:border-gray-700">
              रु 35000
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Full support from college application to visa processing.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Resume review and optimization
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Personalized college application support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Visa application assistance
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Personal follow-up and guidance
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                10 additional support sessions
              </li>
            </ul>
            <button className="flex items-center justify-center mt-auto text-white bg-[#6C63FF] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#5A52D1] rounded">
              Choose Best Value Plan
            </button>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 dark:border-gray-700 flex flex-col relative overflow-hidden">
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium mb-2">
              Visa Only Plan
            </h2>
            <h1 className="text-3xl py-3 text-gray-900 dark:text-white leading-none flex items-center mb-4 border-b border-gray-200 dark:border-gray-700">
              रु 20000
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Focused support for your visa process only.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Visa application assistance
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Personalized guidance on visa requirements
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#6C63FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Session for post-application follow-up
              </li>
            </ul>
            <button className="flex items-center justify-center mt-auto text-white bg-gray-400 dark:bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 dark:hover:bg-gray-600 rounded">
              Choose Visa Only Plan
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto mt-4">
        <RingBtn
          className="w-max-[500px] lg:w-fit mx-auto"
          btnText={"Explore Our Services"}
          url={"/pricing"}
          target={"_self"}
        />
      </div>
    </section>
  );
};

export default Pricing;
