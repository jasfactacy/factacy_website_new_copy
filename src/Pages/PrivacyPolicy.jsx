import React, {useEffect} from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-28 h-max px-32 font-roboto mb-20">
      <div
        className="flex flex-col gap-3 bg-white p-8 bg-opacity-50 rounded-3xl"
        style={{
          boxShadow: "0px 0px 50.465946197509766px 0px rgba(0, 0, 0, 0.08",
        }}
      >
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p>
          Factacy Private Limited (“Factacy”, “Us”, “Our”, “We”) know that you
          care how information about you is used and shared, and we appreciate
          your trust that we will do so carefully and sensibly. The below
          mentioned terms describe our privacy policy (“Privacy Policy”).
        </p>
        Factacy provides a research platform on interesting companies globally,
        and most of the research and information available on Factacy is
        collected from publicly available sources on the internet.
        <br />
        <br />
        <p>
          {" "}
          <b>Factacy may have your information if you are a: </b>
          <br />
          (i) User of Factacy (hereinafter defined as the “User”, “You”, “Your”)
          which shall mean user(s) of the website (www.Factacy.ai), the blog
          contained therein, browser extensions, mobile applications, generated
          reports (including export downloads and API usage), queries answered
          personally by Our team over email, phone or any other medium and any
          other service features, integrations, tools and resources, allied or
          additional services including all data contained therein (Collectively
          referred to as “Factacy”).
          <br />
          (ii) Founder, board member, investors or a key person associated with
          a company / organization or have a meaningful involvement in the
          startup ecosystem. In this case your publicly available business
          information may be with us, including your Name, your email, your
          designation and which company you work for.
          <br />
          <br />
          WE STRONGLY SUGGEST THAT YOU READ THIS PRIVACY POLICY CAREFULLY AND
          DECIDE ACCORDINGLY. BY USING FACTACY, YOU AGREE TO BE BOUND BY THE
          TERMS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THESE TERMS,
          PLEASE DO NOT USE FACTACY.
        </p>
        <br />
        <p>
          {" "}
          <b>What data do we collect and why?</b>
          <br />{" "}
          <ul className="list-decimal px-4">
            <li>Information Provided by You </li>
            <li>
              Information for Account Creation - We collect information when You
              create your account for Factacy, which means your Name, your
              professional email, the geography around which you are primarily
              interested in using Factacy around.{" "}
            </li>
            <li>
              Billing & Payment Information - Details required for billing and
              sending the bills to You.{" "}
            </li>
            <li>
              Details for Communications - Depending on how You are
              communicating with us, your postal address, emails, emails You
              included or want us to include in email correspondence, your phone
              number if you speak to us. We may reach out to you with updates
              and new launches on Factacy.{" "}
            </li>
            <li>
              We need this information of Our normal course of operations and
              are required to facilitate your usage of Factacy.{" "}
            </li>
            <li>Information We collect when you use Factacy.</li>
            <li>
              Browsing Data - Like many websites, we automatically collect some
              browsing data when you use Our Services. This data is referred to
              as "Browsing Information" and includes, but is not limited to,
              details about Your systems, browsers, IP address, referring and
              exit pages, the pages you visit, operating system, date & time,
              and clickstream data. As You Use Our Website (www.Factacy.ai) and
              its Sub-Domains, Our Browser Extensions, Our Blog, Our Mobile
              Application, Our APIs, and Related Online Services, Factacy
              collects Browsing Information. This data is used by us for service
              administration, bug fixes, and to better understand how you use
              our services. As a result, if you experience any errors on
              Factacy, we find out without you even letting us know.{" "}
            </li>
            <li>
              Cookies - We set cookies on your computer device through which you
              use Factacy. Small text files known as cookies allow our web
              servers to uniquely identify and remember you and your preferences
              for Factacy usage. We may use both transient cookies (session
              cookies) and persistent cookies (which remain on your computer
              until you delete them). Follow the instructions in your browser's
              help file to delete persistent cookies. However, some parts of our
              services might not operate correctly or at all if you choose to
              disable cookies. When Factacy is inactive for a certain amount of
              time, for instance, you might need to login.{" "}
            </li>
            <li>
              Third Party Cookie Services - Some third-party cookie services
              that are not owned by Factacy may be present on Factacy and may
              set their own Cookies. We merely permit these third-party cookie
              services to set cookies in order for them to function properly; we
              neither use nor have access to those cookies. These cookies can be
              controlled by your browser and operate under their own privacy
              policies.{" "}
            </li>
            <li>
              Links to Third-Party Websites - Factacy does not control the links
              that lead to some of the third-party websites. These links are
              only being provided for your convenience; we have no stake in
              where they are placed. These links' final destinations will have
              their own privacy policies, which may be different from the
              Privacy Policy. You should therefore exercise caution when
              clicking on those links.{" "}
            </li>
          </ul>
        </p>
        <p>
          <b>Please note : </b>
          We don’t use Your Personal Information for anything other than uses
          specified above.{" "}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
