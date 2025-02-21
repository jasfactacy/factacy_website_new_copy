import React, { useEffect, useState } from "react";
import main from "../assets/about/main.jpeg";
import factacy from "../assets/factacy_logo.svg";

import ExcellenceIcon from "../assets/cards/ExcellenceIcon";
import AiIcon from "../assets/cards/AiIcon";
import CustomizedIcon from "../assets/cards/CustomizedIcon";
import SpeedIcon from "../assets/cards/Speed";
import GraphIcon from "../assets/about/Graph";

import backedCompany1 from "../assets/about/logo-1.png";
import backedCompany2 from "../assets/about/logo-2.png";
import backedCompany3 from "../assets/about/logo-3.png";
import backedCompany4 from "../assets/about/logo-4.png";
import backedCompany5 from "../assets/about/logo-5.png";

import inderjit from "../assets/WheelsImages/inderjit.jpg";
import manoj from "../assets/WheelsImages/manoj.jpg";
import annu from "../assets/WheelsImages/annu.jpg";
import imran from "../assets/about/Imran.png";
import satarupa from "../assets/WheelsImages/satarupa.jpg";
import manish from "../assets/WheelsImages/manish.jpeg";
import jas from "../assets/WheelsImages/jasmine.jpg";
import useMediaQuery from "../hooks/useMediaQuery.js";

const About = () => {
  const backedCompany = [
    backedCompany1,
    backedCompany2,
    backedCompany3,
    backedCompany4,
    backedCompany5,
  ];

  const teams = [
    {
      name: "Inderjit Makkar",
      title: "CEO and Founder",
      description:
        "Currently, spearheading a Startup to deliver innovative and disruptive Ai solutions in the field of Data Analytics and Analytics of Things. As the Chief Product Officer of Proxgy, a Shark Tank funded Industrial IoT company, I acquired a wealth of experience in developing and bringing to market innovative technology solutions. With a passion for leveraging IoT and data analytics to drive efficiency and optimize operations.",
      img: inderjit,
    },
    {
      name: "Manoj Solanki",
      title: "Project Management",
      description: "Data enthusiast with an Excel-lent sense of humor.",
      img: manoj,
    },
    {
      name: "Annu Punia",
      title: "Machine Learning",
      description:
        "Crafting algorithms that transform data into intelligent solutions, bridging the gap between innovation and practical application.",
      img: annu,
    },
    // {
    //   name: "Imran Khan",
    //   title: "Machine Learning",
    //   description:
    //     "Deeply immersed in crafting cutting-edge AI solutions. With hands-on expertise in developing and deploying sophisticated AI models, I specialize in NLP and LLM's. I enjoy implementing research papers. I love playing football and TT.",
    //   img: imran,
    // },
    {
      name: "Jasmine Pahwa",
      title: "Frontend Development",
      description:
        "Geeking out over tech like a kid in a candy store, I debug jokes for a living.",
      img: jas,
    },
    {
      name: "Satarupa Mahanta",
      title: "Data Science",
      description:
        "Swirling through the mobius strip of data like a mathematician on a rollercoaster, finding unexpected loops and turns that redefine the very essence of insight.",
      img: satarupa,
    },
    {
      name: "Manish Bisht",
      title: "Data Science",
      description:
        "Empowering decision-making with data-driven insights and transforming raw data into actionable solutions, one algorithm at a time.",
      img: manish,
    },
  ];
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const title = 'About Factacy AI';
  const discription = 'Get to know Factacy\'s team of visionary entrepreneurs, talented data scientists and experienced data geeks.';
  const [existingMetaTags, setExistingMetaTags] = useState({
    description: document
      .querySelector('meta[name="description"]')
      .getAttribute("content"),
    // keywords: document
    //   .querySelector('meta[name="keywords"]')
    //   .getAttribute("content"),
    title: document.getElementsByTagName("title")[0].innerText,
  });

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", discription);
    // document
    //   .querySelector('meta[name="keywords"]')
    //   .setAttribute("content", industry.meta.keywords);
    document.getElementsByTagName("title")[0].innerText = title;

    return () => {
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", existingMetaTags.description);

      // document
      //   .querySelector('meta[name="keywords"]')
      //   .setAttribute("content", existingMetaTags.keywords);

      document.getElementsByTagName("title")[0].innerText =
        existingMetaTags.title;
    };
  }, []);

  return (
    <div className="pt-24 pb-12 lg:px-24 font-sans flex gap-6 flex-col w-full overflow-hidden p-4 xxl:container">
      <h1 className=" text-6xl font-medium ">{ }</h1>
      <img loading="lazy" className="rounded-lg" src={main} alt="aboutMain" />
      <div className=" flex sm:flex-col lg:flex-row gap-4 ">
        <div className="flex-1">
          <div className="flex flex-row w-30 h-6">
            <img loading="lazy" src={factacy} alt="" className="w-8 h-6" />
            <p className="font-semibold text-base text-primaryBlue">
              OUR STORY
            </p>
          </div>
          <h1 className="text-4xl font-medium">
            A team of visionary entrepreneurs, talented data scientists and
            experienced data geeks are the core strengths behind Factacy{" "}
          </h1>
        </div>

        {/*  */}

        <div className="flex-1 flex flex-col gap-4 ">
          <p className=" text-colorText w-11/12">
            Factacy 's mission is to democratize data. In Factacy's world, each
            one of us has a right to factual knowledge backed by reliable data.
            In that world, data is not a privilege, data intelligence is not
            scarce, and knowledge is not dependent on a technical skill. With a
            touch of a button, a school teacher can add value to their teaching
            be providing real-time, customised data to their lessons; a
            journalist, panellist, reporter or an anchor can share insightful
            stats and comparisons instantly; a content creator can share
            interesting facts and figures to their subscribers without the need
            to learn core data analytics. Factacy does the collection, sorting,
            linking and representing for you. All you need to do is select what
            indicators you want, pick some variables you need, and our data
            engines provide you the intelligence you need from the data.
          </p>

          <p className=" text-colorText w-11/12">
            Conceptualised in 2020, Factacy is set on a path to provide its
            users custom analytics on social, political, macroeconomic, and
            demographic data from sovereign and authentic sources. Factacy
            believes that knowledge is a product of intelligence and
            intelligence comes from data. With most of the data going online and
            stored in digital silos, which can only be accessed with knowledge
            of adequate data mining and analytical tools. Factacy provides value
            in form of making this data accessible to all in a format
            comfortable to all.
          </p>
        </div>
      </div>

      {/*  */}

      <div className=" flex flex-col gap-4  mt-6">
        <div className="flex sm:flex-col lg:flex-row gap-4">
          <div
            className="sm:w-full lg:w-[23%] rounded-2xl bg-white p-6 flex flex-col gap-3 items-center justify-center"
            style={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <h1 className=" text-blue text-6xl font-medium">2020</h1>
            <span className=" capitalize text-[#A1A1AA] text-sm font-medium">
              founded
            </span>
          </div>
          <div
            className="sm:w-full lg:w-[43%] rounded-2xl bg-white p-6"
            style={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <ExcellenceIcon />
            <h2 className="text-[#232323] text-2xl font-medium mt-8">
              A legacy of Excellence
            </h2>
            <p className="text-[#A1A1AA]">
              Book a demo session to get detailed information on our hiring
              proposition
            </p>
          </div>
          <div
            className="sm:w-full lg:w-[30%] rounded-2xl bg-white p-6"
            style={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <AiIcon />
            <h2 className="text-[#232323] text-2xl font-medium mt-8">
              Propelled by AI
            </h2>
            <p className="text-[#A1A1AA]">
              Infusing Your Business with Generative AI and next gen
              technologies
            </p>
          </div>
        </div>
        <div className="flex gap-4 sm:flex-col lg:flex-row">
          <div
            className="sm:w-full lg:flex-1 rounded-2xl bg-white p-6"
            style={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <CustomizedIcon />
            <h2 className={"text-[#232323] text-2xl font-medium mt-8"}>
              Crafting Customized Solutions
            </h2>
            <p className="text-[#A1A1AA]">
              Precision-engineered AI Solutions Aligned Exclusively with Your
              Business's Requirements
            </p>
          </div>
          <div
            className="sm:w-full lg:flex-1 rounded-2xl bg-white p-6"
            style={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <SpeedIcon />
            <h2 className={"text-[#232323] text-2xl font-medium mt-8"}>
              Warp speed agility
            </h2>
            <p className="text-[#A1A1AA]">
              Our Innovative solutions are ready when you are
            </p>
          </div>
          {/* <div
            className="sm:w-full lg:w-[23%] rounded-2xl bg-white p-6"
            style={{
              "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <GraphIcon />
            <div>
              <span className="text-5xl font-semibold">35%</span>
              <span className="text-[#A1A1AA] text-xl font-medium">Growth</span>
            </div>
          </div> */}
        </div>
      </div>

      {/*  */}

      {/* {Backed  by team  at} */}
      {/* <div className="flex flex-col gap-8 items-center py-10">
        <h2 className=" text-[#A1A1AA] font-roboto ">Backed by teams at</h2>
        <div className=" w-full flex justify-between py-10">
          {backedCompany.map((item, index) => (
            <img loading="lazy" key={index} alt="" className="" src={item} />
          ))}
        </div>
      </div> */}

      {/* { Our Team} */}
      <div className="mt-8">
        <div className="flex flex-row w-30 h-6">
          <img loading="lazy" src={factacy} alt="" className="w-8 h-6" />
          <p className="font-semibold text-base text-primaryBlue">OUR TEAM</p>
        </div>
        <h1 className="text-6xl font-bold  font-roboto">
          The team powering <br /> the product
        </h1>

        <div className="mt-8 flex flex-col">
          {teams.map((item, index) => (
            <div
              key={index}
              className={`p-4 flex sm:flex-col lg:flex-row gap-4 w-full border-t-[0.12rem] ${activeTeamMember !== index ? "cursor-pointer" : ""
                }`}
              onClick={() => setActiveTeamMember(index)}
            >
              <div className="pt-2 flex-1 flex gap-2 sm:flex-col lg:flex-row">
                <div className="">
                  <span
                    className={` block h-4 w-4 rounded-full lg:mt-2 ${activeTeamMember === index ? " bg-[#2475BB]" : "bg-blue"
                      } `}
                  ></span>
                </div>
                <div className="">
                  <h1 className="text-2xl font-roboto font-medium">
                    {item.name}
                  </h1>
                  <h3 className=" text-lg font-roboto font-normal">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-[#71717A] text-sm font-roboto font-normal ${activeTeamMember === index ? " block" : "hidden"
                      }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              {activeTeamMember === index && (
                <img loading="lazy"
                  src={item.img}
                  alt=""
                  className="w-[14rem] aspect-square rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;