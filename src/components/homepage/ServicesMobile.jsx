import React, { useContext } from "react";
import img1 from "../../assets/Factacy_Agentic_AI.jpg";
import img2 from "../../assets/Factacy_AI_as_a_service.jpg";
import img3 from "../../assets/Factacy_Analytics_of_things.jpg";
import { useNavigate } from "react-router-dom";
import { SOLUTIONS_PAGE } from "../../Routes/routesConstents";
import { ChatContext } from "../../context/ChatContext.jsx";

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

const ServicesMobile = () => {
    const navigate = useNavigate();
    const { openChatBot, setOpenChatBot } = useContext(ChatContext);

    const handleChatBotToggle = () => {
        setOpenChatBot((prev) => !prev); // Toggle chatbot visibility
    };

    return (
        <div className=" py-10 px-4">
            <div className="container mx-auto">
                {/* Features Section */}
                <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-[#2475BB]">What we offer</h3>
                </div>

                {/* Reason Section */}
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold mb-3">{serviceData.reason.heading}</h2>
                    <p className="text-gray-600">{serviceData.reason.description}</p>
                </div>

                {/* Services Section - Mobile Friendly */}
                <div className="space-y-8 flex flex-wrap w-[120%] -ml-[1.5rem]">
                {serviceData.services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden w-96" // Adjust width here
                        >
                            {/* Image at the Top */}
                            <div className="relative w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute top-0 left-0 w-full h-48 bg-white/30 z-10"></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <ul className="list-disc pl-5 text-gray-700 mb-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                <button
                                    onClick={handleChatBotToggle}
                                    className="w-full px-6 py-3 rounded-lg text-white font-semibold bg-primaryBlue"
                                >
                                    {openChatBot ? "Close Chat" : "Get Started"}
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Explore Services Link */}
                    <div
                        className="text-center ml-[5.25rem] cursor-pointer mt-4"
                        onClick={() => navigate(SOLUTIONS_PAGE)}
                    >
                        <p className="text-sm font-semibold hover:text-primaryBlue">
                            Explore all services
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesMobile;