import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import AddFavourite from "./components/AddFavourite";
import RemoveFavourite from "./components/RemoveFavourite";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getSearchValue = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const values = await response.json();

    if (values.Search) {
      setMovies(values.Search);
    }
  };

  const addFavourite = (movie) => {
    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites);
  };

  const removeFavourite = (movie) => {
    const newFavourites = favourites.filter(
      (mov) => mov.imdbID !== movie.imdbID
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    getSearchValue(searchValue);
  }, [favourites, searchValue]);

  return (
    <div className="container">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul
              className="navbar-nav d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  <h4>All Movies</h4>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/favourites" className="nav-link">
                  <h4>Favourites</h4>
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/favourites">
              <MovieList
                movies={favourites}
                favourite={RemoveFavourite}
                handleFavourite={removeFavourite}
              />
            </Route>
            <Route path="/">
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <MovieList
                movies={movies}
                favourite={AddFavourite}
                handleFavourite={addFavourite}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
