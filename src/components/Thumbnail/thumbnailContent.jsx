import React, { lazy } from "react";
import thumb_pic from '../../assets/images/thumbnail.jpg'
import N from '../../assets/images/N-logo.png'
import top10 from '../../assets/images/top10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
const ThumbnailContent = ({ data, index }) => {
    return (
        <>
            <div className='w-full h-auto absolute'>
                <img
                    src={data.image.banner}
                    alt="thumb-pic"
                    className="w-full h-screen brightness-[70%] absolute"
                />
            </div>
            <div className='relative w-full h-full flex items-center justify-center brightness-110'>
                <div className='w-[95%] h-4/5 flex flex-col justify-evenly'>
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center'>
                                <img
                                    src={N}
                                    alt='N-logo'
                                    className='w-7'
                                />
                                <p>SERIAL</p>
                            </div>
                            <h1 className='text-5xl font-bold text-white mt-5 mb-10'>{data.title.toUpperCase()}</h1>
                        </div>
                        <div className='flex flex-row items-center mb-5'>
                            <img
                                src={top10}
                                alt='top10'
                                onLoad={lazy}
                                className='w-7'
                            />
                            <p className="text-xl" >#{index} DANH SÁCH THỊNH HÀNH</p>
                        </div>
                        <p className='w-1/2 text-lg'>{data.fullplot.substring(0, 200)}...</p>
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
        </>
    );
}

export default ThumbnailContent;