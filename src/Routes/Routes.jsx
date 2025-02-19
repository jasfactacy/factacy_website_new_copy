import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AboutPage from "../Pages/AboutPage";
import {
    HOME_PAGE,
    ABOUT_PAGE,
    SERVICES_PAGE,
    INDUSTRIES_PAGE,
    CASE_STUDIES_PAGE,
    RESOURCES_PAGE,
    CONTACT_PAGE,
    SERVICES_PAGE_DYNAMIC_ID,
    INDUSTRIES_PAGE_DYNAMIC_ID,
    CASE_STUDIES_PAGE_DYNAMIC_ID,
    ANALYTICS_OF_THINGS_PAGE,
    CTO_PAGE,
    SOLUTIONS_PAGE,
    BLOGS_PAGE,
    WHITEPAPERS,
    WEBINARS_AND_VIDEOS_PAGE,
    FAQ_PAGE,
    TERMSANDCONDITIONS_PAGE,
    PRIVACYPOLICY_PAGE,
    COOKIEPOLICY_PAGE,
} from './routesConstents';
import ServicesPage from '../Pages/ServicesPage';
import SingleServicePage from '../Pages/SingleServicePage';
import IndustriesPage from '../Pages/IndustriesPage';
import SingleIndustryPage from '../Pages/SingleIndustryPage';
import CaseStudiesPage from '../Pages/CaseStudiesPage';
import SingleCaseStudyPage from '../Pages/SingleCaseStudyPage';
import ResourcesPage from '../Pages/ResourcesPage';
import ContactPage from '../Pages/ContactPage';
import Footer from '../components/Footer/Index';
import Terms from '../Pages/Terms';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import CookiePolicy from '../Pages/CookiePolicy';
import Analytics_of_things from '../Pages/AOT/Analytics_of_things';
import CTO from '../Pages/CTO/Cto';
import Solutions from '../Pages/Solutions';
import Indus_Tech from "../Pages/Indus_Tech";

import BlogsPage from "../Pages/BlogsPage";
import FAQPage from "../Pages/FAQPage";
import WebinarsAndVideos from "../Pages/WebinarsAndVideos";
import Whitepapers from "../Pages/Whitepapers";
const RoutesComponent = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path={HOME_PAGE} element={<Homepage />} />
                <Route path={ABOUT_PAGE} element={<AboutPage />} />
                <Route path={SERVICES_PAGE} element={<ServicesPage />} />
                <Route path={`${SERVICES_PAGE}/:${SERVICES_PAGE_DYNAMIC_ID}`} element={<SingleServicePage />} />
                <Route path={INDUSTRIES_PAGE} element={<IndustriesPage />} />
                <Route path={`${INDUSTRIES_PAGE}/:${INDUSTRIES_PAGE_DYNAMIC_ID}`} element={<SingleIndustryPage />} />
                <Route path={CASE_STUDIES_PAGE} element={<CaseStudiesPage />} />
                <Route path={`${CASE_STUDIES_PAGE}/:${CASE_STUDIES_PAGE_DYNAMIC_ID}`} element={<SingleCaseStudyPage />} />
                <Route path={RESOURCES_PAGE} element={<ResourcesPage />} />
                <Route path={CONTACT_PAGE} element={<ContactPage />} />
                <Route path={TERMSANDCONDITIONS_PAGE} element={<Terms />} />
                <Route path={PRIVACYPOLICY_PAGE} element={<PrivacyPolicy />} />
                <Route path={COOKIEPOLICY_PAGE} element={<CookiePolicy />} />
                <Route path={ANALYTICS_OF_THINGS_PAGE} element={<Analytics_of_things />} />
                <Route path={CTO_PAGE} element={<CTO />} />
                <Route path={SOLUTIONS_PAGE} element={<Solutions />} />
                <Route
                    path="/solutions/:title"
                    element={<Indus_Tech />}
                />

                <Route path={BLOGS_PAGE} element={<BlogsPage/>} />
                <Route path={WHITEPAPERS} element={<Whitepapers/>} />
                <Route path={WEBINARS_AND_VIDEOS_PAGE} element={<WebinarsAndVideos/>} />
                <Route path={FAQ_PAGE} element={<FAQPage/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RoutesComponent;
