import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SERVICES_PAGE_DYNAMIC_ID } from '../Routes/routesConstents';

const SingleCaseStudyPage = () => {

    const { [SERVICES_PAGE_DYNAMIC_ID]: pageId } = useSearchParams();
    console.log(pageId);


    useEffect(() => { alert(pageId)}, [])
    return (
        <div>SingleCaseStudyPage
            <p>{pageId}</p>
        </div>
    )
}

export default SingleCaseStudyPage