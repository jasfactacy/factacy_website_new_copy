import React, { useEffect } from 'react';
import mainImg from "../../assets/AOT/analyze-aot.svg"
// import Aot_useCase from './Aot_useCase';
// import dashboard from '../../assets/AOT/Design Mockup_NoBG.png';
import dashboard from '../../assets/AOT/dashboard.png';
import blueOrb from "../../assets/AOT/blue-orb.svg"
import IntrectionImg from "../../assets/AOT/Intrection.svg"
import blueArrow from "../../assets/AOT/Arrow.svg"
import feature_icon_1 from "../../assets/AOT/feature-icon-1.svg"
import feature_icon_2 from "../../assets/AOT/feature-icon-2.svg"
import feature_icon_3 from "../../assets/AOT/feature-icon-3.svg"
import feature_icon_4 from "../../assets/AOT/feature-icon-4.svg"
import feature_icon_5 from "../../assets/AOT/feature-icon-5.svg"
import feature_icon_6 from "../../assets/AOT/feature-icon-6.svg"
import Big_Button from './Big_Button';
import Aot_useCase from './Aot_useCase';

const interactive_points = [
    {
        text: "Live Monitoring",
        heading: "Stay updated with real-time data from all your connected devices."
    },
    {
        text: "Custom Views",
        heading: "Tailor the dashboard to focus on the metrics that matter most"
    },
    {
        text: "Predictive Insights",
        heading: "Get ahead of issues with integrated predictive analytics."
    },
    {
        text: "Actionable Data",
        heading: "Turn insights into decisions with intuitive visualizations"
    },
    {
        text: "Team Collaboration",
        heading: " Share and collaborate on data effortlessly"
    },
]

const key_featurs = [
    {
        image: feature_icon_1,
        heading: "Real-Time Monitoring",
        text: "Track live data from all connected devices",
    },
    {
        image: feature_icon_2,
        heading: "Customizable Views",
        text: "Personalize dashboards to focus on key metrics",
    },
    {
        image: feature_icon_3,
        heading: "Predictive Alerts",
        text: "Receive early warnings of potential issues",
    },
    {
        image: feature_icon_4,
        heading: "Seamless Integration",
        text: "Connect with existing systems effortlessly",
    },
    {
        image: feature_icon_5,
        heading: "Intuitive Visuals",
        text: "Simplify data with clear, actionable graphics.",
    },
    {
        image: feature_icon_6,
        heading: "Collaborative Access",
        text: "Share insights and reports with your team easily",
    },
]


const Analytics_of_things = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <div className='p-4 pt-24 lg:p-64 lg:pt-2 relative lg:bg-gradient-to-b from-[#E8F5FF] to-white '>
            <div className=' lg:container'>
                <img loading="lazy" className=' absolute w-[45%] top-[200vh] -translate-x-1/2 -translate-y-1/2 left-0 z-0 opacity-5 invisible lg:visible' src={blueOrb} alt="" />
                {/* Home Section */}
                <div className=' w-full flex flex-col lg:flex-row lg:items-center lg:gap-16 min-h-screen relative z-20'>
                    <div className=' flex-1 flex flex-col gap-6'>
                        <h1 className=' text-5xl font-bold font-roboto'>Analytics of Things</h1>
                        <h1 className=' text-3xl font-roboto'>Analyze IoT data in real-time and drive meaningful change.</h1>
                        <h1 className=' text-xl font-roboto'>In a world where devices are interconnected, the data they generate
                            holds the key to smarter decisions and better outcomes</h1>
                        <Big_Button text={"Chat with us"} href={"mailto:connect@factacy.ai?Subject=Aot enquiry"} />
                    </div>
                    <div className=' flex-1'>
                        <img loading="lazy" src={mainImg} alt="" />
                    </div>
                </div>
                {/* Home Section */}
                <div className='pt-20 w-full flex flex-col lg:flex-row lg:items-center lg:gap-16 min-h-screen relative z-20'>
                    <div className=' flex-1 flex flex-col gap-6'>
                        <h1 className=' text-5xl font-bold'>Visualize, Analyze, Act
                            with custom dashboards</h1>
                        <h1 className=' text-3xl'>We provide intuitive, customizable dashboards that bring your IoT data to life</h1>
                        <Big_Button text={"Get started"} href={"mailto:connect@factacy.ai"} />
                    </div>
                    <div className=' flex-1 '>
                        <img loading="lazy"
                            src={dashboard}
                            // className=' h-4/6'
                            alt=""
                        />
                    </div>
                </div>
                {/* Intrection */}
                <div className='pt-20 w-full flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-16 min-h-screen relative z-40'>
                    <div className=' flex-1'>
                        <img loading="lazy" src={IntrectionImg} alt="" />
                        <h1 className=' text-[1.25rem]'>Our customizable dashboards offer a clear view of your
                            IoT ecosystem, making it easy to monitor, analyze, and
                            act on data.
                        </h1>
                    </div>
                    <div className=' flex-1 flex flex-col gap-6'>
                        <h1 className=' text-4xl font-bold '>Interactive <span className=' text-primaryBlue'>Dashboards</span><br />
                            Visualize Your IoT Data in Real-Time</h1>
                        <div className='flex flex-col gap-2'>
                            {interactive_points.map((item, index) => (
                                <div className=' flex gap-4' key={index}>
                                    <img loading="lazy" src={blueArrow} className=' h-8 mt-1' alt="" />
                                    <h1 className=' text-[1.25rem] leading-7'><span className=' font-bold'>{item.text}: </span> {item.heading}</h1>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {/* Key Featurs */}
                <div className=' pt-12 w-full min-h-screen flex flex-col justify-center relative z-40'>
                    <h1 className=' text-4xl font-bold'>
                        Key Featurs:
                    </h1>
                    <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-40 gap-y-12 mt-20'>
                        {key_featurs.map((item, index) => (
                            <div className=' flex flex-col gap-0 items-start' key={index}>
                                <img loading="lazy" className=' h-16 my-1' src={item.image} alt={`key-featurs-${index}`} />
                                <h3 className=' font-bold text-xl'>{item.heading}</h3>
                                <p className=' text-lg'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Aot_useCase />
            </div>
        </div>
    )
}

export default Analytics_of_things;