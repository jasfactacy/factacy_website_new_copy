import React from "react";
import Piyush from "../../assets/piyush_garg.jpeg";
import Aditi from "../../assets/aditi_madan.jpeg";
import Kranti from "../../assets/kranti_anand.jpeg";
import Abhisek from "../../assets/abhisek_baheti.jfif";
import Rohit from "../../assets/rohit_warrier.jfif";
import Mac1 from "../../assets/MacImg1.jpg";
import Mac2 from "../../assets/MacImg2.jpg";
import Mac3 from "../../assets/MacImg3.jpg";
import Mac4 from "../../assets/MacImg4.jpg";
import Mac5 from "../../assets/MacImg5.jpg";

const SuccessContent = [
    {
        img: Aditi,
        title: "Client Success Story 1:",
        subtitle: "AI-Driven Innovation Enhances Food Manufacturing Efficiency",
        description:
            "A leading food manufacturer partnered with Factacy to enhance production quality using AI-driven computer vision. Factacy’s solution helped detect torn momos with high accuracy, improving quality control and reducing waste. They also assisted in securing a patent for the Torn Momo Detection System, reinforcing the company’s innovation.",
        testimonial:
            '"Factacy’s AI-powered solution transformed our quality control, helping us detect torn momos efficiently. Their expertise also guided us in securing a patent for our system. A truly impactful collaboration!"  – Aditi Bhutia Madan (Master Chef and Director, BluePine Foods Private Limited)',
        imgToShow: Mac1,
    },
    {
        img: Kranti,
        title: "Client Success Story 2:",
        subtitle: "AI-Powered Digital Transformation Fuels ARRCOAT’s Growth",
        description:
            "ARRCOAT is committed to building businesses for the future, leveraging innovation to enhance customer experiences. By integrating an AI ecosystem, ARRCOAT aims to deliver cutting-edge solutions that drive customer delight. Partnering with Factacy has enabled the company to craft a comprehensive digital transformation strategy and develop custom AI solutions that will accelerate growth and expand its impact.",
        testimonial:
            '"Factacy’s passion and expertise in designing a digital transformation strategy along with building custom AI solutions for us will help us scale and benefit the customers far and wide." – Kranti Anand, MD, ARRCOAT',
        imgToShow: Mac2,
    },
    {
        img: Rohit,
        title: "Client Success Story 3:",
        subtitle: "AI-Powered Automation Transforms Hiring at Zepcruit",
        description:
            "Zepcruit partnered with Factacy to build a fully automated HR platform that streamlines the entire hiring process. From accepting applications to resume screening, shortlisting, conducting AI-driven interviews, and final candidate selection—everything is powered by AI and automation, making hiring faster and more efficient.",
        testimonial:
            '"Factacy delivered an exceptional AI recruitment platform that will revolutionize the hiring process. The precise candidate matching and seamless automation amazed us. Their professionalism and commitment to excellence truly delighted us. Highly recommended!" – Rohit Warrier, Founder, Zepcruit',
        imgToShow: Mac3,
    },
    {
        img: Abhisek,
        title: "Client Success Story 4:",
        subtitle: "Overcoming Hardware Constraints with AI Innovation",
        description:
            "Watchout Wearables partnered with Factacy to tackle a complex project involving strict hardware limitations. Factacy’s team, led by founder Inder, approached the challenge with passion and determination, ensuring a seamless deployment despite the constraints. Their problem-solving mindset and commitment to the client's vision made a lasting impact.",
        testimonial:
            '"Factacy helped turn our vision of an AI-powered kids’ smartwatch into reality. Their innovative approach and flawless execution exceeded our expectations, delivering a game-changing product. A truly delightful experience!" – Abhisek Baheti, Founder, Watchout Wearables',
        imgToShow: Mac4,
    },
    {
        img: Piyush,
        title: "Client Success Story 5:",
        subtitle: "Academia industry partnerships",
        description:
            "Deep synergies and active collaboration with new age ventures like Factacy are going to propel India's Innovation ecosystem while giving the realistic catalytic growth to the economy. Together, we aim to create a robust ecosystem that empowers upcoming entrepreneurs and India's startup landscape to new heights.",
        testimonial:
            '"Our strategic partnership with Factacy is a step towards fostering innovation and nurturing talent. Through our MoU, Chitkara University will provide skilled talent, while Factacy offers them real-world internships and projects. This collaboration creates a win-win ecosystem, driving growth for both our students and India startup landscape." – Piyush Garg, Vice President, (CEED) Chitkara University',
        imgToShow: Mac5,
    },
];

const SuccessStoriesPhoneView = () => {
    return (
        <div className="flex flex-col items-center gap-6 p-4">
            {SuccessContent.map((story, index) => (
                <div
                    key={index}
                    className="w-full max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden"
                >
                    {/* Main Image */}
                    <img loading="lazy"
                        src={story.imgToShow}
                        alt="Main"
                        className="w-full h-40 object-cover"
                    />

                    {/* Profile Image & Content */}
                    <div className="flex items-center px-4 -mt-6">
                        <img loading="lazy"
                            src={story.img}
                            alt="Profile"
                            className="w-14 h-14 border-4 border-white rounded-full shadow-md"
                        />
                        <div className="ml-4 mt-6">
                            
                            <p className="text-sm font-bold text-gray-600">{story.subtitle}</p>
                        </div>
                    </div>

                    {/* Story Content */}
                    <div className="p-4 text-sm text-gray-800">
                        <p className="mb-2">{story.description}</p>
                        <blockquote className="italic text-gray-600 text-xs border-l-4 border-blue-500 pl-2">
                            {story.testimonial}
                        </blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SuccessStoriesPhoneView;
