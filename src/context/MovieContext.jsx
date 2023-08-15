import React, { createContext } from "react";

export const MovieContext = createContext();
function MovieProvider() {
  return (
    <>
      <MovieContext.Provider>{children}</MovieContext.Provider>
    </>
  );
}

export default MovieProvider;
