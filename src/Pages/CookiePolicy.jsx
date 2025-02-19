import React, { useEffect } from "react";


const CookiePolicy = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="pt-28 h-max px-32 font-roboto mb-20">
      <div
        className="flex flex-col gap-8 bg-white p-8 bg-opacity-50 rounded-3xl"
        style={{
          boxShadow: "0px 0px 50.465946197509766px 0px rgba(0, 0, 0, 0.08",
        }}
      >
        <h1 className="text-4xl font-bold">Cookie Policy</h1>
        <p>
          <b>Why should I read this? </b>
          <br />
          This Website (www.factacy.ai) uses Cookies to personalize your user
          experience and provide you uninterrupted services. When you use this
          Website, some information related to how you use this Website is
          automatically collected through Cookies. Hence, it's good if you can
          read this and take an informed decision to use this Website.{" "}
        </p>

        <p>
          {" "}
          <b>What are Cookies and what do they do?</b>
          <br />
          The server of this Website needs to be able to uniquely identify you
          in order to give you a personalized experience and remember your
          preferences while you use this Website. To achieve this, a small text
          file containing a string of characters is downloaded to your device
          when you use this website. Cookies are the name given to these tiny
          text files. The next time you visit the Website, your browser will
          send these Cookies to our servers, which will then recognize your
          device and handle your request appropriately.
        </p>

        <p>
          {" "}
          <b>What are the types of Cookies used in this website?</b>
          <br />
          This website uses the following Cookies :
          <br />{" "}
          <ul className="list-decimal px-4">
            <li>
              Session Cookies - Every time you use this website, temporary
              cookies called session cookies are created. Your browser deletes
              these cookies when the browser is closed. They must remember your
              preferences when you switch between pages so that you don't have
              to repeatedly enter the same information for every new page.
            </li>
            <li>
              Persistent Cookies - Persistent cookies enable faster and more
              convenient access to this website by identifying and remembering
              your settings and preferences each time you visit (until you log
              out). As an example, you won't need to log in again each time you
              visit. In addition, these cookies aid in customizing your
              experience.{" "}
            </li>
            <li>
              Third Party Cookies - This website contains parts that are
              provided by third parties, and in order for those third parties'
              services to operate as intended, those third parties must set
              cookies.{" "}
            </li>
          </ul>
        </p>

        <p>
          <b>Can I control and manage these cookies? </b>
          <br />
          If you are using this Website, you agree that this Website can store
          Cookies on your device. The methods listed below allow you to choose
          how to manage cookies, but since some of these cookies are essential
          to this website's operation, some features may not work properly or
          may not be available at all.
          <br />
          (You can control cookies through your browser settings.)
        </p>

        <p>
          <b>Updates to this cookie policy</b>
          <br />
          We will occasionally update this Cookie Policy. You are advised to
          review this policy frequently to stay informed about how this
          website's cookies are being used.
        </p>

        <p>
          <b>DISCLOSURE OF INFORMATION UNDER LAW</b>
          <br />
          The information / data collected from you may be shared or disclosed
          without obtaining your prior written consent if such disclosure is
          mandated under the applicable law.
        </p>

        <p>
          <b>CONDITIONS OF USE, NOTICES, AND REVISIONS </b>
          <br />
          If you choose to visit Factacy, your visit and any dispute over
          privacy is subject to the terms of this Privacy Policy, including
          limitations on damages, resolution of disputes, and application of the
          law. If you have any concern about privacy at Factacy, please contact
          us at hi@factacy.ai. Privacy Policy is updated from time to time to
          adhere to new regulations and meet new business requirements. If there
          is a change to the Privacy Policy, we will update it here.{" "}
        </p>

        <p>
          <b>JURISDICTION </b>
          <br />
          The terms stated here shall be governed and interpreted by and
          construed in accordance with the laws of India and the courts having
          ordinary original jurisdiction at Delhi, India shall have exclusive
          jurisdiction.
        </p>

        <p>
          <b>Queries </b>
          <br />
          For any queries related to Privacy Policy, please write to us at :{" "}
          <u>hi@factacy.ai</u>
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
