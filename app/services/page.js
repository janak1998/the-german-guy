"use client";
import AffiliatePartners from "@/components/AffiliatePartners";
import RingBtn from "@/components/RingBtn";
import Image from "next/image";
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

              <p className="mb-4 mt-4 text-center lg:text-left">
                Here are our quick recommindation for some common services:
              </p>

              {service.title === "After Arrival Setup" && <AffiliatePartners />}

              <em>
                Note: Links might contain affilates. This allows us to earn
                little profit and reduce our service charge with no extra cost
                to you
              </em>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
