import './movie.css'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Film from './Film/Film';
import MovieInfo from './MovieInfo/MovieInfo';

const Movie = () => {
    const [info, setInfo] = useState(1)
    return (
        <div className='movie-container'>
            <Navbar />
            <Film />
            <ul className='info-navbar'>
                <li onClick={() => { setInfo(1) }}>Danh sách tập</li>
                <li onClick={() => { setInfo(2) }}>Diễn viên</li>
                <li onClick={() => { setInfo(3) }}>Đội ngũ</li>
                <li onClick={() => { setInfo(4) }}>Đề xuất</li>
            </ul>
            <MovieInfo
                info={info}
            />
        </div>
    );
}
export default Movie;