import EpList from './Info/EpList';
import DirectInfo from './Info/DirectInfo';
import Info3 from './Info/Suggest';
import Suggest from './Info/Suggest';
import './MovieInfo.css'
import React from 'react'

const MovieInfo = ({ info }) => {
    return (
        <div className='movieinfo-container'>
            {info == 1 && (
                <EpList />
            )}
            {info == 2 && (
                <DirectInfo />
            )}
            {info == 3 && (
                <DirectInfo />
            )}
            {info == 4 && (
                <Suggest />
            )}
        </div>
    );
}

export default MovieInfo;