import React from "react";
import Hero from "./Hero";
import Cto_as_a_service from "./Cto_as_a_service";
import WhyChooseUs from "./WhyChooseUs";
import TechStack from "./TechStack";
import FAQsComponent from "./FAQ";

const Cto = () => {
  return (
    <div className="">
        <Hero />
        <Cto_as_a_service />
        <WhyChooseUs />
        <TechStack />
        <FAQsComponent />
    </div>
  );
};

export default Cto;
