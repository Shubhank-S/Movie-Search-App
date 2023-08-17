import React from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import { NavLink } from "react-router-dom";
import Card from "./Card";

function Movie() {
  const { movie } = useGlobalContext();
  //   console.log(movie);
  return (
    <section className="movie_page">
      h
      <div className="movie_grid">
        {movie.map((movies) => {
          const { Title, Type, Year, imdbID } = movies;
          return (
            <NavLink to={`/movie/${imdbID}`}>
              <Card />
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default Movie;
