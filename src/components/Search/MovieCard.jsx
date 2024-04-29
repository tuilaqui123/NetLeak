import React from 'react';
import img from '../../assets/movies/1.jpg'
const MovieCard = () => {
    return (

        <div className='w-full h-full'>
            <div className='flex flex-col w-full h-full '>
                <div className='flex w-full justify-center'>
                    <img className='lg:w-5/6 md:w-3/4 sm:w-1/2 rounded-md hover:brightness-110 duration-200 cursor-pointer '
                        src={img}
                        alt="" />
                </div>

                <div className='mb-4 text-center text-white cursor-pointer'>
                    <p className='truncate'>Hong được đâu ní ơi</p>
                </div>
            </div>
        </div>



    )
}
export default MovieCard
