import './thumbnail.css'
import React from 'react'
import thumb_pic from '../../assets/images/thumbnail.jpg'
import N from '../../assets/images/N-logo.png'
import top10 from '../../assets/images/top10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
const Thumbnail = () => {
    return (
        <div className='thumbnail-container'>
            <div className='image-overlay'></div>
            <img
                src={thumb_pic}
                alt="thumb-pic"
                className='thumb-pic'
            />
            <div className='thumbnail-content'>
                <div className='title'>
                    <div className='tag'>
                        <img
                            src={N}
                            alt='N-logo'
                        />
                        <p>SERIAL</p>
                    </div>
                    <h1>VIOLET EVERGARDEN</h1>
                </div>
                <div className='ranking'>
                    <img
                        src={top10}
                        alt='top10'
                    />
                    <p>#1 DANH SÁCH THỊNH HÀNH</p>
                </div>
                <div className='description'>
                    <p>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                </div>
                <div className='access'>
                    <button className='play'>
                        <FontAwesomeIcon icon={faPlay} className='icon' />
                        <p>Phát</p>
                    </button>
                    <button className='playlist'>
                        <FontAwesomeIcon icon={faPlus} className='icon' />
                        <p>Danh sách</p>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Thumbnail;