import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Industry = ({ industry: { title, image, url } }) => {
  // const updatedTitle = title?.toLowerCase()?.split(" ")?.join("-");

  const Navigate = useNavigate();
  return (
    <div
      className="bg-white font-roboto max-w-[10rem] h-40 border p-4 flex flex-col items-start justify-between rounded-xl overflow-hidden relative cursor-pointer shadow group"
      onClick={() =>
        url
          ? Navigate(`/solutions/${url}`)
          : ""
      }
    >
      <img loading="lazy"
        src={image}
        alt={title}
        className="w-1/3 group-hover:scale-125 duration-300"
      />
      <div className="h-2/5">
        <p className="text-sm font-medium text-black duration-200 w-full bg-gradient-to-b from-white to-transparent backdrop-blur">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Industry;
