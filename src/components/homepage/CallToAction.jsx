import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext.jsx"; 


const CallToAction = () => {
  const content = [
    {
      type: "sectionTitle",
      text: "Call-to-Action Banner",
    },
    {
      type: "mainHeading",
      text: "Ready to Transform Your Business with AI?",
    },
    {
      type: "paragraph",
      text: "Join businesses across industries transforming operations with Factacy AI. Let’s create scalable, future-ready AI solutions tailored to your needs.",
    },
  ];

  const navigate = useNavigate(); // Initialize useNavigate

  const handleMailClick = () => {
    window.location.href = "mailto:connect@factacy.ai";
  };

  const handleContactClick = () => {
    navigate("/contact"); // Redirect to the Contact page
  };

  const { openChatBot, setOpenChatBot } = useContext(ChatContext);
  
     const handleChatBotToggle = () => {
       setOpenChatBot((prev) => !prev); // Toggle chatbot visibility
     };

  return (
    <div className="py-16  lg:bg-gradient-to-b from-white to-[#E8F5FF]">
      <div className="container mx-auto px-4 text-center">
        

        {/* Headline and Description */}
        <h2 className="text-3xl font-bold mb-4">{content[1].text}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          {content[2].text}
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <button
              onClick={handleChatBotToggle}
              className="px-6 py-3 rounded-xl font-semibold text-white border-2 border-blue-500 transition-all duration-200 ease-in-out bg-buttonCTA"            >
              {openChatBot ? "Close Chat" : "Reach Us"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
