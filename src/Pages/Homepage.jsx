import React from "react";
import { motion } from "framer-motion";

import LogoCarousel from "../components/homepage/LogoCarousel.jsx";
import Hero from "../components/homepage/Hero.jsx";
import Services from "../components/homepage/Services.jsx";
import WhyFactacy from "../components/homepage/WhyFactacy.jsx";
import Industries from "../components/homepage/Industries.jsx";
import Success from "../components/homepage/SuccessStories.jsx";
// import Resources from "../components/homepage/ResourcesAndInsights.jsx.jsx";
import CallToAction from "../components/homepage/CallToAction.jsx";


const Homepage = () => {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {/* Hero Section */} 
      <Hero />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Services Section */}
      <Services />

      {/* Why Factacy Section */}
      <WhyFactacy />

      {/* Idustries we serve */}
      <Industries />

      {/* Success Stories */}
      <Success />

      {/* Call to Action */}
      <CallToAction />


    </motion.div>
  );
};

export default Homepage;
