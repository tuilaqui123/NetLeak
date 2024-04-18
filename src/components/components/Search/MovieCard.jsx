import React  from 'react';
import img from '../../assets/movies/1.jpg'
const MovieCard = () => {
    return (
        
            <div className='w-full h-[100px] cursor-pointer '>
                <div className='w-full h-full'>

                <img className='w-full rounded-lg hover:scale-110 duration-200' src={img}
                alt=""/>
                <div className='mb-4 text-center text-white'>
                    <p className='truncate'>Hong được đâu ní ơi</p>
                </div>
                </div>
            </div>
            
       

    )
}
export default MovieCard
