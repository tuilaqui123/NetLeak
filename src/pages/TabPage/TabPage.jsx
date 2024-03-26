import Slide from '../../components/Slide/Slide';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import './TabPage.css'
import React from 'react'

const TabPage = () => {
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
            </div>
        </div>
    );
}

export default TabPage;