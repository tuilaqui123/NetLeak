import React,{useState, useEffect} from 'react'
// import './Video.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

function ActorSlide({ currentFilm }) {
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
        <div className='mt-5'>
            <p className=' text-white text-[17px] lg:text-[24px] font-bold'>Các diễn viên tham gia:</p>

            <div className=' mt-4 mb-11 w-[95%]'>
                {/* pc */}
                <div className=' hidden md:hidden lg:block relative px-6'>
                    <Swiper
                        // modules={[Navigation]}
                        // navigation
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
                <div className='hidden md:block lg:hidden relative px-8'>
                    <Swiper
                        // modules={[Navigation]}
                        // navigation
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

                    <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute left-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute right-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                </div>

                {/* mobile */}
                <div className='md:hidden relative px-8'>
                    <Swiper
                        // modules={[Navigation]}
                        // navigation
                        className=' text-white h-full !px-1 '
                        spaceBetween={5}
                        slidesPerView={4}
                        slidesPerGroup={4}
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

                    <FontAwesomeIcon
                        onClick={handleSlidePrev}
                        icon={faChevronLeft}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute left-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                    <FontAwesomeIcon
                        onClick={handleSlideNext}
                        icon={faChevronRight}
                        size='3x'
                        className={`text-[#B22222] z-10 absolute right-[0] top-[25%] bottom-[50%] hover:cursor-pointer p-1`}
                    />
                </div>
            </div>
        </div>
    )
}

export default ActorSlide