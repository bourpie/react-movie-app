import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import MovieListHeading from './Components/MovieListHeading';

function App() {

  return (

      <Router>
      <header className="d-flex justify-content-between m-3 align-items-center">
        <MovieListHeading heading='Movies' />
        <nav>
          <ul className="d-flex gap-3 list-unstyled m-0">
            <li>
              <Link className='link-light' to="/">Home</Link>
            </li>
            <li>
              <Link className='link-light' to="/about">About</Link>
            </li>
            <li>
              <Link className='link-light' to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='container-fluid'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
