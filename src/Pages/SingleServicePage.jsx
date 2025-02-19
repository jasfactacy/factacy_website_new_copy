import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { SERVICES_PAGE_DYNAMIC_ID } from '../Routes/routesConstents';

const SingleServicePage = () => {
    const { [SERVICES_PAGE_DYNAMIC_ID]: servicesName} = useParams();

  return (
    <div>SingleServicePage</div>
  )
}

export default SingleServicePage;