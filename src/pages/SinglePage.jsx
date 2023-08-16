import React from "react";
import { useParams } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";

function SinglePage() {
  const { id } = useParams();

  return <section></section>;
}

export default SinglePage;
