import './step.css'
import React from 'react'

const Step1 = () => {
    return (
        <div className='step-container'>
            <p className='steps'>BƯỚC 1/3</p>
            <h2>Chào mừng bạn quay lại! Tham gia Netflix thật đơn giản.</h2>
            <p>Chỉ cần nhập mật khẩu và bạn sẽ được xem ngay lập tức.</p>
            <p className='email'>Email</p>
            <b>quidhtv0149@gmail.com</b>
            <input
                type='password'
                placeholder='Nhập mật khẩu'
            />
            <p className='forgot'>Bạn quên mật khẩu?</p>
            <button>
                <p>Tiếp theo</p>
            </button>
        </div>
    );
}

export default Step1;