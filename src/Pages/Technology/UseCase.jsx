import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useCaseSvgs } from "../../data/IndustriesUseCaseSvgs";

const UseCaseItem = ({ data, Svg, bg_class }) => (
  <div
    className={`flex flex-col sm:w-full lg:w-5/12 rounded-2xl ${bg_class} p-6 `}
    style={{
      boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.06)",
    }}
  >
    <Svg />
    <p className="font-bold mt-3">{data?.title}</p>
    {typeof data?.description === "string" && (
      <p className="text-xs text-gray-600">{data?.description}</p>
    )}
    {Array.isArray(data?.description) && (
      <div>
        {data?.description?.map((item, index) => (
          <>
            <p className="text-xs text-gray-600 my-2" key={index}>
              <span className="font-bold mt-3">{item?.title}:  </span>
              {item?.description}
            </p>
          </>
        ))}
      </div>
    )}
  </div>
);

const UseCase = ({ data }) => {
  if (!data) return null
  const { list } = data;
  return (
    <>
      <div className="flex flex-col gap-8 items-center sm:mt-4 lg:-mt-10">
        <SectionTitle text={"USE CASES"} />
        {data && (
          <div className="flex flex-col gap-8 items-center ">
            <p className="text-4xl font-bold lg:-mt-8 lg:mb-3 lg:w-1/2 text-center">
              {data?.title}
            </p>

            {list[0]?.title && (
              <UseCaseItem
                data={list[0]}
                Svg={useCaseSvgs[0]}
                bg_class={"bg-[#FFECEC]"}
              />
            )}

            <div className="flex sm:flex-col lg:flex-row gap-12 lg:justify-center sm:items-center">
              {list[1]?.title && (
                <UseCaseItem
                  data={list[1]}
                  Svg={useCaseSvgs[1]}
                  bg_class={"bg-[#E4FFEB]"}
                />
              )}

              {list[2]?.title && (
                <UseCaseItem
                  data={list[2]}
                  Svg={useCaseSvgs[2]}
                  bg_class={"bg-yellow"}
                />
              )}
            </div>

            {list[3]?.title && (
              <UseCaseItem
                data={list[3]}
                Svg={useCaseSvgs[3]}
                bg_class={"bg-[#E8F5FF]"}
              />
            )}

            <div className="flex sm:flex-col lg:flex-row gap-12 lg:justify-center sm:items-center">
              {list[4]?.title && (
                <UseCaseItem
                  data={list[4]}
                  Svg={useCaseSvgs[4]}
                  bg_class={"bg-purple"}
                />
              )}

              {list[5]?.title && (
                <UseCaseItem
                  data={list[5]}
                  Svg={useCaseSvgs[5]}
                  bg_class={"bg-[#FFECEC]"}
                />
              )}
            </div>

            {list[6]?.title && (
              <UseCaseItem
                data={list[6]}
                Svg={useCaseSvgs[6]}
                bg_class={"bg-yellow"}
              />
            )}

            <div className="flex sm:flex-col lg:flex-row gap-12 lg:justify-center sm:items-center">
              {list[7]?.title && (
                <UseCaseItem
                  data={list[7]}
                  Svg={useCaseSvgs[7]}
                  bg_class={"bg-purple"}
                />
              )}

              {list[8] && (
                <UseCaseItem
                  data={list[8]}
                  Svg={useCaseSvgs[8]}
                  bg_class={"bg-[#E4FFEB]"}
                />
              )}
            </div>

            {list[9] && (
              <UseCaseItem
                data={list[9]}
                Svg={useCaseSvgs[9]}
                bg_class={"bg-[#E8F5FF]"}
              />
            )}
          </div>
        )}
      </div>
      <div className="flex sm:flex-col lg:flex-row gap-4 justify-center mt-8 lg:w-full">
        <a
          href="mailto:connect@factacy.ai"
          target="_blank"
          className="bg-buttonCTA px-8 py-4 rounded-full text-white border-2 border-buttonCTA"
        >
          Get Started with Factacy
        </a>
        <a
          href="mailto:connect@factacy.ai"
          className="border-2 text-center border-black px-8 py-4  rounded-full hover:bg-black hover:text-white"
        >
          <span className=" sm:mx-auto lg:mx-0">Chat With Us </span>
        </a>
      </div>
    </>
  );
};

export default UseCase;
