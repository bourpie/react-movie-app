import {useState, useEffect} from 'react';
import useStore from '../store/useStore';
import MovieList from '../Components/MovieList';
import SearchBox from '../Components/SearchBox';

const Home = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const movies = useStore((state) => state.movies);
    const fetchMovies = useStore((state) => state.fetchMovies);
  
    useEffect(() => {
          fetchMovies(searchValue);
      }, 
        [searchValue]
    ); // only run the effect if searchValue changes

    return (
        <>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            <MovieList movies={movies} />
        </>
    );
}

export default Home;