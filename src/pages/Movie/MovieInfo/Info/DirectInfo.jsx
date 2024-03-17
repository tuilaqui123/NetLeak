import './info.css'
import React from 'react';
import actor from '../../../../assets/images/actor.jpg'

const DirectInfo = () => {
    return (
        <div className='info-container'>
            <ul className='direct-container'>
                <li>
                    <img
                        src={actor}
                        alt='actor'
                    />
                    <p className='direct-name'>Laurent Laurent  </p>
                    <p className='character-name'>Laurent Laurent </p>
                </li>

                <li>
                    <img
                        src={actor}
                        alt='actor'
                    />
                    <p className='direct-name'>Laurent Laurent </p>
                    <p className='character-name'>Laurent (voice)</p>
                </li>
                <li>
                    <img
                        src={actor}
                        alt='actor'
                    />
                    <p className='direct-name'>Laurent Laurent </p>
                    <p className='character-name'>Laurent (voice)</p>
                </li>
                <li>
                    <img
                        src={actor}
                        alt='actor'
                    />
                    <p className='direct-name'>Laurent Laurent </p>
                    <p className='character-name'>Laurent (voice)</p>
                </li>
                <li>
                    <img
                        src={actor}
                        alt='actor'
                    />
                    <p className='direct-name'>Laurent Laurent </p>
                    <p className='character-name'>Laurent (voice)</p>
                </li>
                <li>
                    <img
                        src={actor}
                        alt='actor'
                    />
                    <p className='direct-name'>Laurent Laurent </p>
                    <p className='character-name'>Laurent (voice)</p>
                </li>

            </ul>
        </div>
    );
}

export default DirectInfo;