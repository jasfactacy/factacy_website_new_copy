import React from "react";

const CaseStudyImplemention = ({ data}) => {

  return (
    <div className="flex flex-col mt-24 gap-1">
      <a id="implementation" className="font-bold text-xl">
        {data?.text}
      </a>

      <div className="pt-5">
        <p className="text-sm text-gray-600">
          {data?.description}
        </p>
        {/* <ol className="list-decimal">
          {data?.description?.Implementation?.Points?.map((point, index) => (
            <li className="text-xs pt-2 relative left-3" key={index}>
              <h3 className="text-sm">
                <b>{point?.Title}</b>
                <b className=" pl-1 pr-2">{":"}</b>
                <p className="text-sm text-gray-600 inline">
                  {point?.Description}
                </p>
              </h3>
            </li>
          ))}
        </ol> */}
      </div>
    </div>
  );
};

export default CaseStudyImplemention;