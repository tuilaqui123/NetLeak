import PaymentOption from './PaymentOption';
import PaymentOptionJSON from '../../../../JSON/PaymentOption.json';
import './pay.css'
import React from 'react'

const PayStep = () => {

    function ok() {
        console.log(1)
    }

    return (
        <div className='paystep-container'>
            <p className='steps'>BƯỚC 2/3</p>
            <h2 className='step2-h2'>Chọn gói dịch vụ của bạn.</h2>
            <div className='payment-option'>
                {PaymentOptionJSON.map((value, index) => {
                    return (
                        <div className='payment-option-container' key={index}>
                            <PaymentOption
                                bg={value.background}
                                name={value.name}
                                opt={value.options}
                                isClick={false}
                            />
                        </div>
                    );

                })}

            </div>
            <button className='step2-button'>
                <p>Tiếp theo</p>
            </button>
        </div>
    );
}

export default PayStep;