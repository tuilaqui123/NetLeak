import './info.css'
import React from "react";
import ep from '../../../../assets/images/ep1.jpg'

const EpList = () => {
    return (
        <div className="info-container">
            <ul className='ep-container'>
                <li>
                    <p className='stt'>1</p>
                    <div className='ep'>
                        <img
                            src={ep}
                            alt='movie'
                        />
                        <div className='ep-info'>
                            <p className='ep-title'>Tập 1</p>
                            <p className='content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p className='stt'>1</p>
                    <div className='ep'>
                        <img
                            src={ep}
                            alt='movie'
                        />
                        <div className='ep-info'>
                            <p className='ep-title'>Tập 1</p>
                            <p className='content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p className='stt'>1</p>
                    <div className='ep'>
                        <img
                            src={ep}
                            alt='movie'
                        />
                        <div className='ep-info'>
                            <p className='ep-title'>Tập 1</p>
                            <p className='content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p className='stt'>1</p>
                    <div className='ep'>
                        <img
                            src={ep}
                            alt='movie'
                        />
                        <div className='ep-info'>
                            <p className='ep-title'>Tập 1</p>
                            <p className='content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default EpList;