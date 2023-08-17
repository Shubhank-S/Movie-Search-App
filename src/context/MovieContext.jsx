import React, { createContext, useEffect, useState } from "react";

const API_URL = `https://omdbapi.com/?apikey=47846924&s=titanic`;

export const MovieContext = createContext();
function MovieProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: false, message: "" });

  const getMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovie(data);
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setError({
          show: true,
          message: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <MovieContext.Provider value={{ movie, isLoading, error }}>
        {children}
      </MovieContext.Provider>
    </>
  );
}

export default MovieProvider;
