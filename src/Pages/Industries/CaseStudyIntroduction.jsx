import React from "react";

const CaseStudyIntroduction = ({ data}) => {
  return (
    <>
      <div>
        <p className="text-3xl font-bold">
          Leveraging AI to enhance route planning, improve demand prediction,
          and enable seamless supply chain operations
        </p>
      </div>
      {data && (
        <div className="flex flex-col mt-8 gap-1">
          <a id="introduction" className="font-bold text-xl ">
            Introduction
          </a>
          <p className="text-sm text-gray-600">{data?.description}</p>
        </div>
      )}
    </>
  );
};

export default CaseStudyIntroduction;
