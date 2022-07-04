import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import Movie from "./Pages/MovieDetail";
import MovieListHeading from './Components/MovieListHeading';

function App() {

  return (

      <Router>
      <header className="d-flex justify-content-between m-3 align-items-center">
        <MovieListHeading heading='Movies' />
        <nav>
          <ul className="d-flex gap-2 list-unstyled m-0">
            <li>
              <Link className='link-light' to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='container-fluid'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
