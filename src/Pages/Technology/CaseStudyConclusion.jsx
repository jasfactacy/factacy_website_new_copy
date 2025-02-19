import React from "react";

const CaseStudyConclusion = ({ data}) => {
  return (
    <div className="flex flex-col mt-8 gap-1" >
      <a id="conclusion" className="font-bold text-xl">
        Conclusion
      </a>
      <p className="text-sm text-gray-600">{data?.description}</p>
    </div>
  );
};

export default CaseStudyConclusion;