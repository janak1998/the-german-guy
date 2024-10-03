"use client";
import React, { useRef } from "react";

const Test = () => {
  const targetRef = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault();
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <a href="#target-element" onClick={handleScroll} className="scroll-link">
        Scroll to Target
      </a>
      <div style={{ height: "150vh" }}>
        {" "}
        {/* Just to create some space for scrolling */}
        Scroll down to see the target element.
      </div>
      <div ref={targetRef} id="target-element" className="target-element">
        Target Element
      </div>
      <div style={{ height: "150vh" }}></div>
      <div style={{ height: "150vh" }}></div>
      <div style={{ height: "150vh" }}></div>
    </div>
  );
};

export default Test;
