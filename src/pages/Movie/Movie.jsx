import './movie.css'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Film from './Film/Film';

const Movie = () => {
    return (
        <div className='movie-container'>
            <Navbar />
            <Film />
        </div>
    );
}
export default Movie;