"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const Page = () => {
  const partners = {
    Insurance: [
      {
        name: "Public Health Insurance",
        url: "https://feather-insurance.com/en/public-health-insurance/barmer?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Private Health Insurance",
        url: "https://feather-insurance.com/private-health-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Dental Insurance",
        url: "https://feather-insurance.com/dental-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Life Insurance",
        url: "https://feather-insurance.com/life-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Disability Insurance",
        url: "https://feather-insurance.com/disability-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Dog liability Insurance",
        url: "https://feather-insurance.com/dog-liability-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Personal liability Insurance",
        url: "https://feather-insurance.com/personal-liability-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Household contents Insurance",
        url: "https://feather-insurance.com/household-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Bike Insurance",
        url: "https://feather-insurance.com/bike-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Legal Insurance",
        url: "https://feather-insurance.com/legal-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
      {
        name: "Pet Health",
        url: "https://feather-insurance.com/pet-health-insurance?utm_source=hoc9lz2rfjmgtdp5",
        btn_label: "Explore Plans",
      },
    ],
    "German Banks": [
      {
        name: "N26",
        url: "https://n26.com/r/awanishs0376",
        btn_label: "Start Banking",
      },
      {
        name: "Revolut",
        url: "https://revolut.com/referral/?referral-code=awanise199",
        btn_label: "Start Banking",
      },
      {
        name: "Commerzbank",
        url: "https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=JTDNVS",
        btn_label: "Start Banking",
      },
    ],
    "Credit Cards": [
      {
        name: "Credit Card Advanzia",
        url: "https://tell.tl/p/b1a/1z0idrw",
        btn_label: "Apply Now",
      },
    ],
    Electricity: [
      {
        name: "Eprimo",
        url: "https://tell.tl/p/b1a/2hYs-uQ",
        btn_label: "Connect Now",
      },
    ],
    "Blocked Account": [
      {
        name: "Expatrio",
        url: "https://www.expatrio.com?p=TGG23",
        btn_label: "Get Started",
      },
    ],
    "Transfer Money": [
      {
        name: "Wise",
        url: "https://wise.com/invite/ihpc/chitrakantis",
        btn_label: "Secure Transfer",
      },
    ],
    "Internet/Sim Card": [
      {
        name: "1&1",
        url: "https://www.1und1.de/?ps_id=P786342813",
        btn_label: "Join Now",
      },
    ],
  };

  const [activeType, setActiveType] = useState(""); // Track active partner type
  const [isMobile, setIsMobile] = useState(false); // Track if the device is mobile
  const sectionsRefs = useRef([]); // Store references to each section
  const stickyNavRef = useRef(null); // Reference to the sticky navigation

  // Update isMobile state when screen size changes
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 820); // Mobile view if width < 768px
    };

    window.addEventListener("resize", checkMobileView);
    checkMobileView(); // Check on initial load

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveType(entry.target.getAttribute("data-type")); // Update active type
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    sectionsRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollToSection = (type) => {
    const targetSection = sectionsRefs.current.find(
      (section) => section.getAttribute("data-type") === type
    );
    if (targetSection) {
      const stickyNavHeight = stickyNavRef.current?.offsetHeight || 0; // Get the height of the sticky nav
      const scrollOffset =
        targetSection.offsetTop - (stickyNavHeight + 56) - 20; // 20px additional margin to avoid too close scrolling

      window.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="p-4 dark:bg-gray-900">
      {/* Main Content */}
      <section className="container mx-auto lg:px-4 py-4 dark:text-gray-300 body-font">
        <div className="mx-auto">
          <div className="flex flex-wrap w-full mb-6 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 dark:text-white">
              Our Trusted Partners
            </h1>
            <p className="w-full leading-relaxed text-semibold text-opacity-80">
              We collaborate with a diverse range of partners to provide
              comprehensive support for your study and work visa needs. From
              financial institutions offering blocked accounts and money
              transfer services, to reliable electricity and internet providers,
              our partners are carefully selected to ensure you have access to
              the best resources. Explore our trusted partners and discover how
              they can help you achieve your goals.
            </p>
          </div>

          {/* Top Navigation */}
          <div
            ref={stickyNavRef}
            className="sticky top-[49px] lg:top-[60px] bg-white dark:bg-gray-900 z-10 p-4 mb-4 shadow-md"
          >
            {isMobile ? (
              // Mobile View: Dropdown Menu
              <div className="flex justify-center">
                <select
                  className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                  value={activeType}
                  onChange={(e) => {
                    setActiveType(e.target.value);
                    handleScrollToSection(e.target.value); // Scroll to selected section
                  }}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {Object.keys(partners).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              // Desktop View: Tab Buttons
              <div className="flex justify-center gap-4">
                {Object.keys(partners).map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded ${
                      activeType === type
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                    onClick={() => handleScrollToSection(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap flex-col lg:m-4">
            {Object.entries(partners).map(([type, services], index) => (
              <div
                key={type}
                ref={(el) => (sectionsRefs.current[index] = el)} // Add ref to section
                data-type={type}
                className="partner-section mb-8 border border-gray-400 dark:border-gray-700 py-6 rounded-lg lg:px-4 dark:bg-gray-800 shadow-lg"
              >
                <h2 className="text-2xl lg:text-3xl text-primary dark:text-white text-center font-bold title-font mb-4">
                  {type}
                </h2>
                <div className="service-cards px-2 flex flex-wrap justify-center items-center gap-4">
                  {services.map(
                    ({ name, btn_label, url, Icon, icon_svg }, idx) => (
                      <div
                        key={idx}
                        className="card border-2 border-transparent hover:border-blue-600 rounded-lg overflow-hidden w-42 h-42 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="p-6 flex flex-col justify-between items-center h-full">
                          {Icon && <Icon />}
                          {icon_svg && (
                            <Image
                              src={icon_svg}
                              width={50}
                              height={50}
                              className="stroke-white fill-white dark:stroke-black dark:fill-black"
                            />
                          )}

                          <h3 className="card-title mt-2 text-lg font-medium text-center mb-4 text-primary dark:text-gray-100">
                            {name}
                          </h3>
                          <Link
                            href={url}
                            target="_blank"
                            className="btn btn-primary bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300 w-[165px] lg:w-[150px] text-center"
                          >
                            {btn_label}
                          </Link>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
