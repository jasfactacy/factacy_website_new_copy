import React from "react";
import Iphone from "../../assets/iphone.png";
import IphoneBG from "../../assets/iphonebg.png";
import IphoneBox1 from "../../assets/iphonebox1.png";
import IphoneBox2 from "../../assets/iphonebox2.png";
import TickMark from "../../assets/tickmark.png";

const Resources = () => {
    const content = [
        {
            type: "sectionTitle",
            text: "Resources & Insights",
        },
        {
            type: "mainHeading",
            text: "Stay Ahead with the Latest in AI",
        },
        {
            type: "paragraph",
            text: "Explore Factacy AI’s curated resources to learn how AI technology and IoT analytics can transform your business:",
        },
    ];

    return (
        <div className="lg:bg-gradient-to-b from-white to-[#E8F5FF] py-16">
            {/* Top Section */}
            <div className="container mx-auto px-4">
                {/* Features Section */}
                <div className="text-center mb-2 text-blue-500">
                    <h3 className="text-md font-semibold">
                        {content[0].text}
                    </h3>
                </div>

                {/* Reason Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-4 max-w-4xl mx-auto">
                        {content[1].text}
                    </h2>
                    <p className="text-center text-gray-600 max-w-4xl mx-auto">
                        {content[2].text}
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex sm:flex-col md:flex-row relative">
                {/* Left section (Images) */}
                <div className="flex-1 relative top-0 h-full mb-10 sm:mb-0 flex justify-center">
                    <div className="relative sm:w-[12rem] md:w-[18rem] sm:ml-[-4rem] md:ml-0 lg:ml-0 xl:ml-0">
                        <img loading="lazy"
                            id="mac"
                            src={Iphone}
                            alt="Foreground image"
                            className="relative w-full transition-opacity duration-1000 ease-in-out z-10 sm:ml-10 md:ml-0 lg:ml-0 xl:ml-0"
                        />
                        <img loading="lazy"
                            id="mac"
                            src={IphoneBG}
                            alt="Background image"
                            className="absolute inset-0 w-[130%] h-[130%] sm:top-[-8rem] md:top-[-13rem] transition-opacity rotate-90 duration-1000 ease-in-out sm:ml-[2rem]"
                        />
                        <img loading="lazy"
                            id="mac"
                            src={IphoneBox1}
                            alt="Foreground image"
                            className="relative w-3/4 transition-opacity duration-1000 ease-in-out z-10 sm:top-[-10rem] md:top-[-15rem] sm:ml-[-4rem] md:ml-[-9rem]"
                        />
                        <img loading="lazy"
                            id="mac"
                            src={IphoneBox2}
                            alt="Foreground image"
                            className="relative w-3/4 transition-opacity duration-1000 ease-in-out z-10 sm:top-[-20rem] md:top-[-30rem] sm:ml-[11.5rem] md:ml-[13rem]"
                        />
                    </div>
                </div>

                {/* Right Section (Text) */}
                <div className="flex-1 relative flex flex-col justify-center px-6 sm:px-10">
                    <div className="space-y-8 text-center sm:text-left sm:ml-10 sm:mb-60">
                        {/* Blog */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="p-4 bg-blue-500 text-white rounded-full w-12 h-12 flex justify-center items-center">
                                <img loading="lazy" src={TickMark} alt="Tick Mark" className="w-auto h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Blog</h3>
                                <p className="text-gray-600">Insights and strategies for scaling with AI.</p>
                            </div>
                        </div>

                        {/* Whitepapers */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="p-4 bg-green-500 text-white rounded-full w-12 h-12 flex justify-center items-center">
                                <img loading="lazy" src={TickMark} alt="Tick Mark" className="w-auto h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Whitepapers</h3>
                                <p className="text-gray-600">In-depth reports on AI development and industry trends.</p>
                            </div>
                        </div>

                        {/* Webinars & Videos */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="p-4 bg-red-500 text-white rounded-full w-12 h-12 flex justify-center items-center">
                                <img loading="lazy" src={TickMark} alt="Tick Mark" className="w-auto h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Webinars & Videos</h3>
                                <p className="text-gray-600">Expert tips on applying AI to achieve measurable growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Resources;