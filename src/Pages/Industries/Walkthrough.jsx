import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Walkthrough = ({industry}) => {
  return (
    <div className="flex flex-col mt-12 items-center w-full gap-2 ">
      <SectionTitle text={industry?.title} />
      <h3 className="text-3xl font-bold">Walkthrough Video</h3>
      <div className="sm:w-full lg:px-12">
        <iframe
          className="rounded-xl w-full aspect-video"
          src="https://www.youtube.com/embed/3bwUxXTG0P0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Walkthrough;
