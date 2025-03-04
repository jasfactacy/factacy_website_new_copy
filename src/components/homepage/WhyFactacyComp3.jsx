import React from 'react';
import videoBg from "../../assets/Factacy_AOT.mp4"; // Add your video file path here

const Component1 = () => (
  <div className="relative h-screen flex items-center md:justify-start lg:justify-start xl:justify-start md:p-4 sm:justify-center sm:items-center ">
    {/* Video Background */}
    <div className="absolute sm:w-[98%] sm:h-[85%] sm:top-2 md:w-[98%] md:h-[85%] md:top-2 lg:w-[98%] lg:h-[85%] lg:top-2 xl:w-full xl:h-full xl:right-1 xl:top-2 object-cover z-0 rounded-3xl">
      <video
        autoPlay
        loop
        muted
        className="w-full h-[85vh] max-w-[118rem] mx-auto object-cover rounded-3xl"
        >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-white/50 rounded-3xl"></div>
      </div>
    {/* Text Content */}
    <div className="relative z-10 text-black w-1/2 ml-5 lg:bottom-6 xl:bottom-12">
      <h3 className="text-5xl font-bold mb-16">Real-Time IoT Insights</h3>
      <p className="text-xl">Transform data from interconnected devices into actionable intelligence with our Analytics of Things solutions.</p>
    </div>

  </div>
);

export default Component1;

