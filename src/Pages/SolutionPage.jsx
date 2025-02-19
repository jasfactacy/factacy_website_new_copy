import React from 'react';

const SoluitonPage = ({ IndustriesData }) => {
    const { title } = useParams();
    const [industry, setIndustry] = useState(
      IndustriesData.find((industry) => industry.url === title)
    );
  
    const [existingMetaTags, setExistingMetaTags] = useState({
      description: document
        .querySelector('meta[name="description"]')
        .getAttribute("content"),
      keywords: document
        .querySelector('meta[name="keywords"]')
        .getAttribute("content"),
      title: document.getElementsByTagName("title")[0].innerText,
    });
  
    useEffect(() => {
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", industry.meta.description);
      document
        .querySelector('meta[name="keywords"]')
        .setAttribute("content", industry.meta.keywords);
      document.getElementsByTagName("title")[0].innerText = industry.meta.title;
  
      return () => {
        document
          .querySelector('meta[name="description"]')
          .setAttribute("content", existingMetaTags.description);
  
        document
          .querySelector('meta[name="keywords"]')
          .setAttribute("content", existingMetaTags.keywords);
  
        document.getElementsByTagName("title")[0].innerText =
          existingMetaTags.title;
      };
    }, []);
  
    useEffect(() => {
      let industry = IndustriesData.find((industry) => industry.url === title);
  
      if (industry) {
        setIndustry(industry);
      }
    }, [title, IndustriesData]);
  
    // const useCases = industry?.description?.find(
    //   (descriptionItem) => descriptionItem.text === "Use Cases"
    // );
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="sm:px-4 sm:py-20 lg:px-32 font-roboto lg:py-44 xxl:container"
      >
        {industry ? (
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <UseCase industry={industry} />
              <CaseStudy industry={industry} />
              <Walkthrough industry={industry} />
            </div>
          </div>
        ) : (
          "No industry found with that name :("
        )}
  
        {/* <img loading="lazy" src={image} alt='' className='w-80 h-40' />
          <p>{heading.map((heading, index) => (
              <p className='text-2xl mt-6' key={index}>{heading.text}
                  <p className='text-base'>{description.map((description, index) => (
                      <p className='mt-2' key={index}>{description.text}</p>))}
                  </p>    
              </p>))}
          </p> */}
      </motion.div>
    );
  };

export default SoluitonPage; 