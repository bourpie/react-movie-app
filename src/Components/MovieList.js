const MovieList = (props) => {
  return (
    <nav aria-label="Movie search results" className="d-flex">
        {props.movies.map((movie, index) => (
        <div key={movie.imdbID} className="d-flex justify-content-start my-3">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        ))}
    </nav>
  );
}

export default MovieList;
