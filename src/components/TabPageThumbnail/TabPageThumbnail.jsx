import './TabPageThumbnail.scss';
import React from 'react'
import thumb_vid from '../../assets/video/Violet_trailer.mp4'
import N from '../../assets/images/N-logo.png'
import top10 from '../../assets/images/top10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
const TabPageThumbnail = () => {
    return (
        <div className='thumbnail-container'>
            <div className='image-overlay'></div>
            <video autoPlay controls  className='thumb-pic'>
        <source src={thumb_vid} type="video/mp4"  className='thumb-pic'/>
        Your browser does not support the video tag.
      </video>
           
           
            
            <div className='thumbnail-content'>
                
                <div className='tab-title-container'>
                     <p className='tab-title'>Anime</p>
                    <select className='genre-selector'>
                        <option value="">Thể loại</option>
                        <option value="">Hài hước</option>
                        <option value="">Shounen</option>
                        <option value="">Shoujo</option>
                        <option value="">Josei</option>
                        <option value="">Isekai</option>
                        <option value="">Slice of Life</option>
                        <option value="">Fantasy</option>
                        <option value="">Romance</option>
                        <option value="">Horror</option>
                    </select>
                    
                </div>


                <div className='Film-content'>
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
               
                <div className='access'>
                    <button className='play'>
                        <FontAwesomeIcon icon={faPlay} className='icon' />
                        <p>Phát</p>
                    </button>
                    <button className='playlist'>
                        <FontAwesomeIcon icon={faInfoCircle} className='icon' />
                        <p>Thông tin thêm</p>
                    </button>
                </div>
                </div>
                
            </div>

        </div>
    );
}

export default TabPageThumbnail;