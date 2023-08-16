import React, { createContext, useEffect, useState } from "react";

const API_URL = `https://omdbapi.com/?apikey=47846924&s=titanic`;

export const MovieContext = createContext();
function MovieProvider({ children }) {
  const [item, setitems] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setitems(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <MovieContext.Provider value={"Shubhank" + "Sharma"}>
        {children}
      </MovieContext.Provider>
    </>
  );
}

export default MovieProvider;
