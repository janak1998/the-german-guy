"use client";

import RingBtn from "@/components/RingBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const services = [
    {
      title: "Consulting",
      image: "/assets/women-consulting.png",
      description:
        "We understand going through application and immigration process can be confusing and fraustrating espically if you are a student and moving overseas for first time. Exactly to solve this, we will help you find right visa type (i.e Student, Working, Au-pair) in Germany or neighbouring countries like Netherlands, Austria, Switzerland. Where to find respective contract, how to make good application, supporting documents, financial documents and everything else in between. Consultancy exists already but they have incentive to misguide you and charge enermous money. It's always free to take our first consuling call so let's start right away",
      cta: "Book First Call",
    },
    {
      title: "Language Classes",
      image: "/assets/language-class.png",
      description:
        "Learning language is a crucial part in your jounrey to germany. You might need certain language level before making visa application or to settle after arriving in Germany. In both case, we have partnered up with best Nepali and Native-Germany language experts. You will learn from the best and you will put into practice to use it practically. With the flexibile online setup, you will now be even more confident on your language skills.",
      cta: "Register For Language Class",
    },
    {
      title: "After Arrival Setup",
      image: "/assets/travelers.svg",
      description:
        "So you have already got your visa. Congratulations. Now you have few more things to setup before you can go on that nearby city for instagram photos. You need to setup your insurance right, opening an bank account and releasing funds from blocked account, finding permanent place to live, regestring for address anmeldung, appointment for visa extendion, transport ticket and what not. These are rather important decisions since they will affect you long term, for example choosing right health insurance means right amount of fee with cashbacks and best services and so on. We help you on these as well. Be it booking an appointment in immigration office or opening right type of credit card. EVen after you come to germany We are there for you always.",
      cta: "Get Started",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="service mb-8 p-6 lg:p-10 border rounded-lg shadow-lg"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center flex-col-reverse">
            {service.title}
          </h2>
          <div
            className={`flex justify-center items-center gap-5 flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={400}
            />
            <div className="flex justify-center items-center flex-col lg:block">
              <p className="mb-4 text-center lg:text-left">
                {service.description}
              </p>

              <RingBtn
                className="w-max-[500px] lg:w-fit "
                btnText={service.cta}
              />

              {service.title === "After Arrival Setup" && (
                <>
                  <p className="my-4 text-center lg:text-left">
                    Our trusted partners are here to smooth your transition upon
                    arrival.
                  </p>
                  <Link
                    href="/partners"
                    className="flex w-[300px] justify-center items-center px-2 h-[46px] text-xl bg-primary text-secondary font-bold  rounded-lg"
                  >
                    Explore Our Partners{" "}
                    <span className="font-serif">
                      <svg
                        className="ml-2 stroke-white fill-white dark:stroke-black dark:fill-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 -8 72 72"
                        fill="rgba(0,0,0,0)"
                      >
                        <path
                          className="cls-1"
                          d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z"
                        />
                      </svg>
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
