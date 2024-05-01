import Slide from '../../components/Slide/Slide';
import TabPageThumbnail from '../../components/TabPageThumbnail/TabPageThumbnail';
import Navbar from '../../components/Navbar/Navbar';
import './TabPage.scss'
import React, { useEffect, useState } from 'react'
import TabPageSlide from '../../components/TabPageSlide/TabPageSlide';
import TopSlide from '../../components/TabPageSlide/TopSlide';
import Genre from './Genre/Genre';

const TabPage = () => {
    const [genre, setGenre]= useState ('');
    const [selectedGenre, setSelectedGenre]= useState ('');

    useEffect(()=>{
        setGenre('');
        setSelectedGenre('');

    }, []);
    return (
        <div className='tabpage-container'>
            
            <Navbar/>
            
            <TabPageThumbnail Genre={genre} setGenre={setGenre} selectedGenre= {selectedGenre} setSelectedGenre= {setSelectedGenre}/>

            
            <div className='movies-slide'>
                <Genre Genre={genre} setGenre={setGenre} setSelectedGenre={setSelectedGenre} />
               
            </div>
        </div>
    );
}

export default TabPage;