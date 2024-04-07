import './Video.css'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faPlay, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function RecommendedFilm({ otherFilms, currentFilm }) {
    const [swiperElementPC, setSwiperElementPC] = useState(null)
    const [swiperElementTablet, setSwiperElementTablet] = useState(null)
    const [swiperElementMobile, setSwiperElementMobile] = useState(null)

    const [showNextSlideBtnPC, setShowNextSlideBtnPC] = useState(null)
    const [showPrevSlideBtnPC, setShowPrevSlideBtnPC] = useState(null)

    const [showNextSlideBtnTablet, setShowNextSlideBtnTablet] = useState(null)
    const [showPrevSlideBtnTablet, setShowPrevSlideBtnTablet] = useState(null)

    const [showNextSlideBtnMobile, setShowNextSlideBtnMobile] = useState(null)
    const [showPrevSlideBtnMobile, setShowPrevSlideBtnMobile] = useState(null)

    //khoi tao 2 cai nut
    useEffect(() => {
        if (swiperElementPC && swiperElementTablet && swiperElementMobile) {
            setShowNextSlideBtnPC(!swiperElementPC.isEnd)
            setShowPrevSlideBtnPC(!swiperElementPC.isBeginning)

            setShowNextSlideBtnTablet(!swiperElementTablet.isEnd)
            setShowPrevSlideBtnTablet(!swiperElementTablet.isBeginning)

            setShowNextSlideBtnMobile(!swiperElementMobile.isEnd)
            setShowPrevSlideBtnMobile(!swiperElementMobile.isBeginning)
        }
    }, [swiperElementPC, swiperElementTablet, swiperElementMobile])

    useEffect(() => {
        const handleWindowResize = () => {
            swiperElementPC.slideTo(0)
            swiperElementTablet.slideTo(0)
            swiperElementMobile.slideTo(0)
    
            setShowNextSlideBtnPC(!swiperElementPC.isEnd)
            setShowPrevSlideBtnPC(!swiperElementPC.isBeginning)
            setShowNextSlideBtnTablet(!swiperElementTablet.isEnd)
            setShowPrevSlideBtnTablet(!swiperElementTablet.isBeginning)
            setShowNextSlideBtnMobile(!swiperElementMobile.isEnd)
            setShowPrevSlideBtnMobile(!swiperElementMobile.isBeginning)
        }

        if (swiperElementPC && swiperElementTablet && swiperElementMobile) {
            window.addEventListener('resize', handleWindowResize)
        }

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [swiperElementPC, swiperElementTablet, swiperElementMobile])

    const handleSlideNext = () => {
        swiperElementPC.slideNext()
        swiperElementTablet.slideNext()
        swiperElementMobile.slideNext()

        if (swiperElementPC.isEnd)
            setShowNextSlideBtnPC(false)

        if (!swiperElementPC.isBeginning)
            setShowPrevSlideBtnPC(true)

        if (swiperElementTablet.isEnd)
            setShowNextSlideBtnTablet(false)

        if (!swiperElementTablet.isBeginning)
            setShowPrevSlideBtnTablet(true)

        if (swiperElementMobile.isEnd)
            setShowNextSlideBtnMobile(false)

        if (!swiperElementMobile.isBeginning)
            setShowPrevSlideBtnMobile(true)
    }

    const handleSlidePrev = () => {
        swiperElementPC.slidePrev()
        swiperElementTablet.slidePrev()
        swiperElementMobile.slidePrev()

        if (swiperElementPC.isBeginning)
            setShowPrevSlideBtnPC(false)

        if (!swiperElementPC.isEnd)
            setShowNextSlideBtnPC(true)

        if (swiperElementTablet.isBeginning)
            setShowPrevSlideBtnTablet(false)

        if (!swiperElementTablet.isEnd)
            setShowNextSlideBtnTablet(true)

        if (swiperElementMobile.isBeginning)
            setShowPrevSlideBtnMobile(false)

        if (!swiperElementMobile.isEnd)
            setShowNextSlideBtnMobile(true)
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

                    {showPrevSlideBtnPC && <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='2x'
                        className={`text-[#B22222] z-10 absolute left-[0] top-[35%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    }
                    {showNextSlideBtnPC && <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='2x'
                        className={`text-[#B22222] z-10 absolute right-[0] top-[35%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    }
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

                    {showPrevSlideBtnTablet && <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className='text-[#B22222] z-10 absolute left-[0] top-[30%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                    }
                    {showNextSlideBtnTablet && <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className='text-[#B22222] z-10 absolute right-[0] top-[30%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                    }
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
                                                <p className='text-[13px] font-bold'>{currentFilm.episodes.length} tập</p>

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

                    {showPrevSlideBtnMobile && <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className='text-[#B22222] z-10 absolute left-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                    }
                    {showNextSlideBtnMobile && <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className='text-[#B22222] z-10 absolute right-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1'
                    />
                    }
                </div>

            </div>
        </div>
    )
}

export default RecommendedFilm