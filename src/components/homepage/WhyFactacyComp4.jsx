import React from 'react';
import videoBg from "../../assets/Future_AI.mp4"; // Add your video file path here

const Component1 = () => (
  <div className="relative h-screen flex items-center md:justify-start lg:justify-start xl:justify-start md:p-4 sm:justify-center sm:items-center ">
    {/* Video Background */}
        <div className="absolute sm:w-[98%] sm:h-[85%] sm:top-2 md:w-[98%] md:h-[85%] md:top-2 lg:w-[98%] lg:h-[85%] lg:top-2 xl:w-[98%] xl:h-[90%] xl:top-2 object-cover z-0 rounded-3xl">
          <video
            autoPlay
            loop
            muted
            className="sm:h-[47rem] md:w-[60rem] md:h-[30rem] lg:w-[60rem] lg:h-[30rem] xl:w-[95rem] xl:h-[50rem] mx-auto object-cover rounded-3xl"
          >
            <source src={videoBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 sm:h-[105%] md:h-[97%] xl:h-full sm:left-0 sm:w-full md:left-[11.25%] md:w-[77.5%] xl:left-[9.25%] xl:w-[81.5%]  bg-white/50 rounded-3xl"></div>
          </div>

    {/* Text Content */}
    <div className="relative z-10 md:text-black w-1/2 md:ml-[10rem] lg:ml-[10rem] xl:ml-[12rem] lg:bottom-6 xl:bottom-12">
      <h3 className="text-5xl font-bold mb-16">Future-Ready AI Tools</h3>
      <p className="text-xl">Scalable systems that evolve with your business, ensuring you stay ahead of the competition.</p>
    </div>

  </div>
);

export default Component1;

