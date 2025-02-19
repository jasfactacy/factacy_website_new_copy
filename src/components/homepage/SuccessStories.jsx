import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "../../hooks/UseMediaQuery";
import Piyush from "../../assets/piyush_garg.jpeg";
import Aditi from "../../assets/aditi_madan.jpeg";
import Kranti from "../../assets/kranti_anand.jpeg";
import Abhisek from "../../assets/abhisek_baheti.jfif";
import Rohit from "../../assets/rohit_warrier.jfif";
import MacBlank from "../../assets/Mac.png";
import Mac1 from "../../assets/MacImg1.jpg";
import Mac2 from "../../assets/MacImg2.jpg";
import Mac3 from "../../assets/MacImg3.jpg";
import Mac4 from "../../assets/MacImg4.jpg";
import Mac5 from "../../assets/MacImg5.jpg";
import PhoneView from './SuccessStoriesPhoneView';  // Adjust the path according to your structure


const SuccessContent = [
    {
        img: Aditi,
        title: "Aditi Bhutia Madan ",
        title2: "Master Chef and Director, BluePine Foods Private Limited",
        subtitle: "AI-Driven Innovation Enhances Food Manufacturing Efficiency",
        description:
            "A leading food manufacturer partnered with Factacy to enhance production quality using AI-driven computer vision. Factacy’s solution helped detect torn momos with high accuracy, improving quality control and reducing waste. They also assisted in securing a patent for the Torn Momo Detection System, reinforcing the company’s innovation.",
        testimonial:
            '"Factacy’s AI-powered solution transformed our quality control, helping us detect torn momos efficiently. Their expertise also guided us in securing a patent for our system. A truly impactful collaboration!" ',
        imgToShow: Mac1,
    },
    {
        img: Kranti,
        title: "Kranti Anand",
        title2: " MD, ARRCOAT",
        subtitle: "AI-Powered Digital Transformation Fuels ARRCOAT’s Growth",
        description:
            "ARRCOAT is committed to building businesses for the future, leveraging innovation to enhance customer experiences. By integrating an AI ecosystem, ARRCOAT aims to deliver cutting-edge solutions that drive customer delight. Partnering with Factacy has enabled the company to craft a comprehensive digital transformation strategy and develop custom AI solutions that will accelerate growth and expand its impact.",
        testimonial:
            '"Factacy’s passion and expertise in designing a digital transformation strategy along with building custom AI solutions for us will help us scale and benefit the customers far and wide." ',
        imgToShow: Mac2,
    },
    {
        img: Rohit,
        title: "Rohit Warrier",
        title2: "Founder, Zepcruit",
        subtitle: "AI-Powered Automation Transforms Hiring at Zepcruit",
        description:
            "Zepcruit partnered with Factacy to build a fully automated HR platform that streamlines the entire hiring process. From accepting applications to resume screening, shortlisting, conducting AI-driven interviews, and final candidate selection—everything is powered by AI and automation, making hiring faster and more efficient.",
        testimonial:
            '"Factacy delivered an exceptional AI recruitment platform that will revolutionize the hiring process. The precise candidate matching and seamless automation amazed us. Their professionalism and commitment to excellence truly delighted us. Highly recommended!" ',
        imgToShow: Mac3,
    },
    {
        img: Abhisek,
        title: "Abhisek Baheti",
        title2: "Founder, Watchout Wearables",
        subtitle: "Overcoming Hardware Constraints with AI Innovation",
        description:
            "Watchout Wearables partnered with Factacy to tackle a complex project involving strict hardware limitations. Factacy’s team, led by founder Inder, approached the challenge with passion and determination, ensuring a seamless deployment despite the constraints. Their problem-solving mindset and commitment to the client's vision made a lasting impact.",
        testimonial:
            '"Factacy helped turn our vision of an AI-powered kids’ smartwatch into reality. Their innovative approach and flawless execution exceeded our expectations, delivering a game-changing product. A truly delightful experience!" ',
        imgToShow: Mac4,
    },
    {
        img: Piyush,
        title: "Piyush Garg",
        title2: "Vice President, (CEED) Chitkara University",
        subtitle: "Academia industry partnerships",
        description:
            "Deep synergies and active collaboration with new age ventures like Factacy are going to propel India's Innovation ecosystem while giving the realistic catalytic growth to the economy. Together, we aim to create a robust ecosystem that empowers upcoming entrepreneurs and India's startup landscape to new heights.",
        testimonial:
            '"Our strategic partnership with Factacy is a step towards fostering innovation and nurturing talent. Through our MoU, Chitkara University will provide skilled talent, while Factacy offers them real-world internships and projects. This collaboration creates a win-win ecosystem, driving growth for both our students and India startup landscape." ',
        imgToShow: Mac5,
    },
];

const SlidingImage = ({ activeIndex }) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        console.log("ActiveIndex changed:", activeIndex);
        const container = scrollContainerRef.current;
        if (container) {
            const targetImage = container.children[activeIndex]; // Select the target image
            if (targetImage) {
                const scrollTarget = targetImage.offsetTop; // Get exact position

                container.scrollTo({
                    top: scrollTarget,
                    behavior: "smooth",
                });
            }
        }
    }, [activeIndex]);


    return (
        <div className="relative ">
            {/* Background Mac frame */}
            <img loading="lazy"  id="mac-blank" src={MacBlank} alt="Mac frame" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden mb-2.5">
                <div
                    ref={scrollContainerRef}
                    className="relative lg:w-[30rem] lg:h-[19.5rem] overflow-y-scroll xl:w-[34rem] xl:h-[23rem]"
                    style={{
                        scrollbarWidth: "none", // Firefox
                        msOverflowStyle: "none", // IE and Edge
                    }}
                >
                    {SuccessContent.map((content, index) => (
                        <img loading="lazy" 
                            key={index}
                            src={content.imgToShow}
                            alt={`Success Story ${index}`}
                            className="w-full lg:h-[19.5rem] xl:h-[22.5rem] xl:mb-2"
                            style={{
                                // height: "19.5rem",
                                objectFit: "cover",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const Success = () => {
    // activeIndex represents the currently “fully shown” story.
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionProgress, setTransitionProgress] = useState(0);
    const sectionRefs = useRef([]);
    const leftContainerRef = useRef(null);

    const isDesktop = useMediaQuery('(min-width: 1024px)');


    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (!leftContainerRef.current) return;
            
    //         const scrollTop = leftContainerRef.current.scrollTop;
    //         console.log("ScrollTop:", scrollTop);
    
    //         const containerHeight = leftContainerRef.current.scrollHeight;
    //         const totalContent = SuccessContent.length;
    //         const sectionHeight = containerHeight / totalContent;
    
    //         // Determine which section is currently in view
    //         const newIndex = Math.min(
    //             Math.max(Math.round(scrollTop / sectionHeight), 0),
    //             totalContent - 1
    //         );
            
    //         setActiveIndex(newIndex); // Update the active index
    //     };
    
    //     const container = leftContainerRef.current;
    
    //     if (container) {
    //         container.addEventListener("scroll", handleScroll);
    //     }
    //     return () => {
    //         if (container) container.removeEventListener("scroll", handleScroll);
    //     };
    // }, [SuccessContent]);
    
    useEffect(() => {
        const handleScroll = () => {
            if (!leftContainerRef.current) return;
    
            const scrollTop = leftContainerRef.current.scrollTop;
            console.log("ScrollTop:", scrollTop); // Debugging
    
            const containerHeight = leftContainerRef.current.scrollHeight;
            const totalContent = SuccessContent.length;
            const sectionHeight = containerHeight / totalContent;
    
            // Determine which section is currently in view
            const newIndex = Math.min(
                Math.max(Math.round(scrollTop / sectionHeight), 0),
                totalContent - 1
            );
    
            setActiveIndex(newIndex); // Update the active index
        };
    
        const attachScrollListener = () => {
            if (leftContainerRef.current) {
                leftContainerRef.current.addEventListener("scroll", handleScroll);
                setTimeout(handleScroll, 100); // Ensure it runs initially
            }
        };
    
        // Attach the listener once the component mounts and ref is available
        setTimeout(attachScrollListener, 200); // Small delay to ensure ref exists
    
        return () => {
            if (leftContainerRef.current) {
                leftContainerRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [SuccessContent]); // Ref is not included in dependencies to prevent unnecessary re-renders
    

    

    useEffect(() => {
        const handleWheelScroll = (event) => {
            if (leftContainerRef.current) {
                leftContainerRef.current.scrollTop += event.deltaY;
                event.preventDefault(); // Prevent scrolling the whole page
            }
        };


        const parentContainer = document.getElementById("parent-success-container"); // Add an ID to the outermost div

        if (parentContainer) {
            parentContainer.addEventListener("wheel", handleWheelScroll);
        }

        return () => {
            if (parentContainer) {
                parentContainer.removeEventListener("wheel", handleWheelScroll);
            }
        };
    }, []);


    return (
        <div className="lg:bg-gradient-to-b from-[#E8F5FF] to-white py-[10rem] relative ">
            <div className="mx-auto px-4 w-full relative">
                {/* Top Section */}
                <div className="container mx-auto text-center mb-16">
                    <h3 className="text-md font-semibold text-title">Success Stories</h3>
                    <h2 className="text-3xl font-bold mb-4 max-w-4xl mx-auto">
                        Proven Success with AI.
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto">
                        See how businesses have scaled and innovated with Factacy AI:
                    </p>
                </div>

                <div id="parent-success-container" className="flex sm:flex-row relative">
                    {/* Left Section with scrollable stories */}
                    {isDesktop ? (
                        <div
                            ref={leftContainerRef}
                            className="flex-1 relative top-0 lg:max-h-[75vh] xl:max-h-[43vh] overflow-y-scroll custom-scroll"
                            style={{
                                msOverflowStyle: "none", // IE and Edge
                                scrollbarWidth: "none", // Firefox
                            }}
                        >
                            {SuccessContent.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (sectionRefs.current[index] = el)}
                                    id={`story-${index}`}
                                    className="relative py-16 top-[-15rem]"
                                    style={{
                                        opacity: 1,
                                        transition: "opacity 0.3s ease-in-out",
                                    }}
                                >
                                    <div className="relative w-40 h-40">
                                        <img loading="lazy" 
                                            src={item.img}
                                            alt="Profile"
                                            className="w-full h-full rounded-full object-cover absolute top-56 left-0"
                                        />
                                        <h2 className="text-sm font-bold  text-center absolute w-full top-[25rem]">
                                            {item.title}
                                        </h2>
                                        <h3 className="text-sm text-center absolute w-full top-[26rem]">
                                        {item.title2}
                                        </h3>
                                    </div>
                                    <div className="ml-48 mt-16">
                                        <h3 className="text-lg font-bold ">{item.subtitle}</h3>
                                        <p className="mb-2 text-sm">{item.description}</p>
                                        <h3 className="font-semibold">Testimonial:</h3>
                                        <blockquote className="italic text-sm">{item.testimonial}</blockquote>
                                    </div>
                                </div>
                            ))}

                        </div>
                    ) : (
                        // For mobile view, render the PhoneView component
                        <PhoneView />
                    )}

                    {/* Right Section (Sticky sliding image) */}
                    {isDesktop && (
                        <div className="flex-1 relative">
                            <div
                                style={{
                                    maxWidth: "44rem",
                                    position: "sticky",
                                    top: "2rem",
                                }}
                            >
                                {/* Render the sliding image component */}
                                <SlidingImage activeIndex={activeIndex} progress={transitionProgress} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Success; 