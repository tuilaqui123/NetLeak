import Slide from '../../components/Slide/Slide';
import TabPageThumbnail from '../../components/TabPageThumbnail/TabPageThumbnail';
import Navbar from '../../components/Navbar/Navbar';
import './TabPage.scss'
import React from 'react'
import TabPageSlide from '../../components/TabPageSlide/TabPageSlide';
import TopSlide from '../../components/TabPageSlide/TopSlide';

const TabPage = () => {
    return (
        <div className='tabpage-container'>
            
            <Navbar/>
            
            <TabPageThumbnail/>

            
            <div className='movies-slide'>
                <TopSlide/>
                <TabPageSlide title={'Anime'} />
                <TabPageSlide title={'Horror'} />
                <TabPageSlide title={'Shoujo'} />
                <TabPageSlide title={'Shounen'} />
                <TabPageSlide title={'Hài hước'} />
                <TabPageSlide title={'Slice of Life'} />
                <TabPageSlide title={'Josei'} />
                <TabPageSlide title={'Isekai'} />
                <TabPageSlide title={'Romane'}/>
                <TabPageSlide title={'Fantasy'}/>
            </div>
        </div>
    );
}

export default TabPage;