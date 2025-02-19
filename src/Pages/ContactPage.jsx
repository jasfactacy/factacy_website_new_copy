

import React, { useEffect, useState } from "react";
import factacy from "../assets/factacy_logo.svg";

const Tag = ({ text }) => (
  <span className=" bg-white border-blue border-2 px-4  py-1 rounded-3xl w-fit">
    {text}
  </span>
);
const Email = () => (
  <a className=" text-primaryBlue" href="mailto:connect@factacy.ai">
    connect@factacy.ai
  </a>
);

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="pt-24 pb-32 sm:px-8 lg:px-24 h-max font-sans flex flex-col items-center bg-gradient-to-b to-white from-blue xxl:container"
      // style={{
      //   background: "linear-gradient(180deg, #FFFFFF 0%, #E8F5FF 100%)",
      // }}
    >
      <div className="flex flex-row w-30 h-6">
        <img loading="lazy" className="w-8 h-6" src={factacy} alt="" />
        <p className="font-semibold text-base text-primaryBlue">REACH US</p>
      </div>
      <h1 className=" text-4xl font-medium text-center">Contact Information</h1>

      {/* {lower div} */}
      <div className="mt-8 flex sm:flex-col lg:flex-row gap-4 w-full containerx">
        <div className="flex flex-col gap-4 lg:w-[30%] ">
          <div className=" flex gap-10 flex-col p-4 bg-white w-full rounded-xl shadow-md">
            <Tag text={"Location"} />
            <p className="text-sm font-semibold">
              {
                "Factacy pvt. ltd., 91 Springboard, 21B, Udyog Vihar, Sector 18, Gurugram, Haryana 122008"
              }
            </p>
          </div>
          <div className="flex gap-10 flex-col p-4 bg-white w-full rounded-xl shadow-md">
            <Tag text={"Contact"} />
            <p className="text-sm font-semibold">{"+91 7290980980"}</p>
          </div>
          <div className="flex gap-10 flex-col p-4 bg-white w-full rounded-xl shadow-md">
            <Tag text={"E-mail"} />
            <Email />
          </div>
        </div>
        <iframe
        className="sm:w-full lg:flex-1 sm:aspect-[1/1.4] lg:aspect-[1/0.45] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1353.8465284136796!2d77.07542769999999!3d28.486794499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2ccc18b2a371883%3A0x6bdb0b436d6fd4e9!2sFactacy.Ai!5e1!3m2!1sen!2sin!4v1711170144628!5m2!1sen!2sin"
          // width="600"
          // height="450"
          style={{ border: "0", borderRadius: "1rem" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
