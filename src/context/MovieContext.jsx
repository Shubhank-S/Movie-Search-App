import React, { createContext } from "react";

export const MovieContext = createContext();
function MovieProvider({ children }) {
  return (
    <>
      <MovieContext.Provider value={"Shubhank" + "Sharma"}>
        {children}
      </MovieContext.Provider>
    </>
  );
}

export default MovieProvider;
