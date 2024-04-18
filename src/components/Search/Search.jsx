import '../Slide/slide.css' 
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar.jsx';
// import Film from './Film/Film';
import moviesData from './Data';
import MovieCard from './MovieCard.jsx';
import MovieContainer from './MovieContainer.jsx';
import SearchInput from './SearchInput.jsx';
// Import Swiper styles


// import required modules



const Search = () => {

    const [query, setQuery] = useState("")

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    const filteredItems = moviesData.filter((movie) => movie.title.concat(movie.title, movie.actors).toLowerCase().indexOf(query.toLowerCase().trim())!== -1);

    // const check = moviesData.title.concat(moviesData.title, moviesData.actors); 
    // const filteredItems = check.filter((movie) => movie.title.toLowerCase().indexOf(query.toLowerCase())!== -1);

    function filteredData(moviesData,query){
        let filterMovies = moviesData;
        if (query){
            filterMovies = filteredItems;
        }
        
        return filterMovies.map(
            ({title, img}) => (
            <MovieCard
            key={Math.random()}
            title = {title}
            img ={img}
            />
        )
        );
    }

    const result = filteredData(moviesData, query)
    return (
        <div>
        <div className='movie-container'>
        <Navbar/>
        <SearchInput query={query} handleInputChange={handleInputChange}/>
        </div>
        <div className='ml-12'>
            <MovieContainer result={result}/>
        </div>
        </div>
    )
};
export default Search;
