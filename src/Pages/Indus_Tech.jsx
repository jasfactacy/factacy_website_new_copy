import React from "react";
import Industries from "../Pages/Industries/Industries";
import Technology from "../Pages/Technology/Technology";
import { useParams, useLocation } from "react-router-dom";
import { IndustriesData } from "../data/Industries";
const Indus_Tech = () => {
  // const { title } = useParams();
  // const isIndustry = title.includes("industry");
  const { state } = useLocation();
  const isIndustry = state?.from === "Technology_Solutions" ? false : true;
  console.log(state);

  return (
    <>
      {isIndustry ? (
        <Industries IndustriesData={IndustriesData} />
      ) : (
        <Technology />
      )}
    </>
  );
};

export default Indus_Tech;
