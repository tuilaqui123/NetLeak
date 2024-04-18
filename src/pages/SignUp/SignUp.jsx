import './signup.css'
import React from 'react'
import Step1 from './step/step1';
import Footer from '../Welcome/Footer';
import Step2 from './step/step2';
import PayStep from './step/PaymentStep/Pay';
import Step3 from './step/step3';
import { useParams } from 'react-router-dom';

const SignUp = () => {
    const params = useParams()
    return (
        <div className='signup-container'>
            <header>
                <h1>NETFLIX</h1>
                <p>Đăng nhập</p>
            </header>
            {params.id == "step1" && (
                <Step1 />
            )}
            {params.id == "step2" && (
                <Step2 />
            )}
            {params.id == "payment" && (
                <PayStep />
            )}
            {params.id == "step3" && (
                <Step3 />
            )}
        </div>
    );
}

export default SignUp;