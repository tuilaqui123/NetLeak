import './pay.css'
import React from 'react'
import OptionContent from './OptionContent';

const PaymentOption = ({ bg, name, opt, isClick }) => {

    const bgStyle = {
        background: bg.bg1
    }

    return (
        <>
            <div className='name' style={bgStyle}>
                <p className='p-name'>{name.titleContent}</p>
                <p>{name.nameContent}</p>
            </div>
            {opt.map((value, index) => {
                return (
                    <OptionContent
                        key={index}
                        title={value.title}
                        content={value.name}
                    />
                );
            })}
        </>
    );
}

export default PaymentOption;