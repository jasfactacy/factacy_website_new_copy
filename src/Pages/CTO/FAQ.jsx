import React, { useState } from "react";
import { FAQs } from "../../utils/CTO_FAQ";
import factacy from "../../assets/factacy_logo.svg";

import FAQItem from "./FAQItem";

const FAQsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { list, title } = FAQs;

  return (
    <div className=" min-h-screen bg-gradient-to-b from-[#E8F5FF] to-white flex flex-col items-center gap-8">
      <div className="flex items-center ">
        <img loading="lazy" src={factacy} className="w-12" />
        <p className="font-semibold text-2xl text-primaryBlue">
        Frequently Asked Questions
        </p>
      </div>
      <div className=" mt-6 mb-12 flex flex-col items-center gap-8 lg:px-16">
        {list.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQsComponent;
