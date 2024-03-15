import './film.css'
import React from 'react'
import thumb_pic from '../../../assets/images/thumbnail.jpg'
import N from '../../../assets/images/N-logo.png'
import top10 from '../../../assets/images/top10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const Film = () => {
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

                <div className='description'>
                    <p>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                </div>

            </div>

        </div>
    );
}

export default Film;