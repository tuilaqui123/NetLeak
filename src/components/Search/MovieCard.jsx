import React  from 'react';

const MovieCard = ({title, img}) => {
    return (
        
            <section className='w-64 m-4 p-4 cursor-pointer hover:scale-125'>
                <img className='w-full h-full mb-4 rounded-lg' src={img}
                alt=""/>
                <div className='mb-4 text-center text-white'>
                    <p className='truncate'>{title}</p>
                </div>
            </section>
            
       

    )
}
export default MovieCard
