import { useState } from "react";
import FactacyFullNavIcon from "../Icons/FacatacyFullNavIcon";
import ExpandIcon from "../Icons/ExpandIcon";
import useMediaQuery from "../../hooks/useMediaQuery.js";
import close from "../../assets/close-icon.svg";
import useRoutesFunctions from "../../hooks/routes/useRoutesFunctions"; // Import routes functions

const Bar = ({ data, goToAboutPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <li
                className={`flex p-4 rounded-xl w-full items-center justify-between transition-all ease-in-out duration-300 cursor-pointer ${
                    isOpen ? "bg-blue" : "bg-gray-100"
                }`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <p className="text-lg font-bold">{data?.text}</p>
                
                {/* Ensure ExpandIcon is always present */}
                {data?.list && (
                    <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                        <ExpandIcon />
                    </div>
                )}
            </li>

            {data?.list && isOpen && (
                <ul className="p-2 flex flex-col gap-4 animate-navigationList">
                    {data.list.map((item, index) => (
                        <li className={`${index !== 0 ? "mt-8" : ""}`} key={index}>
                            <h4 className="text-lg">{item.title}</h4>
                            <ul className="pl-4">
                                {item.list.map((subItem, subIndex) => (
                                    <li key={subIndex} className="mt-4">
                                        <button
                                            className="hover:text-primaryBlue text-base font-bold"
                                            onClick={() => {
                                                if (subItem?.redirectUrl) {
                                                    window.open(subItem.redirectUrl, "_blank");
                                                } else if (subItem?.navigate) {
                                                    subItem.navigate();
                                                } else if (subItem?.title === "About Us") {
                                                    goToAboutPage();
                                                }
                                            }}
                                        >
                                            {subItem.title}
                                        </button>
                                        <p className="text-xs font-normal">{subItem.details}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

const MobileNavigation = ({
    isTopOfPage,
    openChatBot,
    setOpenChatBot,
    DESKTOP_NAVIGATION,
    setIsMenuToggled,
    isMenuToggled,
    goToAboutPage,
}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const { goToCaseStudiesPage, goToContactPage, goToHomepage, goToAOTPage, goToCTOPage, goToSolutionsPage, goToIndustriesPageDynamic, goToBlogsPage, goToWhitepapers, goToWebinarsAndVideos, goToFAQPage } = useRoutesFunctions();

    const navbarBackground = isTopOfPage ? "" : "bg-gradient-to-b from-blue to-transparent";

    const toggleChat = () => setOpenChatBot((prev) => !prev);

    return (
        <div
            className={`fixed inset-0 h-screen w-screen transition-transform duration-300 ${
                isMenuToggled ? "animate-hamburgerMenuShow" : "animate-hamburgerMenuHide"
            } ${isMenuToggled ? "overflow-hidden" : "overflow-auto"}`}
        >
            <div className="flex flex-col h-full bg-white backdrop-blur pr-2 gap-8 text-sm font-semibold">
                <div className="flex justify-between py-2 px-4">
                    <a href="https://www.factacy.ai/">
                        <FactacyFullNavIcon />
                    </a>
                    <img loading="lazy"
                        onClick={() => setIsMenuToggled((prev) => !prev)}
                        className="cursor-pointer"
                        src={close}
                        alt="Close Menu"
                    />
                </div>

                <div className="flex flex-col justify-between h-full pb-4">
                    <ul className="p-6 gap-3 flex flex-col">
                        {DESKTOP_NAVIGATION?.map((item, index) => (
                            <Bar
                                key={index}
                                data={item}
                                goToAboutPage={goToAboutPage}
                            />
                        ))}
                    </ul>

                    <div className="flex gap-1 justify-end">
                        <button
                            className="text-base font-semibold text-primaryBlue"
                            onClick={goToContactPage}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
