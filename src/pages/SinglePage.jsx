import React from "react";
import { useParams } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  return (
    <section>
      <h1>Our Single movie{id}</h1>
    </section>
  );
}

export default SinglePage;
