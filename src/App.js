import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './Components/MovieList';

function App() {
  const [movies, setMovies] = useState([       
    {
    "Title": "Lost in Space",
    "Year": "2018–2021",
    "imdbID": "tt5232792",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTY5YjQwYmEtOWJiNy00NDBmLTgxM2YtMmVkMmI0NzE1N2FjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg"
},
{
    "Title": "Lost in Space",
    "Year": "1998",
    "imdbID": "tt0120738",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmRkOGIxZDEtZTU3YS00ZjY1LTliNTItOGVhNWNlZDA2MDQwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
},
{
    "Title": "Lost in Space",
    "Year": "1965–1968",
    "imdbID": "tt0058824",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2OTczMDI2M15BMl5BanBnXkFtZTcwMTA5MDgyMQ@@._V1_SX300.jpg"
},
{
    "Title": "Astra Lost in Space",
    "Year": "2019",
    "imdbID": "tt10483250",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzVjZWZjZTktZDYxZC00ZWFiLTg5NWMtYjFmYzgzODlkOTM5XkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_SX300.jpg"
},
{
    "Title": "The Robinsons: Lost in Space",
    "Year": "2004",
    "imdbID": "tt0777269",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTJlNTZiMDctZDhiMi00YTdhLTljMjItYjgxZjM1YzE3ZWFiXkEyXkFqcGdeQXVyNjc5ODUzODU@._V1_SX300.jpg"
},
{
    "Title": "Lost in Space Forever",
    "Year": "1998",
    "imdbID": "tt0244630",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3MzIyODQwNV5BMl5BanBnXkFtZTcwNTY0NTYxMQ@@._V1_SX300.jpg"
},
{
    "Title": "The Space Invaders: In Search of Lost Time",
    "Year": "2012",
    "imdbID": "tt2427898",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA3MDAwNjkwOF5BMl5BanBnXkFtZTcwNjc1Njc1OA@@._V1_SX300.jpg"
},
{
    "Title": "Lost in Space",
    "Year": "2019",
    "imdbID": "tt10431882",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzVlODliYmYtMGY1Ni00ZjkzLWE4ZDktYjI3ZmVjYWVlNmYwXkEyXkFqcGdeQXVyNjkyNzY0ODI@._V1_SX300.jpg"
},
{
    "Title": "Lost in Space 25th Anniversary Tribute",
    "Year": "1991",
    "imdbID": "tt1972703",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTcwODMwYTctYTcyMC00OWVhLWJlMzItMmM0YzM5NjIwMWY0XkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_SX300.jpg"
}])

  const getMovies = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=xxxxxxxx";
    const response = await fetch(url);
    const data = await response.json(); // convert response to JSON
    setMovies(data.Search);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="d-flex">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
