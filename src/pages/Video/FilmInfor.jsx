import React, { useRef, useState } from 'react'
import './Video.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleUp, faAngleDown, faL } from '@fortawesome/free-solid-svg-icons';
import IWantEvaluate from './IWantEvaluate';

function FilmInfor({ currentFilm }) {
    const expandTextElement = useRef(null)
    const [isExpand, setIsExpand] = useState(false)

    return (
        <div>
            <div className='flex items-center mt-4'>
                <div className='text-[#FF4500] font-medium flex items-center'>
                    <p className='text-[17px] md:text-[19px] lg:text-[20px] font-bold'>{currentFilm.rating.average}</p>

                    <FontAwesomeIcon icon={faStar} size='lg' className='ml-1 text-[#FF4500] hidden md:block' />
                    <FontAwesomeIcon icon={faStar} size='sm' className='ml-1 text-[#FF4500] md:hidden' />
                </div>

                <div className='text-white/[.5] text-[12px] md:text-[14px] lg:text-[15px]'>
                    <p>{'('}
                        {
                            currentFilm.rating.quantity < 1000 ?
                                currentFilm.rating.quantity + ' lượt đánh giá'
                                :
                                currentFilm.rating.quantity < 1000000 ?
                                    (currentFilm.rating.quantity / 1000) + 'k lượt đánh giá'
                                    :
                                    (currentFilm.rating.quantity / 1000000) + 'tr lượt đánh giá'
                        }
                        {")"}
                    </p>
                </div>

                <IWantEvaluate />
            </div>

            <ul className=' flex flex-row rating-container mt-1'>
                <li className='text-[13px] md:text-[15px] lg:text-[18px] text-white font-medium'>{currentFilm.age}+</li>
                <li className='text-[13px] md:text-[15px] lg:text-[18px] ml-3 mr-3 text-white'>|</li>
                <li className='text-[13px] md:text-[15px] lg:text-[18px] text-white font-medium'>{currentFilm.yearOfProduction}</li>
                <li className='text-[13px] md:text-[15px] lg:text-[18px] ml-3 mr-3 text-white'>|</li>
                <li className='text-[13px] md:text-[15px] lg:text-[18px] text-white font-medium'>{currentFilm.episodes.length} tập</li>
            </ul>

            <ul className='flex flex-row rating-container mt-2 flex-wrap'>
                {currentFilm.types.map((type, index) => (
                    <li
                        key={index}
                        className='text-white mr-3 text-[12px] md:text-[13px] lg:text-[14px] mt-2 px-1 py-1 bg-[#24262B] hover:cursor-pointer'>{type}
                    </li>
                ))}
            </ul>

            <div className='mt-4 flex flex-col '>
                <p ref={expandTextElement} className='text-[14px] md:text-[15px] lg:text-[16px] text-white text-justify expandText2Row'>{currentFilm.description}</p>

                <div
                    className=' self-end hover:cursor-pointer'
                    onClick={() => {
                        expandTextElement.current.classList.toggle("expandText2Row")
                        setIsExpand(!isExpand)
                    }}
                >
                    <div className='flex justify-center items-center'>
                        <p
                            className='text-[#FF4500] font-bold text-[14px] lg:text-[15px]'>{isExpand ? 'Thu gọn giới thiệu' : 'Hiển thị thêm'}
                        </p>
                        {isExpand ?
                            <FontAwesomeIcon icon={faAngleUp} size='lg' className='ml-2 text-[#FF4500]' />
                            :
                            <FontAwesomeIcon icon={faAngleDown} size='lg' className='ml-2 text-[#FF4500]' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmInfor