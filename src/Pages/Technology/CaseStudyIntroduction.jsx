import React from "react";

const CaseStudyIntroduction = ({ data}) => {
  return (
    <>

      {data && (
        <div className="flex flex-col gap-1">
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

