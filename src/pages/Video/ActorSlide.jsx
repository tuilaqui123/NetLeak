import React from 'react'
import './Video.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'

function ActorSlide({ currentFilm }) {
    return (
        <div className='mt-5'>
            <p className=' text-white text-[17px] lg:text-[24px] font-bold'>Các diễn viên tham gia:</p>

            <div className=' mt-4 mb-11 w-[95%]'>
                <div className=' hidden md:hidden lg:block'>
                    <Swiper
                        modules={[Navigation]}
                        className=' text-white h-full'
                        spaceBetween={10}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {currentFilm.actors.map((actor, index) => (
                            <SwiperSlide key={index} className=' text-white '>
                                <div className='group hover:cursor-pointer hover:scale-[1.09] mt-2 mb-2 transition-transform flex flex-col items-center justify-start  '>
                                    <img className=' group-hover:border-[4px] group-hover:border-[#B22222] w-32 h-32 rounded-[50%] object-cover mb-2' src={actor.image} alt="Ảnh diễn viên" />

                                    <p className=' text-white text-[14px] expandText1Row'>{actor.actorName}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='hidden md:block lg:hidden'>
                    <Swiper
                        modules={[Navigation]}
                        className=' text-white h-full '
                        spaceBetween={5}
                        slidesPerView={5}
                        slidesPerGroup={5}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {currentFilm.actors.map((actor, index) => (
                            <SwiperSlide key={index} className=' text-white '>
                                <div className='group hover:cursor-pointer hover:scale-[1.09] mt-2 mb-2 transition-transform flex flex-col items-center justify-start  '>
                                    <img className=' group-hover:border-[4px] group-hover:border-[#B22222] w-32 h-32 rounded-[50%] object-cover mb-2' src={actor.image} alt="Ảnh diễn viên" />

                                    <p className=' text-white text-[14px] expandText1Row'>{actor.actorName}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='md:hidden'>
                    <Swiper
                        modules={[Navigation]}
                        className=' text-white h-full '
                        spaceBetween={5}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {currentFilm.actors.map((actor, index) => (
                            <SwiperSlide key={index} className=' text-white '>
                                <div className='group hover:cursor-pointer hover:scale-[1.09] mt-2 mb-2 transition-transform flex flex-col items-center justify-start  '>
                                    <img className=' group-hover:border-[4px] group-hover:border-[#B22222] w-32 h-32 rounded-[50%] object-cover mb-2' src={actor.image} alt="Ảnh diễn viên" />

                                    <p className=' text-white text-[14px] expandText1Row'>{actor.actorName}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ActorSlide