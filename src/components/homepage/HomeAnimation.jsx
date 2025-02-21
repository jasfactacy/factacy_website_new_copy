import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeAnimation = () => {
  return (
    <>
      <div className="flex items-start w-screen  gap-2 h-[3rem] md:mb-0 lg:h-[3rem] xl:h-[4rem]">
        <div className="h-full flex min-w-fit items-center">
          <h1 className="sm:text-2xl lg:text-4xl xl:text-4xl md:mb-0 sm:mb-[15rem] md:ml-0 sm:ml-[-3rem] font-semibold ">
            Business-First AI solutions<br/>that evolve with your
          </h1>
          <Swiper
          direction={"vertical"}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper sm:h-[5rem] sm:mt-[-10rem] sm:left-[-3.25rem] md:mt-6 md:left-[-5rem] lg:mt-12 lg:h-[3rem] xl:mt-12 xl:left-[-5rem] xl:h-[3rem]"
        >
          <SwiperSlide>
            <span className="font-semibold  text-[#3E91EE] flex items-center pt-[0.05rem] text-2xl lg:text-4xl xl:text-4xl">
              GEN AI
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="font-semibold  text-[#3E91EE] flex items-center pt-[0.05rem] text-2xl lg:text-4xl xl:text-4xl">
              GPT
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="font-semibold  text-[#3E91EE] flex items-center pt-[0.05rem] text-2xl lg:text-4xl xl:text-4xl">
              <span className="md:block sm:hidden">Computer vision</span>
              <span className="sm:block md:hidden">CV</span>
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className="font-semibold  text-[#3E91EE] flex items-center pt-[0.05rem] text-2xl lg:text-4xl xl:text-4xl">
              Technology
            </span>
          </SwiperSlide>
        </Swiper>
        </div>
       
        {/* {} */}

      </div >

      <h1 className="text-2xl lg:text-4xl xl:text-4xl font-semibold mb-5 relative  md:top-3 sm:top-[-7.25rem] md:ml-0 sm:ml-[-3rem] left-0.5">
        needs.
      </h1>
    </>
  );
};

export default HomeAnimation;
