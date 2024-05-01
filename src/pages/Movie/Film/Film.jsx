import React, { useState, useEffect } from 'react';
import thumb_pic from '../../../assets/images/thumbnail.jpg'
import './film.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Rating from './rating';
import clsx from 'clsx';

const Film = ({ film }) => {

    const navigate = useNavigate()

    const [isRating, setIsRating] = useState(false)


    return (
        <div className='w-full h-3/4 relative flex flex-col-reverse lg:flex-row mt-20 '>
            <div className='movie-detail w-full lg:w-1/2 pl-10 pr-5 pt-8 relative'>
                <p className='font-black text-white text-4xl mb-2 '>{film.title}</p>
                <ul className='flex flex-row items-center mb-12 rating-container'>
                    <li className='text-white font-medium'>{film.released.substring(0, 4)}</li>
                    <li className='ml-3 mr-3 text-white'>|</li>
                    <li className='text-green-500 font-medium rating'>
                        9.6
                        <FontAwesomeIcon icon={faStar} className='ml-1 text-green-500' />
                    </li>
                    <div className='w-[150px] relative ml-3'>
                        <button
                            onClick={() => setIsRating(!isRating)}
                            className='h-full w-auto border px-2 py-1 rounded-md hover:bg-white duration-150 group'
                        // className={clsx({
                        //     'h-full w-auto border px-2 py-1 rounded-md hover:bg-white duration-150 group': isRating,
                        //     'h-full w-auto border px-2 py-1 rounded-md hover:bg-white duration-150 group': !isRating
                        // })}
                        >
                            {isRating ? (
                                <p className='text-red-600 font-bold duration-150'>Xác nhận</p>
                            ) : (
                                <p className='group-hover:text-[#3e3e3e] font-bold duration-150'>Đánh giá</p>
                            )}
                        </button>
                        {isRating && (
                            <Rating />
                        )}
                    </div>
                </ul>
                <div className='flex flex-row flex-wrap gap-3 mb-5 movie-tag'>
                    {film.genres.map((value, index) =>
                        <div className='text-white font-medium bg-gray-700 p-1 pl-3 pr-3 cursor-pointer rounded-md' key={index}>
                            {value?.title}
                        </div>
                    )}
                </div>
                <p className='text-white mb-10 font-normal'>
                    {film.fullplot}
                </p>
                <div className='access mb-12'>
                    <button className='play' onClick={() => navigate(`/video/video`)}>
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
                        src={film.image.banner}
                        className='w-full brightness-90'
                    />
                </div>
            </div>
        </div>
    );
}

export default Film;