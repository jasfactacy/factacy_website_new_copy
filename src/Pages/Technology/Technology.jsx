import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import UseCase from "./UseCase";
import CaseStudy from "./CaseStudy";
import dataList from "../../data/technology";

// const data = {
//   id: 1,
//   title: "Natural Language Processing (NLP)",
//   definition:
//     "The field of artificial intelligence that focuses on the interaction between computers and human language, enabling machines to understand, interpret, and generate human language.",
//   headline:
//     "NLP algorithms can now understand and translate multiple languages in real-time, breaking down language barriers and bringing people closer together!",
//   url: "ai-application-natural-language-processing-technology",
//   useCase: {
//     text: "Use Case",
//     title: "How we can use NLP",
//     list: [
//       {
//         id: 1,
//         title: "Fraud Detection",
//         description:
//           "NLP plays a crucial role in fraud detection across industries. By analyzing large volumes of textual data such as transaction records, customer profiles, and online communication, NLP algorithms can identify suspicious patterns, detect fraudulent activities, and mitigate potential risks. This enables organizations to proactively prevent financial fraud, protect customer assets, and maintain the integrity of their systems. ",
//       },
//       {
//         id: 2,
//         title: "Chatbots",
//         description:
//           "NLP-powered chatbots are transforming customer service and support. Chatbots equipped with NLP capabilities can understand natural language, interpret customer inquiries, and provide personalized responses. They assist users in finding information, resolving issues, and even completing transactions. Chatbots offer round-the-clock support, reduce response time, and enhance customer satisfaction by delivering efficient and seamless interactions. ",
//       },
//       {
//         id: 3,
//         title: "Customer Feedback Analysistbots",
//         description:
//           "NLP techniques enable organizations to analyze and understand customer feedback at scale. By processing customer reviews, survey responses, and social media posts, NLP algorithms can extract insights, identify emerging trends, and assess customer sentiments. This analysis helps companies improve their products, address customer concerns, and enhance overall customer experience by making data-driven decisions based on valuable customer feedback. ",
//       },
//       {
//         id: 4,
//         title: "Content Personalization",
//         description:
//           "NLP enables content personalization by understanding user preferences and tailoring content accordingly. By analyzing user interactions, browsing behavior, and demographic data, NLP algorithms can recommend personalized content, product suggestions, and relevant information. This level of personalization enhances user engagement, increases conversions, and fosters a more customized experience across various platforms such as e-commerce, news, and entertainment. ",
//       },
//       {
//         id: 5,
//         title: "Language Translation",
//         description:
//           "NLP-powered language translation tools facilitate communication and understanding across different languages. By employing machine translation techniques, NLP algorithms can automatically translate text, documents, or web pages from one language to another. This technology breaks down language barriers, enables global collaboration, and expands business opportunities in multilingual contexts. ",
//       },
//     ],
//   },
//   caseStudy: {
//     text: "Case Study",
//     title: "Using Natural Language Processing to Improve Healthcare Outcomes ",
//     list: [
//       {
//         id: 1,
//         text: "Introduction",
//         description:
//           "Natural language processing (NLP) has the potential to revolutionize healthcare by improving patient outcomes and reducing costs. By analyzing large amounts of unstructured data, NLP can help healthcare providers identify patterns and insights that would be difficult to detect using traditional methods. ",
//       },
//       {
//         id: 2,
//         text: "Problem Statement",
//         description:
//           "A large healthcare provider was struggling to identify patients who were at risk of developing sepsis, a potentially life-threatening condition. The provider had a team of nurses who manually reviewed patient charts to identify those who were at risk, but the process was time-consuming and prone to errors. ",
//       },
//       {
//         id: 3,
//         text: "Solution",
//         description:
//           "The healthcare provider decided to implement an NLP system to help automate the process of identifying patients at risk of sepsis. The system was designed to analyze patient charts and identify key indicators of sepsis, such as abnormal vital signs and laboratory values. ",
//       },
//       {
//         id: 4,
//         text: "Implementation",
//         description:
//           "The NLP system was trained on a large dataset of patient charts and sepsis cases. The system was designed to identify patterns and trends in the data that were indicative of sepsis. For example, the system would analyze a patient's vital signs and laboratory values to identify any abnormalities that were consistent with sepsis. The system was also designed to learn from its mistakes. If the system identified a patient as being at risk of sepsis but the patient did not develop the condition, the system would flag the case for review by a human expert. The expert would then review the case and provide feedback to the system to improve its accuracy in the future. ",
//       },
//       {
//         id: 5,
//         text: "Results",
//         description:
//           "After implementing the NLP system, the healthcare provider saw a significant improvement in their ability to identify patients at risk of sepsis. The system was able to identify patients who were at risk of sepsis with a high degree of accuracy, allowing healthcare providers to intervene early and prevent the condition from developing. The healthcare provider also saw a reduction in costs associated with sepsis. By identifying patients at risk early, the provider was able to provide early interventions that prevented the need for more expensive treatments later on. ",
//       },
//       {
//         id: 6,
//         text: "Conclusion",
//         description:
//           "Natural language processing has the potential to revolutionize healthcare by improving patient outcomes and reducing costs. By implementing an NLP system to identify patients at risk of sepsis, the healthcare provider was able to improve their ability to detect the condition early and provide early interventions that prevented more serious complications. ",
//       },
//     ],
//   },
// };

const Technology = () => {
  const { title } = useParams();
  const data = dataList?.find((item) => item.url === title);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" min-h-full p-6 pt-24 font-roboto lg:p-16 lg:pt-32">
      <div className="flex flex-col gap-8 items-center mb-16">
        <h1 className="text-4xl text-center w-[100%] font-bold lg:w-[50%]">
          {data?.title}
        </h1>
        {data?.definition && (
          <p className="text-center font-bold lg:w-[50%]">{data?.definition}</p>
        )}
        {data?.headline && (
          <p className="text-center text-2xl lg:w-[50%]">{data?.headline}</p>
        )}
      </div>
      <UseCase data={data?.useCase} />
      {/* <CaseStudy data={data?.caseStudy} /> */}
    </div>
  );
};

export default Technology;
