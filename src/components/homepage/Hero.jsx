import React, { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeAnimation from "./HomeAnimation";
import HeroBG from "../../assets/heroBG.mp4";
import { ChatContext } from "../../context/ChatContext.jsx"; 


const Box = () => {
  return (
    <div className="flex items-center justify-center"></div>
  );
};

const Hero = () => {
  const [ref3, inView3] = useInView({
    triggerOnce: true, // Ensures animation happens once when the element comes into view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView3) {
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls2.start({ opacity: 0, y: 50 });
    }
  }, [controls2, inView3]);

  const handleMailClick = () => {
    window.location.href = "mailto:connect@factacy.ai";
  };

   const { openChatBot, setOpenChatBot } = useContext(ChatContext);

   const handleChatBotToggle = () => {
     setOpenChatBot((prev) => !prev); // Toggle chatbot visibility
   };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={HeroBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Translucent White Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/80 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <motion.div
        ref={ref3}
        className="relative flex w-full lg:flex-row items-center sm:pt-32 lg:pt-0 gap-3.5 sm:flex-col"
        initial={{ opacity: 0, y: 50 }} // Initial state before fade-in
        animate={controls2}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-column sm:pl-[15%] lg:pl-0 lg:ml-32 sm:w-full sm:mx-4 lg:w-4/5 items-center">
          <div className="flex-row w-full">
            <div className="mt-6">
              <Box />
            </div>
            <HomeAnimation />
            <p className="sm:ml-[-2.5rem] md:ml-0 lg:ml-0 xl:ml-0 sm:mt-[-8rem] md:mt-0 lg:mt-0 xl:mt-0 lg:text-xl sm:text-sm order-1 font-base leading-7 object-none tracking-tight text-black">
              Empowering Businesses with Smarter Decisions, Real-Time Analytics, and Future-Ready AI Platforms.
            </p>

            {/* Mail Us Button */}
            <button
              onClick={handleChatBotToggle}
              className="px-8 py-3 md:mt-4 sm:mt-4 md:ml-0 sm:ml-[-2.5rem] rounded-xl font-semibold text-white border-blue-500 transition-all duration-200 ease-in-out bg-primaryBlue"
            >
              {openChatBot ? "Close Chat" : "Start my AI journey"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


export default Hero;
