import { useNavigate } from 'react-router-dom';
import {
    HOME_PAGE,
    ABOUT_PAGE,
    SERVICES_PAGE,
    INDUSTRIES_PAGE,
    CASE_STUDIES_PAGE,
    RESOURCES_PAGE,
    CONTACT_PAGE,
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
} from '../../Routes/routesConstents';

const useRoutesFunctions = () => {
    const Navigate = useNavigate();
    return {
        goToHomepage: () => Navigate(HOME_PAGE),
        goToAboutPage: () => Navigate(ABOUT_PAGE),
        goToServicesPage: () => Navigate(SERVICES_PAGE),
        goToAOTPage: () => Navigate(ANALYTICS_OF_THINGS_PAGE),
        goToCTOPage: () => Navigate(CTO_PAGE),
        goToSolutionsPage: () => Navigate(SOLUTIONS_PAGE),
        goToIndustriesPage: () => Navigate(INDUSTRIES_PAGE),
        goToCaseStudiesPage: () => Navigate(CASE_STUDIES_PAGE),
        goToResourcesPage: () => Navigate(RESOURCES_PAGE),
        goToContactPage: () => Navigate(CONTACT_PAGE),
        goToServicesPageDynamic: (serviceName) => Navigate(`${SERVICES_PAGE}/${serviceName}`),
        goToIndustriesPageDynamic: (industryName) => Navigate(`${SOLUTIONS_PAGE}/${industryName}`),
        goToCaseStudiesPageDynamic: (caseStudyId) => Navigate(`${CASE_STUDIES_PAGE}/${caseStudyId}`),

        goToBlogsPage: () => Navigate(BLOGS_PAGE),
        goToWhitepapers: () => Navigate(WHITEPAPERS),
        goToWebinarsAndVideos: () => Navigate(WEBINARS_AND_VIDEOS_PAGE),
        goToFAQPage: () => Navigate(FAQ_PAGE),
        goToTermsServicePage: () => Navigate(TERMSANDCONDITIONS_PAGE),
        goToPrivacyPolicyPage: () => Navigate(PRIVACYPOLICY_PAGE),
        goToCookiePolicyPage: () => Navigate(COOKIEPOLICY_PAGE),
    }
}

export default useRoutesFunctions;