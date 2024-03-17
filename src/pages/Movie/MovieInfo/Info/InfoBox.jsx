import './info.css'
import React from 'react';
import actor from '../../../../assets/images/actor.jpg'
import movie from '../../../../assets/movies/1.jpg'

const InfoBox = () => {
    return (
        <div className='p-3  flex flex-col justify-center rounded-md infobox'>
            <div className='flex flex-row mb-3 rounded-md w-9/10 p-2 cursor-pointer actor'>
                <img
                    src={actor}
                    alt='movie'
                    className='actor-avt rounded-md'
                />
                <div className='pl-3'>
                    <p className='text-2xl text-white font-medium mb-3'>Pham Ngoc Qui</p>
                    <p className='text-lg text-white font-medium'>Sinh vien UIT</p>
                </div>
            </div>
            <ul className='flex flex-row w-100 gap-3 actor-movie'>
                <li className='movie-recomment'>
                    <img
                        src={movie}
                        alt='movie'
                        className='rounded-md mb-2'
                    />
                    <p className='text-lg font-medium'>Violet Evergarden</p>
                </li>
                <li className='movie-recomment'>
                    <img
                        src={movie}
                        alt='movie'
                        className='rounded-md mb-2'
                    />
                    <p className='text-lg font-medium'>Violet Evergarden</p>
                </li>
            </ul>
        </div>
    );
}

export default InfoBox;