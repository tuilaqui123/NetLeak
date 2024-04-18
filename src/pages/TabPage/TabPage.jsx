import Slide from '../../components/Slide/Slide';

import Thumbnail from '../../components/Thumbnail/Thumbnail';
import './TabPage.css'
import React from 'react'

const TabPage = () => {

import TabPageThumbnail from '../../components/TabPageThumbnail/TabPageThumbnail';
import Navbar from '../../components/Navbar/Navbar';
import './TabPage.scss'
import React, { useEffect, useState } from 'react'
import TabPageSlide from '../../components/TabPageSlide/TabPageSlide';
import TopSlide from '../../components/TabPageSlide/TopSlide';
import Genre from './Genre/Genre';

const TabPage = () => {
    const [genre, setGenre]= useState ('');

    useEffect(()=>{
        setGenre('');

    }, []);

    return (
        <div className='tabpage-container'>
            <p className='tab-title'>Phim</p>
            {/* <Thumbnail /> */}
            <div className='movies-slide'>

                <Slide title={'Thịnh hành'} />
                <Slide title={'Anime'} />
                <Slide title={'TV Shows'} />
                <Slide title={'Giật gân'} />
                <Slide title={'Hành động'} />
                <Slide title={'Hài hước'} />

                <Genre Genre={genre} setGenre={setGenre}/>
               

            </div>
        </div>
    );
}

export default TabPage;