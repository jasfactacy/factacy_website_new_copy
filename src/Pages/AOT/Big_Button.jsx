import React from 'react'
import { useNavigate } from 'react-router'

const Big_Button = ({ text, href, navigate }) => {
    const Navigate = useNavigate();

    if (href) {
        return (
            <a
            
                href={href}
                className="bg-buttonCTA cursor-pointer py-4 lg:px-8 sm:px-5 rounded-full text-base leading-6 font-normal text-white w-fit h-14"
            >
                {text}
            </a>
        )
    }
    else if(navigate){
        return (
            <a
                onClick={()=>Navigate(navigate)}
                className="bg-buttonCTA cursor-pointer py-4 lg:px-8 sm:px-5 rounded-full text-base leading-6 font-normal text-white w-fit h-14"
            >
                {text}
            </a>
        )
    }
}

export default Big_Button;