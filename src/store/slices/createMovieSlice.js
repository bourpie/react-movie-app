
const createMovieSlice = (set, get) => ({
    movies: [],
    movie: {},
    fetchMovies: async (searchValue) => {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`);
        const responseJson = await response.json(); // convert response to JSON
        if(responseJson.Search) {
            set({ movies: responseJson.Search }); // set movies to responseJson.Search
        } 
    },
    fetchMovie: async (movieId) => {
        const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`);
        const responseJson = await response.json(); // convert response to JSON
        if(responseJson.Title) {
            set({ movie: responseJson }); // set movie to responseJson
        } 
    }
})
export default createMovieSlice;