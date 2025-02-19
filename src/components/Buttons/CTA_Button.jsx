import React from 'react'

const CTA_Button = ({ click, text, href }) => {

    const clasess = "bg-buttonCTA cursor-pointer px-4 py-2 font-semibold rounded-md text-base leading-6 font-normal text-white"

    if (href) {
        return (
            <a
                href={href}
                className={`${clasess} `}
            >
                {text}
            </a>
        )
    }

    return (
        <button
            onClick={() => click && click()} // Ensure the click handler is called here
            className={`${clasess} `}
        >
            {text}
        </button>
    )
}

export default CTA_Button;
