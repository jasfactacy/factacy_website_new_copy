import React, { useEffect } from "react";
import close from "../../assets/close-icon.svg";
import whatsapp from "../../assets/Contact-us/whatsapp.svg";
import mail from "../../assets/Contact-us/gmail.png";
import calender from "../../assets/Contact-us/calendar.png";
import location from "../../assets/Contact-us/location.png";

const Chat = ({ setOpenChatBot }) => {
  const options = [
    { type: "Mail", link: "mailto:connect@factacy.ai", img: mail },
    { type: "Whatsapp", link: "https://wa.me/917290980980", img: whatsapp },
    { type: "Calender", link: "https://outlook.office365.com/book/BuildAIsolutionswithFactacyAI@factacy.ai/", img: calender },
    { type: "Location", link: "/contact", img: location }
  ];

  const handleClick = (e, link, isDisabled) => {
    e.preventDefault();
    if (!isDisabled) {
      setTimeout(() => {
        window.open(link, "_blank");
      }, 150);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00000050] backdrop-blur-md"
    >
      <div className="bg-white p-6 w-[35rem] rounded-lg shadow-2xl fadeIncrease">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Contact us via</p>
          <img
            className="cursor-pointer w-6 h-6"
            src={close}
            alt="Close"
            onClick={() => setOpenChatBot(false)}
          />
        </div>

        {/* Options */}
        <div className="flex justify-center flex-wrap gap-6 pt-6">
          {options.map((item, i) => (
            <button
              key={i}
              className={`w-12 flex flex-col gap-2 items-center group transition-all ${
                item?.enable === "disabled"
                  ? "cursor-not-allowed opacity-50"
                  : "hover:scale-105"
              }`}
              disabled={item?.enable === "disabled"}
              onClick={(e) => handleClick(e, item.link, item?.enable === "disabled")}
            >
              <img
                className="w-full grayscale group-hover:grayscale-0 transition-all"
                src={item.img}
                alt={item.type}
              />
              <p className="text-sm group-hover:drop-shadow-md">{item.type}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
