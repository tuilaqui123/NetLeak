import './info.css'
import React from 'react';
import actor from '../../../../assets/images/actor.jpg'
import movie from '../../../../assets/movies/1.jpg'
import InfoBox from './InfoBox';

const DirectInfo = () => {
    return (
        <div className='info-container'>
            <div className='w-[90%] h-full grid grid-cols-2 lg:grid-cols-3 gap-5 direct-container'>
                <InfoBox />
                <InfoBox />
                <InfoBox />
                <InfoBox />
            </div>
        </div>
    );
}

export default DirectInfo;