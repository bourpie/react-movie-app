import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useStore from '../store/useStore';

const MovieDetail = (props) => {
    const movie = useStore((state) => state.movie);
    const fetchMovie = useStore((state) => state.fetchMovie);
    let { movieId } = useParams();

    useEffect(() => {
        fetchMovie(movieId);
        }, []
    );
    return (
        <div>
           <h1>{movie.Title} - {movie.Year}</h1>
           <dl>
                <dt>Genre</dt>
                <dd>{movie.Genre}</dd>
                <dt>Director</dt>
                <dd>{movie.Director}</dd>
                <dt>Actors</dt>
                <dd>{movie.Actors}</dd>
                <dt>Plot</dt>
                <dd>{movie.Plot}</dd>
                <dt>Poster</dt> 
                <dd><img src={movie.Poster} alt={movie.Title} /></dd>

           </dl>
        </div>
    )
}

export default MovieDetail;