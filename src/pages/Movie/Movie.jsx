import './movie.css'
import React, { useState } from 'react'
import clsx from 'clsx';
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
                <li className={clsx({ 'selected': info === 1 })} onClick={() => { setInfo(1) }}>Danh sách tập</li>
                <li className={clsx({ 'selected': info === 2 })} onClick={() => { setInfo(2) }}>Diễn viên</li>
                <li className={clsx({ 'selected': info === 3 })} onClick={() => { setInfo(3) }}>Đội ngũ</li>
                <li className={clsx({ 'selected': info === 4 })} onClick={() => { setInfo(4) }}>Đề xuất</li>
            </ul>

            <MovieInfo
                info={info}
            />
        </div>
    );
}
export default Movie;