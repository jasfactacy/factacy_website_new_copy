import React from "react";
import svg from "../../assets/CTO/heroSvg.svg";
import triangles from "../../assets/CTO/triangles.svg"

const Hero = () => {
  return (
    <div className="min-h-screen py-12 flex items-center justify-evenly gap-12 flex-col-reverse lg:flex-row xxl:container lg:px-32">
      <div className="flex flex-col gap-8 relative">
        <img loading="lazy" src={triangles} className="absolute w-40 right-0" />
        <p className="text-[40px] font-[1000]">
          CTO Expertise <br />{" "}
          <span className="uppercase text-primaryBlue text-5xl">on Demand</span>
        </p>
        <p className="text-2xl ">
          Maximize Your Technical Potential with <br />
          CTOas a service for your business
        </p>
        <div className="flex gap-3">
          <hr className="w-px h-20 bg-black" />
          <p className="text-xl">
            Hiring a fractional CTO can save a <br/> business between US\$115,000 and <br/>
            US\$271,000 annually.
          </p>
        </div>
        <button className="bg-buttonCTA text-white w-fit rounded-full font-semibold text-xl px-12 py-5" >Book a consultation</button>
      </div>
      <img loading="lazy" src={svg} className="w-[600px]" />
    </div>
  );
};

export default Hero;
