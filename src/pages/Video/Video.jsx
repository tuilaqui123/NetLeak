import './Video.css'
import React, { useEffect } from 'react'
import { Player } from 'video-react'
import ReactPlayer from 'react-player'
import video1 from '../../assets/video/video.mp4'

const Video = () => {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var elem = document.getElementById("myvideo");

    /* Function to open fullscreen mode */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            console.log(elem.requestFullscreen)

            elem.requestFullscreen();
        }
        console.log(elem.requestFullscreen)
    }
    return (
        <div className='video-container'>
            <button onClick={openFullscreen}>Open Video in Fullscreen Mode</button>
            <video
                width="100%"
                height="100%"
                controls
                id='myvideo'
            >
                <source src={video1} type='video/mp4' />
                <source src={video1} type='video/mp4' />
            </video>
        </div>
    );
}

export default Video;