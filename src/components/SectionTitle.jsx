import React from "react";

const SectionTitle = ({ text, classes }) => {
  return (
    <div className={`flex flex-row h-6 ${classes ? classes : ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        className="w-8 h-6"
      >
        <rect
          x="2.17175"
          y="12.3606"
          width="8.15666"
          height="4"
          fill="#3E91EE"
        />
        <rect
          x="2.17175"
          y="4.3606"
          width="15.6566"
          height="4"
          fill="#3E91EE"
        />
      </svg>
      <span className="font-semibold text-base text-primaryBlue uppercase">
        {text}
      </span>
    </div>
  );
};

export default SectionTitle;
