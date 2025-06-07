"use client";
import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer:
        "Getting your visa sorted out can take a few weeks and how long exactly depends on the type of visa you’re applying for and how busy the German embassy or consulate in Kathmandu is. To make sure everything goes smoothly, it’s a good idea to kick off the process well before you plan to start your journey. That way, you’ll have plenty of time to handle everything without any stress. For more info, please follow the embassy website ( https://kathmandu.diplo.de/np-de )",
    },
    {
      question: "How much money does it take in total?",
      answer:
        "For students, here's a breakdown to help you plan: • Blocked Account: ~ 11,904 € • Processing expenses (including visa fee, university admission fee, insurance): ~ 1,000 € • Travel: ~ 600 € • First-month expenses: ~ 1,500 €(rent, deposit, etc) • Other: ~ 1,000 € Keep in mind, these numbers might change based on your situation, university and the city you're headed to. The exact figure depends on your contract and the type of visa you are applying for.",
    },
    {
      question: "Is German language required?",
      answer:
        "In most cases, yes, but there are exceptions where it's not necessary. For instance, if you're coming for an English-taught program, or a job that has only English requirements, or your au pair speaks a language other than German, or your contract provider agrees to bring you without the language requirement and many other scenarios. It really depends on your unique situation, contract, and the type of visa you are applying for. Nevertheless, knowing German can be super helpful in your everyday life and when you're looking for a job. It adds an extra layer of ease and opens up more opportunities for you. If you would like to learn German, feel free to join the TGG German language WhatsApp Group ( https://chat.whatsapp.com/Eo05CiAwzLsDtfMeQvyJjU )",
    },
    {
      question: "What is the situation of Au Pair / Ausbildung visa rate?",
      answer:
        "There is no limitation on visa approvals. It can be a bit subjective, but one thing's for sure – if you apply sincerely and express your intentions clearly, read through the contract, show language proficiency, and have a solid plan along with acing the interview, you're likely to secure the visa. It's all about being genuine and well-prepared.",
    },
    {
      question: "How can we assist you?",
      answer:
        "Our purpose is to assist you in finding the perfect university or job. Throughout the entire process, we lend a hand with documentation and legal procedures. We will guide you in crafting your CV and application letter, and handle your documents and travel arrangements. Our goal is to make your journey as smooth as possible. Just know, we're here to help with anything you may need.",
    },
  ];

  return (
    <div className="container px-4 py-10 mx-auto lg:max-w-[1200px]">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        Got Questions?
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="w-full text-left flex items-center  py-2 text-lg font-medium dark:text-white"
              onClick={() => toggleAccordion(index)}
            >
              <span className="ml-2 mr-5">
                {openIndex === index ? "-" : "+"}
              </span>
              {faq.question}
            </button>
            <div
              className={`mt-2 dark:text-white transition-all duration-300 ease-in-out px-[38px] py-0 ${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer.split(" ").map((word, idx) =>
                word.startsWith("https://") ? (
                  <a
                    href={word}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="hover:text-blue-500"
                  >
                    Link ↗
                  </a>
                ) : (
                  word + " "
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
