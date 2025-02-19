import React from "react";
import factacy from "../../assets/factacy_logo.svg";
import sun from "../../assets/CTO/sun.svg";

const Cto_as_a_service = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-between items-center bg-gradient-to-b to-[#E8F5FF] from-white lg:px-32">
      <div className="flex items-center ">
        <img loading="lazy" src={factacy} className="w-12" />
        <p className="font-semibold text-2xl text-primaryBlue">
          CTO as a Service (CaaS) Benefits:
        </p>
      </div>

      {/* <div class="relative flex justify-center items-center">
  <img loading="lazy" src={sun} class="w-2/5" />

  <div class="absolute inset-0 flex items-center justify-center">
    <div class="relative">
      <div class="absolute w-px h-40 border-l-[3px] border-dashed right-72  border-black transform origin-bottom rotate-[-75deg]"></div>
      <div class="absolute w-px h-40 border-l-[3px] border-dashed right-56 -bottom-20 border-black transform origin-bottom rotate-[-60deg]"></div>
      <div class="absolute w-px h-40 border-l-[3px] border-dashed right-32 bottom-2 border-black transform origin-bottom rotate-[-45deg]"></div>
      <div class="absolute w-px h-40 border-l-[3px] border-dashed right-0 bottom-5 border-black transform origin-bottom rotate-[1deg]"></div>
      <div class="absolute w-px h-40 border-l-[3px] border-dashed left-28 bottom-2 border-black transform origin-bottom rotate-[45deg]"></div>
      <div class="absolute w-px h-40 border-l-[3px] border-dashed left-52  -top-24 border-black transform origin-bottom rotate-[60deg]"></div>
      <div class="absolute w-px h-40 border-l-[3px] border-dashed left-64 border-black transform origin-bottom rotate-[75deg]"></div>
    </div>
  </div>

  <div class="absolute top-0 w-full h-full flex flex-wrap items-center justify-center">
    <div class="absolute left-4 top-24 w-1/4 ">
      <p class="text-sm font-semibold text-left">Cost Savings: Pay only for <br/>what you need, avoiding <br/>full-time employee costs.</p>
    </div>
    <div class="absolute left-10 top-12 w-1/4 ">
      <p class="text-sm font-semibold text-left">Expertise: Access seasoned<br/> technical leadership without<br/> a full-time hire.</p>
    </div>
    <div class="absolute left-36 top-6 w-1/4 ">
      <p class="text-sm font-semibold text-left">Scalability: Services grow<br/> with your business and<br/> adapt to tech changes.</p>
    </div>
    <div class="absolute right-36 top-6 w-1/4">
      <p class="text-sm font-semibold text-left">Quality Assurance:<br/> Oversee code reviews<br/> and compliance.</p>
    </div>
    <div class="absolute right-10 top-12 w-1/4">
      <p class="text-sm font-semibold text-left">Flexibility: Focus on <br/> core functions with<br/> adaptable support.</p>
    </div>
    <div class="absolute -right-4 top-40 w-1/4">
      <p class="text-sm font-semibold text-left">Efficient Recruitment: Skip <br/> the lengthy hiring and<br/> onboarding processes.</p>
    </div>
    <div class="absolute right-4 bottom-24 ">
      <p class="text-sm font-semibold text-left">Leadership: Guidance and <br/> mentorship for your team,<br/> plus project and workflow <br/> management.</p>
    </div>
  </div>
</div> */}
      <img loading="lazy" src={sun} />
    </div>
  );
};

export default Cto_as_a_service;
