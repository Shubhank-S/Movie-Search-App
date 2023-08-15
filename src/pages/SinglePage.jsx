import React from "react";
import { useParams } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";

function SinglePage() {
  const { id } = useParams();
  const data = useGlobalContext();
  return (
    <section>
      <h1>Our Single movie</h1>
      <h1>{data}</h1>
    </section>
  );
}

export default SinglePage;
