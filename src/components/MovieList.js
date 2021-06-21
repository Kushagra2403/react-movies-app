import React from "react";

const MovieList = (props) => {
  const movies = props.movies;
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="movie-container">
          <img src={movie.Poster} alt={movie.Title} className="m-3" />
          <p className="details">{movie.Title}</p>
          <div
            onClick={() => props.handleFavourite(movie)}
            className="favourite"
          >
            <props.favourite />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
