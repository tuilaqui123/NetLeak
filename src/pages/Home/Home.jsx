import Navbar from '../../components/Navbar/Navbar';
import Slide from '../../components/Slide/Slide';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import './home.css'
import React from 'react'

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <Thumbnail />
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

export default Home;