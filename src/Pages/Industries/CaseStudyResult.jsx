import React from "react";

const CaseStudyResult = ({ data}) => {
  return (
    <div className="flex flex-col mt-12">
      <a id="result" className="font-bold text-xl">
        Results
      </a>

      <div className="pt-5">
        <p className="text-sm text-gray-600">
          {data?.description["Results"]["Approach"]}
        </p>
        {data?.description["Results"]["Points"].map(
          (point, index) => (
            <div key={index}
              className="bg-white p-4 flex gap-2 my-4 rounded-lg"
              style={{
                boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.06)",
              }}
            >
              <svg
                width="21"
                height="23"
                viewBox="0 0 21 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2454 20.7482C6.64307 20.7482 2.91211 17.0172 2.91211 12.4149C2.91211 7.8125 6.64307 4.08154 11.2454 4.08154C15.8478 4.08154 19.5788 7.8125 19.5788 12.4149C19.5788 17.0172 15.8478 20.7482 11.2454 20.7482ZM10.4143 15.7482L16.3069 9.85565L15.1284 8.67714L10.4143 13.3912L8.05728 11.0341L6.87877 12.2127L10.4143 15.7482Z"
                  fill="#3E91EE"
                />
              </svg>
              <h3 className="text-sm">
                <b>{point?.Title}</b>
                <b className=" pl-1 pr-2">{":-"}</b>
                <p className="text-sm text-gray-600 inline">
                  {point?.Description}
                </p>
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CaseStudyResult;
