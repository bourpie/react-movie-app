import { Link } from 'react-router-dom';

const MovieList = (props) => {
  return (
    <nav aria-label="Movie search results" className="d-flex justify-content-start my-3 gap-2">
        {props.movies.map((movie, index) => (
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
        </Link>
        ))}
    </nav>
  );
}

export default MovieList;
