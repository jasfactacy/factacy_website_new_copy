import React from "react";
import HorizontalCards from "../homepage/IndustriesCards"


const Industries = () => {
    const content = [
        {
            type: "sectionTitle",
            text: "Industries We Serve",
        },
        {
            type: "mainHeading",
            text: "AI Solutions Tailored to Your Industry.",
        },
        {
            type: "paragraph",
            text: "Whatever your industry, Factacy AI delivers AI applications that transform challenges into opportunities.",
        },
    ];

    return (
        <div className="lg:bg-gradient-to-b from-white to-[#E8F5FF]  py-16">
            <div className="container mx-auto px-4">

                {/*Feature Section*/}
                <div className="text-center items-center mb-2 text-title">
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



                <div>
                    <HorizontalCards />
                </div>
            </div>
        </div>
    );
};

export default Industries;