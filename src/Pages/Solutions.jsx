import React, { useEffect, useRef } from "react";
import { SoultionIcons } from '../data/icons_list';
import { IndustriesData } from "../data/Industries";
import Industry from "./Industries/Industry";
import { technology } from "../data/technology";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";


const SVG = ({ Icon }) => {

  return (
    < Icon />
  );
}

const Solutions = () => {

  const Navigate = useNavigate();
  const { state } = useLocation();
  const technologySection = useRef();

  useEffect(() => {
    if (state?.from === "Technology") {
      // technologySection.current.scrollIntoView({ behavior: "smooth" });
    }
    else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="pt-24 pb-16 px-2 lg:px-20 flex flex-col justify-center"
    >
      <div className="flex flex-wrap gap-5 justify-center">
        {IndustriesData.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
        }).map((industry) => (
          <Industry industry={industry} key={industry.id} />
        ))}
      </div>


      <div ref={technologySection} id="technology" className=" mt-16">
        <h1 className=" text-4xl lg:text-6xl font-bold">Technological Solutions</h1>
        <div className=" mt-8 flex flex-wrap gap-6 w-fit">
          {technology.map((item, index) => (
            <div
              key={index}
              className="bg-white font-roboto max-w-[10rem] h-40 border p-4 flex flex-col items-start justify-between rounded-xl overflow-hidden relative cursor-pointer shadow group"
              onClick={() => (item.url ? Navigate(`/solutions/${item.url}`, { state: { from: "Technology_Solutions" } }) : "")}
            >
              <SVG Icon={SoultionIcons[index]} />
              <div className="h-2/5">
                <p className="text-sm font-medium text-black duration-200 w-full bg-gradient-to-b from-white to-transparent backdrop-blur">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Solutions;