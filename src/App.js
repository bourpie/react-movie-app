import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';

function App() {

  const movieListing = useSelector(state => state.movies.movies);
  console.log(movieListing);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=xxxxxxxx`;
    const response = await fetch(url);
    const responseJson = await response.json(); // convert response to JSON
    if(responseJson.Search) {
      setMovies(responseJson.Search); // set movies to responseJson.Search
    } 
  }

  useEffect(() => {
		getMovies(searchValue);
	}, [searchValue]); // only run the effect if searchValue changes

  return (
    <>
      <header className="d-flex justify-content-between m-3">
        <MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
      <main>
        <section aria-label="movie-list" className="d-flex">
          <MovieList movies={movieListing} />
        </section>
      </main> 
    </>
  );
}

export default App;
