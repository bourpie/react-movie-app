
const createMovieSlice = (set, get) => ({
    movies: [],
    fetchMovies: async (searchValue) => {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`);
        const responseJson = await response.json(); // convert response to JSON
        if(responseJson.Search) {
            set({ movies: responseJson.Search }); // set movies to responseJson.Search
        } 
    }
})
export default createMovieSlice;