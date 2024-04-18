import './signup.css'
import React from 'react'
import Step1 from './step/step1';
import Footer from '../Welcome/Footer';
import Step2 from './step/step2';
import PayStep from './step/PaymentStep/Pay';
import Step3 from './step/step3';

const SignUp = () => {
    return (
        <div className='signup-container'>
            <header>
                <h1>NETFLIX</h1>
                <p>Đăng nhập</p>
            </header>
            <Step3 />
        </div>
    );
}

export default SignUp;