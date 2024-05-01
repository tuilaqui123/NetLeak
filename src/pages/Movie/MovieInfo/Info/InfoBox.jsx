import './info.css'
import React from 'react';
import actor from '../../../../assets/images/actor.jpg'
import movie from '../../../../assets/movies/1.jpg'

const InfoBox = ({ name, image }) => {
    console.log(name)
    console.log(image)
    return (
        <div className='p-3 flex flex-col justify-center rounded-md border'>
            <img
                src={image}
                alt='movie'
                className='w-[150px] rounded-md'
            />
            <p className='text-base md:text-xl lg:text-2xl text-white font-medium mb-3'>{name}</p>
        </div>
    );
}

export default InfoBox;