import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import proxgy from "../../assets/proxgy.png";
import yankiez from "../../assets/yankiez.png";
import startups from "../../assets/startups.png";
import aarts from "../../assets/aarts.png";
import aws from "../../assets/aws.png";
import Gcloud from "../../assets/Gcloud.svg";
import openAI from "../../assets/openAI.jpg";
import azure from "../../assets/azure.png";
import huggingFace from "../../assets/hugging_face.png";
import spark from "../../assets/spark.png";
import mlflow from "../../assets/mlflow.png";
import opencv from "../../assets/opencv.png";
import h2o from "../../assets/h2o.png";
import chitkara from "../../assets/chitkara.png";
import nasscom from "../../assets/nasscom.png";
import wedocor8 from "../../assets/wedocor8.png";
import verismart from "../../assets/verismart-logo.svg";
import astranest from "../../assets/astranest.png";
import talentAi from "../../assets/talent-ai.png";
import watchout from "../../assets/watchout.png"
import deeptech from "../../assets/deeptech.png"

const LogoCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 1398,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="w-full h-12 mt-16 pb-24">
      {/* // <div className="relative z-0 lg:pb-40 sm:pb-20 lg:pt-14 sm:pt-0 px-20 flex items-center gap-28 aspect-w-3 aspect-h-2 animate-slide animate-infinite"> */}
      <div className="w-full">
        <Slider {...settings}>
        <img loading="lazy"
            src={deeptech}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Nasscom"
          ></img>
          <img loading="lazy"
            src={proxgy}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Proxgy"
          ></img>

          <img loading="lazy"
            src={nasscom}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - nasscom"
          ></img>

          <img loading="lazy"
            src={aarts}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Aarts"
          ></img>
          <img loading="lazy"
            src={wedocor8}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-colorburn"
            alt="partners, clients and contributors at Factacy - wedocor8"
          />
          <img loading="lazy"
            src={yankiez}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Yangkiez"
          ></img>

          <img loading="lazy"
            src={startups}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Startupsindia"
          ></img>

          <img loading="lazy"
            src={azure}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Microsoft Azure"
          ></img>

          <img loading="lazy"
            src={openAI}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - OpenAI"
          ></img>

          <img loading="lazy"
            src={chitkara}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Chitkara"
          ></img>

          <img loading="lazy"
            src={Gcloud}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Google Cloud"
          ></img>

          <img loading="lazy"
            src={aws}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - AWS"
          ></img>

          <img loading="lazy"
            src={huggingFace}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Hugging Face"
          ></img>
          <img loading="lazy"
            src={astranest}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-colorburn"
            alt="partners, clients and contributors at Factacy - astranest"
          />
          <img loading="lazy"
            src={spark}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-multiply"
            alt="partners, clients and contributors at Factacy - Spark"
          ></img>

          <img loading="lazy"
            src={mlflow}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-color-burn"
            alt="partners, clients and contributors at Factacy - ML Flow"
          ></img>

          <img loading="lazy"
            src={opencv}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-colorburn"
            alt="partners, clients and contributors at Factacy - OpenCV"
          ></img>

          <img loading="lazy"
            src={h2o}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-colorburn"
            alt="partners, clients and contributors at Factacy - H2o"
          ></img>

          <img loading="lazy"
            src={verismart}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-colorburn"
            alt="partners, clients and contributors at Factacy - verismart"
          />
          <img loading="lazy"
            src={talentAi}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-colorburn"
            alt="partners, clients and contributors at Factacy - talent Ai"
          />
          <img loading="lazy"
            src={watchout}
            className="object-contain px-5 w-12 h-12 grayscale mix-blend-colorburn"
            alt="partners, clients and contributors at Factacy - watchout"
          />
        </Slider>
      </div>
    </section>
  );
};

export default LogoCarousel;
