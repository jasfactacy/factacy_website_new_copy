import React from "react";
import FactacyFullIcon from "../Icons/FactacyFullIcon.jsx";
import TwitterIcon from "../Icons/Twitter.jsx";
import FacebookIcon from "../Icons/Facebook.jsx";
import Linkedin from "../Icons/Linkedin.jsx";
import useRoutesFunctions from "../../hooks/routes/useRoutesFunctions.js";

const Footer = () => {
  const { goToAboutPage, goToBlogsPage, goToTermsServicePage, goToFAQPage, goToPrivacyPolicyPage, goToCookiePolicyPage } = useRoutesFunctions();
  const dt = new Date();

  const tags = [
    {
      heading: "Company",
      list: [
        {
          title: "About",
          onClick: goToAboutPage,
        },
        {
          title: "Blogs",
          onClick: {},
        },
        {
          title: "FAQ",
          onClick: {},
        },
      ],
    },
    {
      heading: "Product",
      list: [
        {
          title: "Aicite",
          redirectUrl: "https://www.aicite.ai/",
        },
        {
          title: "Insights",
          redirectUrl: "https://www.factacyinsights.com/",
        },
        {
          title: "Startupinvestor",
          redirectUrl: "https://www.startupinvestors.ai/",
        },
      ],
    },
  ];

  return (
    <div className="bg-bg-footer-900 px-6 sm:px-9 lg:px-36 py-8 sm:py-12">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between md:gap-[30rem]">
        <div className="flex flex-wrap justify-between w-full gap-6 sm:gap-10">
          {tags.map((row, index) => (
            <div key={index}>
              <h2 className="text-primary-color-white-900 text-lg">{row.heading}</h2>
              {row.list.map((item, ind) => (
                <div key={ind}>
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="text-primary-color-white-700 hover:text-primary-color-white-900 transition-all duration-200 underline block"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <a
                      href={item.redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-color-white-700 hover:text-primary-color-white-900 transition-all duration-200 underline block"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Newsletter & Contact Section */}
        <div className="w-full sm:w-auto">
          {/* <p className="text-sm text-primary-color-white-300 mb-2">Subscribe to our newsletter</p>
          <input
            className="w-full sm:w-auto outline-none bg-transparent border border-primary-color-white-300 rounded px-2 py-1 text-primary-color-300 placeholder:text-sm"
            type="text"
            placeholder="Your email"
          />
          <button className="block sm:w-[10rem] bg-primary-color-900 text-primary-color-white-900 rounded py-1 mt-3">
            Submit
          </button> */}

          {/* Contact Details */}
          <div className="mt-1 flex flex-col sm:flex-row gap-4">
            <div>
              <h2 className="text-primary-color-white-900 text-md">Call Us</h2>
              <p className="text-primary-color-white-700 text-sm">+91 7290980980</p>
            </div>
            <div>
              <h2 className="text-primary-color-white-900 text-md">Email Us</h2>
              <a className="text-primary-color-white-700 text-sm" href="mailto:connect@factacy.ai">
                connect@factacy.ai
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 sm:my-12" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        {/* Logo & Copyright */}
        <div>
          <FactacyFullIcon />
          <p className="text-primary-color-white-700 text-md mt-2">
            © {dt.getFullYear()} Factacy.ai
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start text-sm mt-2 text-primary-color-white-700">
            <span className="cursor-pointer" onClick={goToTermsServicePage}>
              Terms and Conditions
            </span>
            <span className="mx-1"> | </span>
            <span className="cursor-pointer" onClick={goToPrivacyPolicyPage}>
              Privacy Policy
            </span>
            <span className="mx-1"> | </span>
            <span className="cursor-pointer" onClick={goToCookiePolicyPage}>
              Cookie Policy
            </span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/company/factacy/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://twitter.com/FactacyAI/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.facebook.com/factacydotAI/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
