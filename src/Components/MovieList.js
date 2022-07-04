const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index) => (
        <div key={movie.imdbID} className="d-flex justify-content-start m-3">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        ))}
    </>
  );
}

export default MovieList;
