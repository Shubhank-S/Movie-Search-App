import React from "react";
// import { MovieContext } from "../context/MovieContext";
import useGlobalContext from "../hooks/useGlobalContext";

function Home() {
  // const data = useContext(MovieContext);
  const data = useGlobalContext();
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export default Home;
