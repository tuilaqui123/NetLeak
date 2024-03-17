import './info.css'
import React from 'react';
import actor from '../../../../assets/images/actor.jpg'
import movie from '../../../../assets/movies/1.jpg'
import InfoBox from './InfoBox';

const DirectInfo = () => {
    return (
        <div className='info-container'>
            <div className='direct-container'>
                <InfoBox />
                <InfoBox />
                <InfoBox />
                <InfoBox />
            </div>
        </div>
    );
}

export default DirectInfo;