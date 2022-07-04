import { ActionTypes } from "../constants/action-types";

const initialState = {
    movies: [
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
    ],
}
export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_MOVIES:
            return state;
        default:
            return state;
    }
}