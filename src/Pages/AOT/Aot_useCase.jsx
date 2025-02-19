import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useCaseSvgs } from "../../data/IndustriesUseCaseSvgs";


const list = [

    {
        heading: " Precision Agriculture",
        summary: "Imagine fields where every drop of water, every ray of sunlight, and every inch of soil is optimized for growth.With IoT sensors and advanced analytics, farmers can now monitor crop health and soil conditions in real - time.At Factacy, we’re turning this data into actionable insights, helping farmers predict weather patterns, optimize irrigation, and boost crop yields like never before.",
    },
    {
        heading: "Energy Management in Smart Buildings",
        summary: "In a world of smart buildings, energy efficiency isn't just a goal—it's a reality.IoT devices capture data on everything from HVAC systems to lighting usage, but data alone isn’t enough.Factacy steps in to decode this data, revealing hidden patterns that enable facilities to reduce energy consumption, lower costs, and move closer to sustainability goals.The future of green buildings is here, and it’s powered by analytics.",
    },
    {
        heading: "Industrial Equipment Monitoring",
        summary: "Imagine a manufacturing plant where machines talk—sending real-time data about their health and performance. One machine is vibrating slightly more than usual; another is running hotter than normal. This is where Analytics of Things comes into play, predicting failures before they happen. With Factacy’s advanced predictive models, we help ensure that your production never grinds to a halt. It’s like having a crystal ball for your factory floor.",
    },
    {
        heading: "Healthcare Asset Tracking",
        summary: "In a bustling hospital, every second counts. Medical equipment needs to be in the right place at the right time, and patient vitals must be continuously monitored. With Factacy’s AoT solutions, hospitals not only track equipment but also anticipate needs, ensuring that doctors and nurses have exactly what they need, when they need it. It’s about more than efficiency—it’s about saving lives.",
    },
    {
        heading: "Smart Water Management",
        summary: "Water is our most precious resource, yet much of it is wasted through leaks and inefficiencies. Imagine a city where every drop of water is accounted for, from the reservoir to your tap. IoT sensors monitor water quality and distribution in real-time, alerting managers to leaks or contamination before they become problems. Factacy’s analytics solutions help cities optimize water use, reduce waste, and ensure a safe, reliable water supply. It’s smart, sustainable, and absolutely essential.",
    },
    {
        heading: "Retail Supply Chain Optimization",
        summary: "Picture walking into a store where every item you want is always in stock, no matter how popular it is. Behind the scenes, IoT devices are tracking inventory levels, while advanced analytics predict demand with uncanny accuracy. Factacy’s AoT solutions give retailers the power to optimize their supply chains, reduce stockouts, and enhance customer satisfaction. It’s retail reimagined—driven by data and powered by Factacy.",
    },
];

const UseCaseItem = ({ data, Svg, bg_class }) => (

    <div
        className={`flex flex-col sm:w-full lg:w-5/12 rounded-2xl ${bg_class} p-6 gap-21`}
        style={{
            boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.06)",
        }}
    >
        <Svg />
        <p className="font-bold mt-3">{data?.heading}</p>
        {/* <p className="font-bold mt-3">{data?.subHeading}</p> */}
        <p className="text-xs text-gray-600">{data?.summary}</p>
    </div>
);

const Aot_useCase = () => {
    return (
        <>
            <div className="flex flex-col gap-8 items-center sm:mt-4 lg:mt-10">

                {true && (
                    <div className="flex flex-col gap-8 items-center px-4 ">
                        <p className="text-4xl font-bold lg:-mt-8 lg:mb-3 lg:w-1/2 text-center">
                            Use Cases
                        </p>

                        <UseCaseItem
                            data={list[0]}
                            Svg={useCaseSvgs[0]}
                            bg_class={"bg-[#FFECEC]"}
                        />

                        <div className="flex sm:flex-col lg:flex-row gap-12 lg:justify-center sm:items-center">

                            <UseCaseItem
                                data={list[1]}
                                Svg={useCaseSvgs[1]}
                                bg_class={"bg-[#E4FFEB]"}
                            />

                            <UseCaseItem
                                data={list[2]}
                                Svg={useCaseSvgs[2]}
                                bg_class={"bg-yellow"}
                            />
                        </div>

                        {list[3] && (
                            <UseCaseItem
                                data={list[3]}
                                Svg={useCaseSvgs[3]}
                                bg_class={"bg-[#E8F5FF]"}
                            />
                        )}

                        <div className="flex sm:flex-col lg:flex-row gap-12 lg:justify-center sm:items-center">
                            {list[4] && (
                                <UseCaseItem
                                    data={list[4]}
                                    Svg={useCaseSvgs[4]}
                                    bg_class={"bg-purple"}
                                />
                            )}

                            {list[5] && (
                                <UseCaseItem
                                    data={list[5]}
                                    Svg={useCaseSvgs[5]}
                                    bg_class={"bg-[#FFECEC]"}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Aot_useCase;
