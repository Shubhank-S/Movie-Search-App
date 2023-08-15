import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Home() {
  const data = useContext(MovieContext);
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export default Home;
