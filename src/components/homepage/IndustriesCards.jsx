import React from "react";
import healthCare from "../../assets/healthCare.jpg";
import finance from "../../assets/finance.jpg";
import retail from "../../assets/retail.jpg";
import technology from "../../assets/technology.jpg";

const IndustriesCards = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Revolutionizing Patient Care",
      details:
        "Use predictive AI technology to enhance diagnosis accuracy, streamline workflows, and improve patient outcomes",
      image: healthCare,
    },
    {
      title: "Finance",
      description: "Smarter Risk Management",
      details:
        "Automate fraud detection, optimize financial forecasting, and simplify compliance with advanced AI software",
      image: finance,
    },
    {
      title: "Retail",
      description: "Personalized Shopping Experiences",
      details:
        "Boost engagement with AI for personalized recommendations, dynamic pricing, and inventory optimization",
      image: retail,
    },
    {
      title: "Technology",
      description: "Driving Innovation Forward",
      details:
        "Power innovation with advanced machine learning, agentic AI, and IoT analytics",
      image: technology,
    },
  ];

  return (
    <div className="w-[165%] max-w-[165vw] flex flex-col overflow-hidden relative px-4 ml-[-32.5%] bg-cover bg-center">
      {/* Card Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 w-full overflow-x-auto">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-md w-64 h-60 p-6 text-center overflow-hidden transition-all duration-300 ease-in-out"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundImage: `url(${industry.image})` }}
            ></div>
            {/* Translucent White Overlay */}
            <div
              className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            ></div>
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2 text-primaryBlue">
                {industry.title}
              </h3>
              {/* Thin line below h3 */}
              <div className="w-[13rem] border-b border-gray-800"></div>
              <p className="text-md font-semibold text-gray-800">
                {industry.description}
              </p>
              {/* Thin line below h3 */}
              <div className="w-[13rem] border-b border-gray-800 mb-4"></div>
              <p className="text-sm text-gray-700 font-medium mt-2 italic">
                {industry.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => navigate(SOLUTIONS_PAGE)}
      >
        <p className="text-center text-sm font-semibold hover:text-primaryBlue mt-6">
          Explore all industries
        </p>
      </div>
    </div>
  );
};

export default IndustriesCards;
