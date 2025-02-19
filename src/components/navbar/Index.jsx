import React from "react";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import close from "../../assets/close-icon.svg";
import open from "../../assets/menu-icon.svg";
// import ChatBot from "../chatbot";
// import chat from "../../assets/icons8-chats.gif";
import FacatacyFullNavIcon from "../Icons/FacatacyFullNavIcon";
import ExpandIcon from "../Icons/ExpandIcon";
import useRoutesFunctions from "../../hooks/routes/useRoutesFunctions";
import CTA_Button from "../Buttons/CTA_Button";
import MobileNavigation from "./MobileNavigation";
import Analytics from '../../Pages/AOT/Analytics_of_things';
import Chat from "./Chat";
import chat from "../../assets/icons8-chat.gif";
import { Menu } from "lucide-react";




const Navbar = ({ isTopOfPage, openChatBot, setOpenChatBot }) => {
  const { goToCaseStudiesPage, goToContactPage, goToAboutPage, goToHomepage, goToAOTPage, goToCTOPage, goToSolutionsPage, goToIndustriesPageDynamic, goToBlogsPage, goToWhitepapers, goToWebinarsAndVideos, goToFAQPage } = useRoutesFunctions();



  const products = [

    {
      title: "Platforms",
      list: [
        {
          title: "Aicite",
          details: "AI generated news intelligence",
          redirectUrl: "https://www.aicite.ai/",
        },
        {
          title: "Insights",
          details: "AI powered Market and Business Intelligence",
          redirectUrl: "https://www.factacyinsights.com/",
        },
        {
          title: "Startupinvestor",
          details: "Start your Fundraising journey in 5 minutes",
          redirectUrl: "https://www.startupinvestors.ai/",
        },

      ]
    },
    {
      title: "Solutions",
      list: [
        {
          title: "VIP",
          details: "Custom GPT : Virtual Interactions and Personalisation",
          navigate: () => { },
        },
        {
          title: "AI agents",
          details: "",
          navigate: () => { },
        },
      ]
    },

  ];

  const services = [

    {
      title: "",
      list: [
        {
          title: "Analytics of Things",
          details: "Transform IOT data into value",
          navigate: goToAOTPage, // Define your desired route here
        },
        {
          title: "vCTO",
          details: "Get your tech team at a fractional cost",
          navigate: goToCTOPage,
        },
        {
          title: "Solutions by Industries",
          details: "Applied AI solutions for specific Industries",
          navigate: goToSolutionsPage,
        },
        {
          title: "Solutions by Technology",
          details: " Applied AI solutions using tomorrow's tech",
          navigate: goToSolutionsPage,
        },
      ]
    }
  ];

  const industries = [
    {
      title: "",
      list: [
        {
          title: "Healthcare",
          details: "",
          navigate: () => goToIndustriesPageDynamic('ai-application-healthcare-and-pharmaceutical-industry'),
        },
        {
          title: "Finance",
          details: "",
          navigate: () => goToIndustriesPageDynamic('ai-application-business-services'),
        },
        {
          title: "Retail",
          details: "",
          navigate: () => goToIndustriesPageDynamic('ai-application-internet-and-e-commerce-industry'),
        },
        {
          title: "Technology",
          details: "",
          navigate: () => goToIndustriesPageDynamic('ai-application-robotics-and-automation-industry'),
        },
      ]
    }
  ];

  const resources = [

    {
      title: "", list: [

        {
          title: "Blog",
          details: "",
          navigate: goToBlogsPage,
        },
        {
          title: "Whitepapers",
          details: "",
          navigate: goToWhitepapers,
        },

        {
          title: "Webinar and Videos",
          details: "",
          navigate: goToWebinarsAndVideos,
        },
        {
          title: "FAQ",
          details: "",
          navigate: goToFAQPage,
        },
      ]
    }

  ];
  const DESKTOP_NAVIGATION = [
    { text: 'Products', list: products },
    { text: 'Services', list: services },
    { text: 'Industries', list: industries },
    { text: 'Case Studies', navigate: goToCaseStudiesPage },
    { text: 'Resources', list: resources },
    { text: 'About Us', navigate: goToAboutPage },
  ]

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const MenuAnimationShow =
    isMenuToggled && "translateX" === 0
      ? "animate-hamburgerMenuHide"
      : "animate-hamburgerMenuShow";
  const MenuAnimationHide =
    isMenuToggled && "translateX" === 100
      ? "animate-hamburgerMenuShow"
      : "animate-hamburgerMenuHide";


  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-gradient-to-b from-blue to-transparent";
  const toggleChat = () => {
    setOpenChatBot(!openChatBot);
  };




  return (
    <nav
      className={`w-screen animate-chatbot backdrop-blur z-50 fixed top-0 ${openChatBot
        ? "bg-gradient-to-b from-white to-white lg:container"
        : navbarBackground
        } ${openChatBot ? "h-screen" : "h-20"}`}
    >
      <div className="flex items-center justify-between py-2 sm:mx-0 lg:px-6 w-full h-max font-roboto">
        <span onClick={() => goToHomepage()} className="cursor-pointer">
          <FacatacyFullNavIcon />
        </span>

        {isDesktop && (
          <div className="items-center h-20">
            <ul className="flex justify-center items-center gap-4 ml-[-2.5rem] text-sm font-semibold h-full">
              {DESKTOP_NAVIGATION.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center h-20 cursor-pointer gap-1 group"
                >
                  <p onClick={item?.navigate}>{item?.text}</p>

                  {/* Show ExpandIcon only in mobile view */}
                  {!isDesktop && <ExpandIcon />}

                  {/* Dropdown Menu */}
                  {item?.list && (
                    <ul className="top-full absolute group-hover:block hover:block hidden bg-white rounded-md w-1/5 p-6">
                      {item?.list?.map((data, index) => (
                        <li className={`${index !== 0 && "mt-8"}`} key={index}>
                          <h4 className="text-lg">{data.title}</h4>
                          <ul className="pl-4">
                            {data?.list?.map((subData, subIndex) => (
                              <li key={subIndex} className="mt-4">
                                <button
                                  className="hover:text-primaryBlue text-base leading-3 font-bold"
                                  onClick={() => {
                                    if (subData?.redirectUrl) {
                                      window.open(subData.redirectUrl, "_blank");
                                    } else if (subData?.navigate) {
                                      subData.navigate();
                                    }
                                  }}
                                >
                                  {subData?.title}
                                </button>
                                <p className="text-xs font-normal">{subData?.details}</p>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}


            </ul>
          </div>
        )}

        <div className="flex gap-2 items-center">
          {/* "Contact Us" Button - Always Visible */}
          <button
            className="flex gap-1 justify-end"
            onClick={toggleChat}
          >
            <img className="w-6 h-6" src={chat} alt="chat" />
            Contact us
          </button>

          {/* Mobile Menu Toggle Button - Only Visible in Mobile View */}
          <button
            className="flex flex-col justify-between w-6 h-6 mr-3 md:hidden"
            onClick={() => setIsMenuToggled((prev) => !prev)}
          >
            <div
              className={`w-6 h-1 bg-buttonCTA rounded transition-transform duration-300 ${isMenuToggled ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <div className={`w-6 h-1 bg-buttonCTA rounded transition-opacity duration-300 ${isMenuToggled ? "opacity-0" : "opacity-100"}`} />
            <div
              className={`w-6 h-1 bg-buttonCTA rounded transition-transform duration-300 ${isMenuToggled ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>





        {/* <ChatBot /> */}




      </div>
      {isMenuToggled && (
        <MobileNavigation
          isTopOfPage={isTopOfPage}
          openChatBot={openChatBot}
          setOpenChatBot={setOpenChatBot}
          DESKTOP_NAVIGATION={DESKTOP_NAVIGATION}
          setIsMenuToggled={setIsMenuToggled}
          isMenuToggled={isMenuToggled}
          goToAboutPage={goToAboutPage} // Passing down the function here
        />

      )}
      {/* {openChatBot && <ChatBot />} */}
    </nav>
  );

};
export default Navbar;