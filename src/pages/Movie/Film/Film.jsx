import React from 'react';
import thumb_pic from '../../../assets/images/thumbnail.jpg'
import './film.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

const Film = () => {
    return (
        <div className='w-full h-3/4 relative flex flex-col-reverse lg:flex-row mt-20 '>
            <div className='movie-detail w-full lg:w-1/2 pl-10 pr-5 pt-8 relative'>
                <p className='font-black text-white text-4xl mb-2 '>Violet Evergarden </p>
                <ul className='flex flex-row mb-10 rating-container'>
                    <li className='text-white font-medium'>18+</li>
                    <li className='ml-3 mr-3 text-white'>|</li>
                    <li className='text-white font-medium'>2023</li>
                    <li className='ml-3 mr-3 text-white'>|</li>
                    <li className='text-green-500 font-medium rating'>
                        9.6
                        <FontAwesomeIcon icon={faStar} className='ml-1 text-green-500' />
                    </li>
                </ul>
                <ul className='flex flex-row mb-5 movie-tag'>
                    <li className='text-white font-medium mr-3 bg-gray-700 p-1 pl-3 pr-3 cursor-pointer rounded-md'>
                        Anime
                    </li>
                    <li className='text-white font-medium mr-3 bg-gray-700 p-1 pl-3 pr-3  cursor-pointer rounded-md'>
                        Anime
                    </li>
                    <li className='text-white font-medium mr-3 bg-gray-700 p-1 pl-3 pr-3  cursor-pointer rounded-md'>
                        Anime
                    </li>
                </ul>
                <p className='text-white mb-10 font-normal'>
                    Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.
                    Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.
                </p>
                <div className='access mb-12'>
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
            <div className='w-full lg:w-3/4 flex justify-start items-end flex-col lg:absolute right-0 z-0'>
                <div className='w-full lg:w-5/6 flex flex-col relative '>
                    <div className='image-overlay1'></div>
                    <div className='image-overlay2'></div>
                    <div className='image-overlay3'></div>
                    <img
                        src={thumb_pic}
                        className='w-full brightness-90'
                    />
                </div>
            </div>
        </div>
    );
}

export default Film;