import React  from 'react';

const MovieCard = ({title, img}) => {
    return (
        
            <section className='w-64 m-4 p-4 cursor-pointer '>
                <img className='w-full h-full mb-4 rounded-lg hover:scale-110' src={img}
                alt=""/>
                <div className='mb-4 text-center text-white'>
                    <p className='truncate'>{title}</p>
                </div>
            </section>
            
       

    )
}
export default MovieCard
