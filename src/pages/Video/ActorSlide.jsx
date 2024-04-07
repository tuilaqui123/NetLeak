import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function ActorSlide({ currentFilm }) {
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
        <div className='mt-5'>
            <p className=' text-white text-[17px] lg:text-[24px] font-bold'>Các diễn viên tham gia:</p>

            <div className=' mt-4 mb-11 w-[95%]'>
                {/* pc */}
                <div className=' hidden md:hidden lg:block relative px-6'>
                    <Swiper
                        className=' text-white h-full !px-1'
                        spaceBetween={10}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        onInit={(ev) => {
                            setSwiperElementPC(ev)
                        }}
                    >
                        {currentFilm.actors.map((actor, index) => (
                            <SwiperSlide key={index} className=' text-white '>
                                <div className='group hover:cursor-pointer hover:scale-[1.09] mt-2 mb-2 transition-transform flex flex-col items-center justify-start  '>
                                    <img loading='lazy' className=' group-hover:border-[4px] group-hover:border-[#B22222] w-32 h-32 rounded-[50%] object-cover mb-2' src={actor.image} alt="Ảnh diễn viên" />

                                    <p className=' text-white text-[14px] expandText1Row'>{actor.actorName}</p>
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
                        className=' text-white h-full !px-1 '
                        spaceBetween={5}
                        slidesPerView={5}
                        slidesPerGroup={5}
                        onInit={(ev) => {
                            setSwiperElementTablet(ev)
                        }}
                    >
                        {currentFilm.actors.map((actor, index) => (
                            <SwiperSlide key={index} className=' text-white '>
                                <div className='group hover:cursor-pointer hover:scale-[1.09] mt-2 mb-2 transition-transform flex flex-col items-center justify-start  '>
                                    <img loading='lazy' className=' group-hover:border-[4px] group-hover:border-[#B22222] w-32 h-32 rounded-[50%] object-cover mb-2' src={actor.image} alt="Ảnh diễn viên" />

                                    <p className=' text-white text-[14px] expandText1Row'>{actor.actorName}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {showPrevSlideBtnTablet && <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute left-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    }
                    {showNextSlideBtnTablet && <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute right-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    }
                </div>

                {/* mobile */}
                <div className='md:hidden relative px-8'>
                    <Swiper
                        className=' text-white h-full !px-1 '
                        spaceBetween={5}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        onInit={(ev) => {
                            setSwiperElementMobile(ev)
                        }}
                    >
                        {currentFilm.actors.map((actor, index) => (
                            <SwiperSlide key={index} className=' text-white '>
                                <div className='group hover:cursor-pointer hover:scale-[1.09] mt-2 mb-2 transition-transform flex flex-col items-center justify-start  '>
                                    <img loading='lazy' className=' group-hover:border-[4px] group-hover:border-[#B22222] w-32 h-32 rounded-[50%] object-cover mb-2' src={actor.image} alt="Ảnh diễn viên" />

                                    <p className=' text-white text-[14px] expandText1Row'>{actor.actorName}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {showPrevSlideBtnMobile && <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute left-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    }
                    {showNextSlideBtnMobile && <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute right-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    }
                </div>
            </div>
        </div>
    )
}

export default ActorSlide