import './info.css'
import React from 'react';
import actor from '../../../../assets/images/actor.jpg'
import movie from '../../../../assets/movies/1.jpg'
import InfoBox from './InfoBox';

const DirectInfo = ({ data }) => {
    console.log(data)
    return (
        <div className='info-container'>
            <div className='w-[90%] h-full grid grid-cols-2 lg:grid-cols-3 gap-5 direct-container'>
                {data.map((value, index) => {
                    return (
                        <InfoBox
                            key={index}
                            name={value.name}
                            image={value.avatar}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default DirectInfo;