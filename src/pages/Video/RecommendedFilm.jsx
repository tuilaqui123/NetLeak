import './Video.css'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faPlay, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function RecommendedFilm({ otherFilms, currentFilm }) {
    const [swiperElementPC, setSwiperElementPC] = useState({})
    const [swiperElementTablet, setSwiperElementTablet] = useState({})
    const [swiperElementMobile, setSwiperElementMobile] = useState({})

    useEffect(() => {
        const handleWindowResize = () => {
            swiperElementPC.slideTo(0)
            swiperElementTablet.slideTo(0)
            swiperElementMobile.slideTo(0)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    const handleSlideNext = () => {
        swiperElementPC.slideNext()
        swiperElementTablet.slideNext()
        swiperElementMobile.slideNext()
    }

    const handleSlidePrev = () => {
        swiperElementPC.slidePrev()
        swiperElementTablet.slidePrev()
        swiperElementMobile.slidePrev()
    }

    return (
        <div className=' mt-8 '>
            <p className=' text-white text-[18px] lg:text-[24px] font-bold mb-4'>Đề xuất cho bạn</p>

            <div className=' mb-11 w-[95%]'>

                {/* pc */}
                <div className='hidden md:hidden lg:block relative px-9'>
                    <Swiper
                        className=' text-white !px-2'
                        spaceBetween={20}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        onInit={(ev) => {
                            setSwiperElementPC(ev)
                        }}
                    >
                        {otherFilms.map((film, index) => (
                            <SwiperSlide key={index} >
                                <div className='group text-white flex flex-col items-center justify-start my-3 hover:scale-[1.05] transition-all'>
                                    <div className='relative hover:cursor-pointer transition-all'>
                                        <img loading='lazy' className=' w-[100%] rounded-[7px] object-cover mb-2' src={film.image} alt="Ảnh phim" />

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

                    <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='2x'
                        className={`text-[#B22222] z-10 absolute left-[0] top-[35%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='2x'
                        className={`text-[#B22222] z-10 absolute right-[0] top-[35%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                </div>

                {/* tablet */}
                <div className='hidden md:block lg:hidden relative px-11'>
                    <Swiper
                        className=' text-white !px-2'
                        spaceBetween={24}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        onInit={(ev) => {
                            setSwiperElementTablet(ev)
                        }}
                    >
                        {otherFilms.map((film, index) => (
                            <SwiperSlide key={index} >
                                <div className='group text-white flex flex-col items-center justify-start my-3 hover:scale-[1.05] transition-all'>
                                    <div className='relative hover:cursor-pointer transition-all'>
                                        <img loading='lazy' className='w-[100%] rounded-[7px] object-cover mb-2' src={film.image} alt="Ảnh phim" />

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

                    <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className='text-[#B22222] z-10 absolute left-[0] top-[30%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                    <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className='text-[#B22222] z-10 absolute right-[0] top-[30%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                </div>

                {/* moblie */}
                <div className='md:hidden relative px-11'>
                    <Swiper
                        className=' text-white !px-2'
                        spaceBetween={24}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        onInit={(ev) => {
                            setSwiperElementMobile(ev)
                        }}
                    >
                        {otherFilms.map((film, index) => (
                            <SwiperSlide key={index} >
                                <div className='group text-white flex flex-col items-center justify-start my-3 hover:scale-[1.05] transition-all'>
                                    <div className='relative hover:cursor-pointer transition-all'>
                                        <img loading='lazy' className='w-[100%] rounded-[7px] object-cover mb-2' src={film.image} alt="Ảnh phim" />

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

                    <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className='text-[#B22222] z-10 absolute left-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                    <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className='text-[#B22222] z-10 absolute right-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                </div>

            </div>
        </div>
    )
}

export default RecommendedFilm