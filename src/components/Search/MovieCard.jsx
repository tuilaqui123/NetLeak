import React  from 'react';

const MovieCard = ({title, img}) => {
    return (
        
            <section className='m-4 p-4 cursor-pointer'>
                <img className='w-80 mb-4' src={img}
                alt=""/>
                <div className='mb-4 text-center text-white'>
                    <p>{title}</p>
                </div>
            </section>
            
       

    )
}
export default MovieCard