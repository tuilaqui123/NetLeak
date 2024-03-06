import './step.css'
import React from 'react'

const Step3 = () => {
    return (
        <div className='step-container'>
            <p className='steps'>BƯỚC 3/3</p>
            <h2>Chọn cách thanh toán</h2>
            <p>Quá trình thanh toán của bạn được mã hóa và bạn có thể thay đổi cách thanh toán bất kỳ lúc nào.</p>
            <b>An toàn để an tâm.</b>
            <b>Hủy trực tuyến dễ dàng.</b>
            <div className='step3-button-container'>
                <button className='step3-button'>
                    <p>Thẻ ghi nợ hoặc thẻ tín dụng</p>
                </button>
                <button className='step3-button'>
                    <p>Ví điện tử</p>
                </button>
            </div>
        </div>
    );
}

export default Step3;