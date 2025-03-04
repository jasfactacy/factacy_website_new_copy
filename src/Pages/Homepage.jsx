import React from "react";
import { motion } from "framer-motion";

import LogoCarousel from "../components/homepage/LogoCarousel.jsx";
import Hero from "../components/homepage/Hero.jsx";
import Services from "../components/homepage/Services.jsx";
import WhyFactacy from "../components/homepage/WhyFactacy.jsx";
import Industries from "../components/homepage/Industries.jsx";
import Success from "../components/homepage/SuccessStories.jsx";
import CallToAction from "../components/homepage/CallToAction.jsx";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <LogoCarousel />
      </motion.div>

      {/* Services Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Services />
      </motion.div>

      {/* Why Factacy Section */}
      <WhyFactacy />

      {/* Industries We Serve */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Industries />
      </motion.div>

      {/* Success Stories */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Success />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CallToAction />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
