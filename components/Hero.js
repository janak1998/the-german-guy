"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import scrollToSectionUtil from "@/utils/scrollToSectionUtil";
const Hero = () => {
  // State to trigger animation reset
  const [animate, setAnimate] = React.useState(false);

  // Handler to trigger animation
  const handleMouseEnter = () => {
    setAnimate(false); // reset
    setTimeout(() => setAnimate(true), 10); // trigger
  };

  return (
    <section
      id="hero"
      className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 justify-center items-center flex flex-col-reverse lg:flex-row gap-5 lg:mt-[80px]"
    >
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8 flex flex-col gap-8 justify-center items-center lg:items-start">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 lg:text-4xl font-bold">
          You Decide, We Support
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 mb-9 max-w-[650px]">
          Starting your journey to Germany can feel daunting. At{" "}
          <b>TGG (The German Guy)</b>, we're here to make it easier for both
          students and professionals. From crafting resumes to navigating
          university and job applications, our dedicated team supports you every
          step of the way, ensuring a smooth and successful transition.
        </p>
        <div className="btn_wrapper flex flex-wrap gap-10 justify-center">
          <Button
            size="elg"
            className="text-xl max-w-[500px]  font-semibold w-full lg:w-fit relative overflow-hidden"
            onClick={() => scrollToSectionUtil("guide", 50)}
            onMouseEnter={handleMouseEnter}
            onAnimationEnd={() => setAnimate(false)}
          >
            Start Your Journey
            <span
              className={`inline-block ml-2 transition-transform ${
                animate ? "plane-fly" : ""
              }`}
              style={{ willChange: "transform" }}
            >
              <svg
                className="stroke-white fill-white dark:stroke-black dark:fill-black"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="rgba(0,0,0,0)"
              >
                <path d="M3.414 13.778 2 15.192l4.949 2.121 2.122 4.95 1.414-1.414-.707-3.536L13.091 14l3.61 7.704 1.339-1.339-1.19-10.123 2.828-2.829a2 2 0 1 0-2.828-2.828l-2.903 2.903L3.824 6.297 2.559 7.563l7.644 3.67-3.253 3.253-3.536-.708z"></path>
              </svg>
            </span>
            <style jsx>{`
              .plane-fly {
                animation: plane-fly-anim 0.8s cubic-bezier(0.4, 0, 0.2, 1);
              }

              @keyframes plane-fly-anim {
                0% {
                  transform: translate(0, 0) scale(1) rotate(0deg);
                  opacity: 1;
                }
                60% {
                  transform: translate(60px, -40px) scale(1.2) rotate(10deg);
                  opacity: 1;
                }
                100% {
                  transform: translate(120px, -80px) scale(0.8) rotate(-10deg);
                  opacity: 0;
                }
              }
            `}</style>
          </Button>
          <Link
            href="https://calendly.com/thegermanguys"
            target="_blank"
            className="block lg:flex w-full lg:w-fit max-w-[500px] min-w-[288px]"
          >
            <Button size="elg" className="text-xl font-medium w-full group">
              Get a Free Session
              <svg
                className="hidden lg:inline-flex ml-2  stroke-white fill-white dark:stroke-black dark:fill-black"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="rgba(0,0,0,0)"
              >
                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-3/4 mt-4 lg:mt-0 lg:w-[500px]">
        <Image
          src="/assets/hero-img.webp"
          alt="The Hero Image"
          width={400}
          height={400}
          priority={true}
          placeholder="empty"
          className="mx-auto rounded-2xl shadow-lg ring_effect transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
