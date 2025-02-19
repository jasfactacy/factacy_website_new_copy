import React, { useState } from 'react';
import factacy from '../../assets/factacy_logo.svg';

import pandasIcon from '../../assets/CTO/dataScience/pandas-icon.png';
import Tableau from '../../assets/CTO/dataScience/tableau-software.svg';
import powerBi from '../../assets/CTO/dataScience/power-bi.png';
import spark from '../../assets/CTO/dataScience/Apache-Spark.svg';
import python from '../../assets/CTO/dataScience/Python.webp';
import sqlIcon from '../../assets/CTO/dataScience/sql-icon.png';
import noSqlIcon from '../../assets/CTO/dataScience/nosql-icon.png';
import postgresqlSqlIcon from '../../assets/CTO/dataScience/postgresql-icon.png';


import htmlIcon from '../../assets/CTO/Web/html-icon.webp';
import cssIcon from '../../assets/CTO/Web/css-icon.png';
import tailwindCssIcon from '../../assets/CTO/Web/tailwindcss-icon.png';
import jsIcon from '../../assets/CTO/Web/javascript-icon.webp';
import reactIcon from '../../assets/CTO/Web/React-icon.webp';
import webpackIcon from '../../assets/CTO/Web/webpack.png';
import reduxIcon from '../../assets/CTO/Web/redux-icon.svg';
import jesIcon from '../../assets/CTO/Web/jest-icon.png';


import premiereIcon from '../../assets/CTO/design/Adobe_Premiere_Pro_CC_icon.svg.png';
import illustratorIcon from '../../assets/CTO/design/adobe-illustrator.webp';
import indesignIcon from '../../assets/CTO/design/adobe-indesign.webp';
import canvaIcon from '../../assets/CTO/design/Canva-icon.svg';
import davinciResolveIcon from '../../assets/CTO/design/DaVinci_Resolve.png';
import figmaIcon from '../../assets/CTO/design/Figma-icon.png';
import photoshopIcon from '../../assets/CTO/design/photoshop.png'
import xdIcon from '../../assets/CTO/design/XD-icon.png';


import tensorflowIcon from '../../assets/CTO/machineLearning/tensorflow-icon.png';
import spacyIcon from '../../assets/CTO/machineLearning/spacy.webp';
import scikitIcon from '../../assets/CTO/machineLearning/scikit-learn.png';
import pytorchIcon from '../../assets/CTO/machineLearning/pytorch-icon.png';
import kerasIcon from '../../assets/CTO/machineLearning/keras-icon-png.webp';
import huggingFaceIcon from '../../assets/CTO/machineLearning/hugging-face-icon.svg';


import awsIcon from '../../assets/CTO/Backend/Amazon_Web_Services.png';
import gcpIcon from '../../assets/CTO/Backend/google-cloud-icon.png';
import azureIcon from '../../assets/CTO/Backend/azure.png';
import expressIcon from '../../assets/CTO/Backend/express-logo.png';
import gitIcon from '../../assets/CTO/Backend/git-icon.png';
import graphQL from '../../assets/CTO/Backend/graphQl-icon.webp';
import nodeJsIcon from '../../assets/CTO/Backend/node-js-icon.png';
import webhooksIcon from '../../assets/CTO/Backend/webhooks-icon.png';


const data = {
  "Data Science": [
    {
      img: pandasIcon,
      text: 'Pandas',
    },
    {
      img: Tableau,
      text: 'Tableau',
    },
    {
      img: powerBi,
      text: 'Power BI',
    },
    {
      img: spark,
      text: 'Spark',
    },
    {
      img: python,
      text: 'Python',
    },
    {
      img: sqlIcon,
      text: 'SQL',
    },
    {
      img: noSqlIcon,
      text: 'Nosql',
    },
    {
      img: postgresqlSqlIcon,
      text: 'PostgreSQL',
    },
  ],
  "Machine Learning": [
    {
      img: tensorflowIcon,
      text: 'Tensorflow',
    },
    {
      img: spacyIcon,
      text: 'Spacy',
    },
    {
      img: scikitIcon,
      text: 'Spacy',
    },
    {
      img: pytorchIcon,
      text: 'Pytorch',
    },
    {
      img: kerasIcon,
      text: 'Keras',
    },
    {
      img: huggingFaceIcon,
      text: 'Hugging Face',
    },
  ],
  "Web/Mobile": [
    {
      img: htmlIcon,
      text: 'HTML 5',
    },
    {
      img: cssIcon,
      text: 'CSS 3',
    },
    {
      img: tailwindCssIcon,
      text: 'Tailwind',
    },
    {
      img: jsIcon,
      text: 'Javascript',
    },
    {
      img: reactIcon,
      text: 'React',
    },
    {
      img: webpackIcon,
      text: 'Webpack',
    },
    {
      img: reduxIcon,
      text: 'Redux',
    },
    {
      img: jesIcon,
      text: 'Jest',
    },
  ],
  "Backend/DB": [
    {
      img: nodeJsIcon,
      text: 'Node JS',
    },
    {
      img: expressIcon,
      text: 'Express JS',
    },
    {
      img: graphQL,
      text: 'GraphQL',
    },
    {
      img: webhooksIcon,
      text: 'Webhook',
    },
    {
      img: gitIcon,
      text: 'Git',
    },
    {
      img: azureIcon,
      text: 'Azure',
    },
    {
      img: awsIcon,
      text: 'Amazon Web Service',
    },
    {
      img: gcpIcon,
      text: 'Google Cloud Platform',
    },
  ],
  "Design": [
    {
      img: premiereIcon,
      text: 'Premiere Pro',
    },
    {
      img: illustratorIcon,
      text: 'Illustrator',
    },
    {
      img: indesignIcon,
      text: 'Indesign',
    },
    {
      img: canvaIcon,
      text: 'Canva',
    },
    {
      img: davinciResolveIcon,
      text: 'DaVinci Resolve',
    },
    {
      img: figmaIcon,
      text: 'Figma',
    },
    {
      img: photoshopIcon,
      text: 'Photoshop',
    },
    {
      img: xdIcon,
      text: 'Adobe XD',
    },
  ],
}


const TechStack = () => {
  const tabs = Object.keys(data);
  const [activeTab, setActiveTab] = useState(tabs?.[0]);

  return (
    <div className="pb-20 min-h-screen flex flex-col gap-20 items-center bg-gradient-to-b to-[#E8F5FF] from-white lg:px-32">
      <div className="flex items-center ">
        <img loading="lazy" src={factacy} className="w-12" />
        <p className="font-semibold text-2xl text-primaryBlue">
          Our Tech Stack
        </p>
      </div>
      <div className="flex gap-6 text-sm lg:text-base px-4 lg:gap-24">
        {tabs.map((item, i) => (
          <div onClick={() => setActiveTab(item)} className={`cursor-pointer ${activeTab === item ? "text-buttonCTA" : "text-gray-500 "}`}>{item}</div>
        ))}
      </div>
      <div className=" flex flex-wrap justify-center gap-16 w-full lg:w-[60%]">
        {data?.[activeTab]?.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col gap-4 items-center justify-end">
            <img loading="lazy"
              className=" w-24"
              src={item?.img}
            />
            <span>{item?.text}</span>
          </div>))}
      </div>
    </div>
  );
};

export default TechStack;
