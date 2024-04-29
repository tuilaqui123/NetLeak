import Navbar from '../../components/Navbar/Navbar';
import Slide from '../../components/Slide/Slide';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import ThumbnailRes from '../../components/Thumbnail/thumbnailResponsive';
import './home.css'
import React from 'react'

const Home = () => {
    return (
        <div className='w-full bg-[#3e3e3e]'>
            <Navbar />
            <Thumbnail />
            <ThumbnailRes />
            <div className='w-full relative flex flex-col gap-5'>
                <Slide title={'Thịnh hành'} />
                <Slide title={'Thịnh hành'} />
                <Slide title={'Thịnh hành'} />
                <Slide title={'Thịnh hành'} />
            </div>
        </div>
    );
}

export default Home;