"use client";
import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-4 bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
    >
      <svg
        className="stroke-white fill-white dark:stroke-black dark:fill-black"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="rgba(0,0,0,0)"
      >
        <path d="M5 15h4v6h6v-6h4l-7-8zM4 3h16v2H4z"></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
