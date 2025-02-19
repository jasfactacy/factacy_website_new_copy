import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import healthCare from "../../assets/healthCare.jpg";
import finance from "../../assets/finance.jpg";
import retail from "../../assets/retail.jpg";
import technology from "../../assets/technology.jpg";

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 110%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1500px; /* 3D perspective */
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  position: relative;
  width: 14rem; /* Increased size for better visual separation */
  height: 23rem;
  transform-style: preserve-3d; /* 3D effect */
  transform: rotateX(-10deg); /* Initial rotation for effect */
  transition: transform 1s ease-in-out; /* Smooth rotation */
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Updated face positions for Octagon */
  &:nth-child(1) {
    transform: rotateY(0deg) translateZ(18rem); /* Front face */
  }
  &:nth-child(2) {
    transform: rotateY(45deg) translateZ(18rem); /* Front-Right face */
  }
  &:nth-child(3) {
    transform: rotateY(90deg) translateZ(18rem); /* Right face */
  }
  &:nth-child(4) {
    transform: rotateY(135deg) translateZ(18rem); /* Back-Right face */
  }
  &:nth-child(5) {
    transform: rotateY(180deg) translateZ(18rem); /* Back face */
  }
  &:nth-child(6) {
    transform: rotateY(225deg) translateZ(18rem); /* Back-Left face */
  }
  &:nth-child(7) {
    transform: rotateY(270deg) translateZ(18rem); /* Left face */
  }
  &:nth-child(8) {
    transform: rotateY(315deg) translateZ(18rem); /* Front-Left face */
  }
`;

const CardImage = styled.img`
  width: 90%; 
  height: auto; 
  border-radius: 1rem;
  object-fit: cover;
  margin: 1rem auto;
  display: block; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
`;

const cards = [
  {
    title: "Healthcare",
    description: "Revolutionizing Patient Care",
    details: "Use predictive AI technology to enhance diagnosis accuracy, streamline workflows, and improve patient outcomes",
    image: healthCare,
  },
  {
    title: "Finance",
    description: "Smarter Risk Management",
    details: "Automate fraud detection, optimize financial forecasting, and simplify compliance with advanced AI software",
    image: finance,
  },
  {
    title: "Retail",
    description: "Personalized Shopping Experiences",
    details: "Boost engagement with AI tools for personalized recommendations, dynamic pricing, and inventory optimization",
    image: retail,
  },
  {
    title: "Technology",
    description: "Driving Innovation Forward",
    details: "Power innovation with advanced machine learning, agentic AI, and IoT analytics",
    image: technology,
  },
  {
    title: "Healthcare",
    description: "Revolutionizing Patient Care",
    details: "Use predictive AI technology to enhance diagnosis accuracy, streamline workflows, and improve patient outcomes",
    image: healthCare,
  },
  {
    title: "Finance",
    description: "Smarter Risk Management",
    details: "Automate fraud detection, optimize financial forecasting, and simplify compliance with advanced AI software",
    image: finance,
  },
  {
    title: "Retail",
    description: "Personalized Shopping Experiences",
    details: "Boost engagement with AI tools for personalized recommendations, dynamic pricing, and inventory optimization",
    image: retail,
  },
  {
    title: "Technology",
    description: "Driving Innovation Forward",
    details: "Power innovation with advanced machine learning, agentic AI, and IoT analytics",
    image: technology,
  },
];

const IndustriesCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track if animation is paused
  const touchStartRef = useRef(0); // Store the initial touch position
  const intervalRef = useRef(null); // Store the interval ID

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2500);
  };

  const stopAnimation = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isPaused) {
      startAnimation(); // Start interval when not paused
    } else {
      stopAnimation(); // Stop interval when paused
    }

    // Clean up on component unmount or when interval is paused
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX; // Store the initial touch position
    setIsPaused(true); // Pause the animation when touch starts
  };

  const handleTouchMove = (e) => {
    const touchEnd = e.touches[0].clientX; // Get the current touch position
    const touchDifference = touchStartRef.current - touchEnd;

    if (touchDifference > 50) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length); // Swipe right to left
      touchStartRef.current = touchEnd; // Reset touch position
    } else if (touchDifference < -50) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); // Swipe left to right
      touchStartRef.current = touchEnd; // Reset touch position
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsPaused(false); // Resume animation
    }, 5000); // 5 seconds delay
  };

  return (
    <div className="relative ">
      <CardsContainer className="w-[50%] md:mx-[-2.5rem] lg:mx-[-2rem] xl:mx-[-4rem]">
        <CardWrapper
          style={{
            transform: `rotateY(${activeIndex * -45}deg)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <Card key={index} className="relative w-full h-[25rem] rounded-lg shadow-lg bg-white">
              <CardImage
                src={card.image}
                alt={card.title}
                className="w-full h-[60%] rounded-t-lg object-cover"
              />
              <div className="p-4 flex flex-col justify-start items-start flex-grow">
                <h2 className="text-xl font-bold text-left mb-1">{card.title}</h2>
                <p className="text-md text-left text-gray-1000 mb-2">{card.description}</p>
                <p className="text-xs text-left text-gray-700 mb-2">{card.details}</p>
              </div>
            </Card>
          ))}
        </CardWrapper>
      </CardsContainer>
    </div>
  );
};

export default IndustriesCards;
