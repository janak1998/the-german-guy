"use client";
import Link from "next/link";
import React from "react";

const RingBtn = ({ btnText = "Let's Talk" }) => {
  return (
    <>
      <Link
        href="https://calendly.com/thegermanguys"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-[#6C63FF] hover:bg-[#5A52D1] rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out animate-ring">
          {btnText}
        </button>
      </Link>

      <style jsx>{`
        @keyframes ring {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.4);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 20px rgba(108, 99, 255, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(108, 99, 255, 0);
          }
        }
        .animate-ring {
          animation: ring 1.5s infinite;
        }
      `}</style>
    </>
  );
};

export default RingBtn;
