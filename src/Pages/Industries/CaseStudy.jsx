import React, { useEffect, useState, useCallback, useRef } from "react";
import SectionTitle from "../../components/SectionTitle";
import CaseStudyIntroduction from "./CaseStudyIntroduction";
import CaseStudyProblems from "./CaseStudyProblems";
import CaseStudyImplemention from "./CaseStudyImplemention";
import CaseStudyResult from "./CaseStudyResult";
import CaseStudyConclusion from "./CaseStudyConclusion";

const CaseStudy = ({ industry }) => {
  const list = industry?.description;
  const introduction = list.find((item) => item.text === "Introduction");
  const problems = list.find((item) => item.text === "Problem Statement");
  const solution = list.find((item) => item.text === "Solution");
  const implementation = list.find((item) => item.text === "Implementation");
  const result = list.find((item) => item.text === "Results");
  const conclusion = list.find((item) => item.text === "Conclusion");

  const introductionRef = useRef();
  const problemRef = useRef();
  const implementationRef = useRef();
  const resultRef = useRef();
  const conclusionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (item, obs) => {
        if (item[0].isIntersecting) {
          handleSectionClick("introduction");
        }
      },
      {
        rootMargin: "-50%",
      }
    );
    if (introductionRef?.current) {
      observer.observe(introductionRef.current);
    }
    // introductionRef?.current?.addEventListener('scroll', (e)=>{console.log(e)});
  }, [introductionRef.current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (item, obs) => {
        if (item[0].isIntersecting) {
          handleSectionClick("problems");
        }
      },
      {
        rootMargin: "-50%",
      }
    );
    if (problemRef?.current) {
      observer.observe(problemRef.current);
    }
    // problemRef?.current?.addEventListener('scroll', (e)=>{console.log(e)});
  }, [problemRef.current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (item, obs) => {
        if (item[0].isIntersecting) {
          handleSectionClick("implementation");
        }
      },
      {
        rootMargin: "-50%",
      }
    );
    if (implementationRef?.current) {
      observer.observe(implementationRef.current);
    }
    // implementationRef?.current?.addEventListener('scroll', (e)=>{console.log(e)});
  }, [implementationRef.current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (item, obs) => {
        if (item[0].isIntersecting) {
          handleSectionClick("results");
        }
      },
      {
        rootMargin: "-50%",
      }
    );
    if (resultRef?.current) {
      observer.observe(resultRef.current);
    }
    // result?.current?.addEventListener('scroll', (e)=>{console.log(e)});
  }, [resultRef.current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (item, obs) => {
        if (item[0].isIntersecting) {
          handleSectionClick("conclusion");
        }
      },
      {
        rootMargin: "-50%",
      }
    );
    if (conclusionRef?.current) {
      observer.observe(conclusionRef.current);
    }
    // conclusionRef?.current?.addEventListener('scroll', (e)=>{console.log(e)});
  }, [conclusionRef.current]);

  const [activeSection, setActiveSection] = useState("introduction");
  const handleSectionClick = useCallback((section) => {
    setActiveSection(section);
  }, []);

  function scrollToImplementation(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -130;
      window.scrollTo({
        top: targetElement.offsetTop + yOffset,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="flex w-full mt-28">
      <div className="w-1/3 h-max sticky top-28 sm:hidden lg:block">
        <div
          className={`flex items-center gap-2 w-max text-sm px-2 py-3 ${
            activeSection === "introduction"
              ? "bg-white text-primaryBlue font-bold"
              : "text-[#8FCCFF] font-light"
          } `}
          onClick={() => handleSectionClick("introduction")}
        >
          <div
            className={`transition-all duration-800 ${
              activeSection === "introduction"
                ? "h-0.5 w-16 bg-primaryBlue rounded-xl"
                : "h-1 w-1 rounded-full bg-[#8FCCFF]"
            }`}
          ></div>
          <a
            className="cursor-pointer "
            href="#introduction"
            onClick={scrollToImplementation}
          >
            Introduction
          </a>
        </div>

        <div
          className={`flex items-center gap-2 w-max h-full text-sm px-2 py-3  ${
            activeSection === "problems"
              ? "bg-white text-primaryBlue font-bold"
              : "text-[#8FCCFF] font-light"
          } `}
          onClick={() => handleSectionClick("problems")}
        >
          <div
            className={`transition-all duration-800 ${
              activeSection === "problems"
                ? "h-0.5 w-16 bg-primaryBlue rounded-xl"
                : "h-1 w-1 rounded-full bg-[#8FCCFF]"
            }`}
          ></div>
          <a
            className="cursor-pointer "
            href="#problem"
            onClick={scrollToImplementation}
          >
            Problem & Solution
          </a>
        </div>

        <div
          className={`flex items-center gap-2 w-max h-full text-sm px-2 py-3 ${
            activeSection === "implementation"
              ? "bg-white text-primaryBlue font-bold"
              : "text-[#8FCCFF] font-light"
          }`}
          onClick={() => handleSectionClick("implementation")}
        >
          <div
            className={`transition-all duration-800 ${
              activeSection === "implementation"
                ? "h-0.5 w-16 bg-primaryBlue rounded-xl"
                : "h-1 w-1 rounded-full bg-[#8FCCFF]"
            }`}
          ></div>
          <a
            className="cursor-pointer block"
            href="#implementation"
            onClick={scrollToImplementation}
          >
            Implementation
          </a>
        </div>

        <div
          className={`flex items-center gap-2 w-max h-full text-sm px-2 py-3 ${
            activeSection === "results"
              ? "bg-white text-primaryBlue font-bold"
              : "text-[#8FCCFF] font-light"
          }`}
          onClick={() => handleSectionClick("results")}
        >
          <div
            className={`transition-all duration-800 ${
              activeSection === "results"
                ? "h-0.5 w-16 bg-primaryBlue rounded-xl"
                : "h-1 w-1 rounded-full bg-[#8FCCFF]"
            }`}
          ></div>
          <a
            className="cursor-pointer "
            href="#result"
            onClick={scrollToImplementation}
          >
            Results
          </a>
        </div>

        <div
          className={`flex items-center gap-2 w-max h-full text-sm px-2 py-3 ${
            activeSection === "conclusion"
              ? "bg-white text-primaryBlue font-bold"
              : "text-[#8FCCFF] font-light"
          }`}
          onClick={() => handleSectionClick("conclusion")}
        >
          <div
            className={`transition-all duration-800 ${
              activeSection === "conclusion"
                ? "h-0.5 w-16 bg-primaryBlue rounded-xl"
                : "h-1 w-1 rounded-full bg-[#8FCCFF]"
            }`}
          ></div>
          <a
            className="cursor-pointer "
            href="#conclusion"
            onClick={scrollToImplementation}
          >
            Conclusion
          </a>
        </div>
      </div>
      <div className="lg:w-2/3 flex flex-col">
        <SectionTitle text={"case study"} />
        <div ref={introductionRef}>
          <CaseStudyIntroduction data={introduction} />
        </div>
        <div ref={problemRef}>
          <CaseStudyProblems problem={problems} solution={solution} />
        </div>
        <div ref={implementationRef}>
          <CaseStudyImplemention data={implementation} />
        </div>

        <div ref={resultRef}>
          <CaseStudyResult data={result} />
        </div>

        <div ref={conclusionRef}>
          <CaseStudyConclusion data={conclusion} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;