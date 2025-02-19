import React from "react";

const FAQItem = ({ activeIndex, setActiveIndex, index, item }) => {
    return (
        <div className="p-4 lg:p-6 rounded-lg w-full lg:w-[48rem] bg-white flex items-start gap-4 overflow-hidden">
            <div className=' relative h-6 w-6 p-1 mt-[0.24rem] bg-primaryBlue rounded-full cursor-pointer'
                onClick={() => setActiveIndex(pre => pre === index ? -1 : index)}
            >
                <span className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block bg-[#FFF] '
                    style={{ width: "calc( 100% - 0.5rem)", height: "0.14rem" }}
                >
                </span>
                <span className={` ${activeIndex === index ? " rotate-90" : ""} duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block bg-[#fff] h-full w-[0.14rem]`}
                    style={{ width: "0.14rem", height: "calc( 100% - 0.5rem)" }}></span>
            </div>
            <div className=" flex-1">
                <h1
                    onClick={() => setActiveIndex(pre => pre === index ? -1 : index)}
                    className='text-xl font-medium cursor-pointer'
                >
                    {item.questions}
                </h1>
                <div
                    className={`grid mt-2 overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${activeIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <p>{item.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;