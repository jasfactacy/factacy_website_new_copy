import React from "react";
import factacy from "../../assets/factacy_logo.svg";
import one from "../../assets/CTO/1.svg"
import two from "../../assets/CTO/2.svg"
import three from "../../assets/CTO/3.svg"
import four from "../../assets/CTO/4.svg"
import five from "../../assets/CTO/5.svg"
import six from "../../assets/CTO/6.svg"


const WhyChooseUs = () => {
  const data = [
    {
      icon: one,
      heading: "Proven Expertise",
      text: "Over a decade of experience in scaling startups and handling technical issues.",
    },
    {
      icon: two,
      heading: "Custom Strategies",
      text: "Strategies customized to your business goals and budget.",
    },
    {
      icon: three,
      heading: "Flexible Engagement",
      text: "Options for full-time, part-time, or project-based support.",
    },
    {
      icon: four,
      heading: "Faster Time to Market",
      text: "Quick MVP launches and product updates.",
    },
    {
      icon: five,
      heading: "Competitive pricing",
      text: "Flexible pricing fits both startups and larger companies. ",
    },
    {
      icon: six,
      heading: "Personalized Team Support",
      text: "Mentoring for your tech team to enhance skills.",
    },
  ];
  return (
    <div className="min-h-[90vh] flex flex-col gap-20 items-center bg-gradient-to-b from-[#E8F5FF] to-white py-20 lg:px-32">
      <div className="flex items-center ">
        <img loading="lazy" src={factacy} className="w-12" />
        <p className="font-semibold text-2xl text-primaryBlue">
          Why Choose Us as Your Fractional CTO Partner?
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center w-full">
        {data?.map((item, i) => (
          <div className="w-3/5">
            <img loading="lazy" src={item.icon} className="w-16" />
            <p className="font-bold">{item.heading}:</p>
            <p className="">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
