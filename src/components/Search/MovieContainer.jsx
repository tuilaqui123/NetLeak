
import MovieCard from "./MovieCard";
import moviesData from "./Data";

const MovieContainer = ({result}) => {


    return (
        <section className='flex flex-wrap mt-20 ml-40 z-[-2]'>
            {result}
        </section>
    );
}

export default MovieContainer;
