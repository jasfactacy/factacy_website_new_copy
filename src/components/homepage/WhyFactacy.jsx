import React, { useState, useRef, useEffect } from "react";
import WhyFactacyComp1 from "./WhyFactacyComp1";
import WhyFactacyComp2 from "./WhyFactacyComp2";
import WhyFactacyComp3 from "./WhyFactacyComp3";
import WhyFactacyComp4 from "./WhyFactacyComp4";

const WhyFactacy = () => {
  const components = [<WhyFactacyComp1 />, <WhyFactacyComp2 />, <WhyFactacyComp3 />, <WhyFactacyComp4 />, <></>];
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (sectionRef.current) {
      const { top: sectionTop, bottom: sectionBottom } =
        sectionRef.current.getBoundingClientRect();

      setIsSticky(sectionTop <= 0 && sectionBottom >= window.innerHeight);

      if (sectionTop <= 0 && sectionBottom >= 0) {
        // Calculate how far the user has scrolled inside the section
        const scrollPosition = window.scrollY - sectionRef.current.offsetTop;
        // Calculate index based on one full viewport height per component
        const index = Math.floor(scrollPosition / window.innerHeight);
        setActiveIndex(Math.min(Math.max(index, 0), components.length - 1));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        height: `${components.length * 100}vh`
      }}
      className="lg:bg-gradient-to-b from-[#E8F5FF] to-white h-[75rem]"
    >

      <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#2475BB" }}>Why Factacy?</h3>
        </div>

        <div style={{ marginBottom: "2.5rem", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "1rem", maxWidth: "64rem" }}>
            Partner with Factacy for Smarter Growth.
          </h2>
          <p style={{ textAlign: "center", color: "#4B5563", maxWidth: "64rem", margin: "0 auto" }}>
            We understand the complexities of scaling a business. That’s why our AI services are designed to deliver measurable results.<br /><br /> Here’s why businesses choose Factacy:
          </p>
        </div>
      </div>

      {/* Sticky Container when the section is in view */}
      <div
        style={{
          position: isSticky ? "fixed" : "relative",
          top: isSticky ? "75px" : "0px", // Adjust for navbar height if needed
          width: "100%",
          height: "calc(100vh - 75px)",
          transition: "0.3s ease-in-out",
          transform: isSticky ? "translateY(0)" : "translateY(100%)", 
        }}
        className="transition-opacity duration-1000 ease-in-out"
      >
        {components.map((Component, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transition: "transform 0.5s ease-in-out",             
              zIndex: index,
              transform: index <= activeIndex ? "translateY(0)" : "translateY(100%)",
            }}
          >
            {Component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyFactacy;
