import React from "react";
import useGlobalContext from "../hooks/useGlobalContext";

function Movie() {
  const { movie } = useGlobalContext();
  console.log(movie);
  return (
    <section>
      <div>
        {movie.map((movies) => {
          return (
            <div>
              <h1>{movies.Title}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Movie;
