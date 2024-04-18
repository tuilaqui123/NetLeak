import './pay.css'
import React from 'react'

const OptionContent = ({ title, content }) => {
    return (
        <div className='option-content'>
            <p className='option-title'>{title}</p>
            <p>{content}</p>
        </div>
    );
}

export default OptionContent;