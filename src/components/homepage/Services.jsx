import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { SOLUTIONS_PAGE } from '../../Routes/routesConstents';
import { ChatContext } from "../../context/ChatContext.jsx";
import ServicesMobile from "./ServicesMobile.jsx"; // Import the mobile version

import img1 from "../../assets/Factacy_Agentic_AI.jpg";
import img2 from "../../assets/Factacy_AI_as_a_service.jpg";
import img3 from "../../assets/Factacy_Analytics_of_things.jpg";

const serviceData = {
    reason: {
        heading: "AI solutions built to transform your business.",
        description:
            "At Factacy AI, we specialize in delivering intelligent, scalable AI platforms tailored to your unique challenges. Our services enable real-time insights, smarter decisions, and long-term success.",
    },
    services: [
        {
            title: "Agentic AI Solutions",
            features: [
                "AI That Thinks and Adapts for You.",
                "Our agentic AI technology goes beyond automation, delivering systems that learn, evolve, and make intelligent decisions.",
            ],
            image: img1,
        },
        {
            title: "AI as a Service",
            features: [
                "Custom AI Tools, Ready to Scale.",
                "Leverage our flexible AI platforms to integrate advanced capabilities into your business and achieve immediate results.",
            ],
            image: img2,
        },
        {
            title: "Analytics of Things",
            features: [
                "Harness IoT Data to Drive Smarter Decisions.",
                "Unlock the potential of real-time IoT analytics to optimize operations, enhance customer experiences, and transform outcomes.",
            ],
            image: img3,
        },
    ],
};

const Services = () => {
    const navigate = useNavigate();
    const { openChatBot, setOpenChatBot } = useContext(ChatContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Effect to update isMobile on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return <ServicesMobile />; // Render mobile version if screen width < 768px
    }

    return (
        <div className="lg:bg-gradient-to-b from-white to-[#E8F5FF] py-[5rem] ">
            <div className="container mx-auto px-1">
                {/* Features Section */}
                <div className="text-center mb-2">
                    <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#2475BB" }}>What we offer</h3>
                </div>

                {/* Reason Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-4 max-w-4xl mx-auto">
                        {serviceData.reason.heading}
                    </h2>
                    <p className="text-center text-gray-600 max-w-4xl mx-auto">
                        {serviceData.reason.description}
                    </p>
                </div>

                {/* Services Section */}
                <div className="space-y-8">
                    {serviceData.services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } items-stretch gap-4 max-w-4xl mx-auto`}
                        >
                            {/* Card Content */}
                            <div className="p-5  rounded-lg shadow-md flex-1 relative bg-white">
                                <h3 className="text-xl font-semibold mb-4 mt-3">{service.title}</h3>
                                <ul className="list-disc pl-5 text-gray-700">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                {/* Chatbot Toggle Button */}
                                <button
                                    onClick={() => setOpenChatBot((prev) => !prev)}
                                    className="px-8 py-3 md:mt-4 sm:mt-4 md:ml-0 sm:ml-[1.25rem] rounded-xl font-semibold text-white border-blue-500 transition-all duration-200 ease-in-out bg-primaryBlue"
                                >
                                    {openChatBot ? "Close Chat" : "Get Started"}
                                </button>
                            </div>

                            {/* Image */}
                            <div className="flex-1 relative">
                                <img loading="lazy"
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-lg shadow-sm"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-white/30 z-0"></div>
                            </div>
                        </div>
                    ))}
                    <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => navigate(SOLUTIONS_PAGE)}
                    >
                        <p className="text-center text-sm font-semibold hover:text-primaryBlue">
                            Explore all services
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
