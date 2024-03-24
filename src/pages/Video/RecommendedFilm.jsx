import './Video.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css/navigation';

function RecommendedFilm({ otherFilms, currentFilm }) {
    return (
        <div className=' mt-8 '>
            <p className=' text-white text-[18px] lg:text-[24px] font-bold mb-4'>Đề xuất cho bạn</p>

            <div className='ml-8 mb-11 w-[90%]'>
                <div className='hidden md:hidden lg:block'>
                    <Swiper
                        modules={[Navigation]}
                        className=' text-white'
                        spaceBetween={20}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {otherFilms.map((film, index) => (
                            <SwiperSlide key={index} >
                                <div className='group text-white flex flex-col items-center justify-start my-3 hover:scale-[1.05] transition-all'>
                                    <div className='relative hover:cursor-pointer transition-all'>
                                        <img className=' w-[100%] rounded-[7px] object-cover mb-2' src={film.image} alt="Ảnh phim" />

                                        <div className='flex flex-col absolute top-0 right-0 bottom-0 left-0 items-center justify-center 
                                                bg-gradient-to-b from-transparent from-60% via-[black]/[.0] via-80% to-[black]/[1] to-100%
                                                group-hover:from-transparent group-hover:from-60% group-hover:via-[black]/[.6] group-hover:via-80% group-hover:to-[black]/[1] group-hover:to-100%
                                                '
                                        >
                                            <div className='hidden group-hover:flex hover:brightness-[1.1] bg-[#DC143C] rounded-[50%] w-9 h-9 items-center justify-center'>
                                                <FontAwesomeIcon icon={faPlay} size='lg' className=' text-[#fff]' />
                                            </div>

                                            <div className=' hidden group-hover:flex absolute bottom-[15px] left-[10px] right-[10px] justify-between items-center'>
                                                <p>{currentFilm.episodes.length} tập</p>

                                                <div className='opacity-90 hover:opacity-100 bg-[white] rounded-[50%] w-8 h-8 flex items-center justify-center'>
                                                    <FontAwesomeIcon icon={faBookmark} size='sm' className=' text-[red]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className=' text-white text-[14px] expandText2Row mt-2'>{film.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='hidden md:block lg:hidden'>
                    <Swiper
                        modules={[Navigation]}
                        className=' text-white'
                        spaceBetween={24}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {otherFilms.map((film, index) => (
                            <SwiperSlide key={index} >
                                <div className='group text-white flex flex-col items-center justify-start my-3 hover:scale-[1.05] transition-all'>
                                    <div className='relative hover:cursor-pointer transition-all'>
                                        <img className='w-[100%] rounded-[7px] object-cover mb-2' src={film.image} alt="Ảnh phim" />

                                        <div className='flex flex-col absolute top-0 right-0 bottom-0 left-0 items-center justify-center 
                                                bg-gradient-to-b from-transparent from-60% via-[black]/[.0] via-80% to-[black]/[1] to-100%
                                                group-hover:from-transparent group-hover:from-60% group-hover:via-[black]/[.6] group-hover:via-80% group-hover:to-[black]/[1] group-hover:to-100%
                                                '
                                        >
                                            <div className='hidden group-hover:flex hover:brightness-[1.1] bg-[#DC143C] rounded-[50%] w-9 h-9 items-center justify-center'>
                                                <FontAwesomeIcon icon={faPlay} size='lg' className=' text-[#fff]' />
                                            </div>

                                            <div className=' hidden md:flex lg:hidden group-hover:flex absolute bottom-[15px] left-[10px] right-[10px] justify-between items-center'>
                                                <p>{currentFilm.episodes.length} tập</p>

                                                <div className='opacity-90 hover:opacity-100 bg-[white] rounded-[50%] w-8 h-8 flex items-center justify-center'>
                                                    <FontAwesomeIcon icon={faBookmark} size='sm' className=' text-[red]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className=' text-white text-[14px] expandText2Row mt-2'>{film.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='md:hidden'>
                    <Swiper
                        modules={[Navigation]}
                        className=' text-white'
                        spaceBetween={24}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {otherFilms.map((film, index) => (
                            <SwiperSlide key={index} >
                                <div className='group text-white flex flex-col items-center justify-start my-3 hover:scale-[1.05] transition-all'>
                                    <div className='relative hover:cursor-pointer transition-all'>
                                        <img className='w-[100%] rounded-[7px] object-cover mb-2' src={film.image} alt="Ảnh phim" />

                                        <div className='flex flex-col absolute top-0 right-0 bottom-0 left-0 items-center justify-center 
                                                bg-gradient-to-b from-transparent from-60% via-[black]/[.0] via-80% to-[black]/[1] to-100%
                                                group-hover:from-transparent group-hover:from-60% group-hover:via-[black]/[.6] group-hover:via-80% group-hover:to-[black]/[1] group-hover:to-100%
                                                '
                                        >
                                            <div className='hidden group-hover:flex hover:brightness-[1.1] bg-[#DC143C] rounded-[50%] w-9 h-9 items-center justify-center'>
                                                <FontAwesomeIcon icon={faPlay} size='lg' className=' text-[#fff]' />
                                            </div>

                                            <div className=' flex md:hidden group-hover:flex absolute bottom-[15px] left-[10px] right-[10px] justify-between items-center'>
                                                <p>{currentFilm.episodes.length} tập</p>

                                                <div className='opacity-90 hover:opacity-100 bg-[white] rounded-[50%] w-8 h-8 flex items-center justify-center'>
                                                    <FontAwesomeIcon icon={faBookmark} size='sm' className=' text-[red]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className=' text-white text-[14px] expandText2Row mt-2'>{film.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default RecommendedFilm