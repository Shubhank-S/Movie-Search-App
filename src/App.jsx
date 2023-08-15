import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import Error from "./pages/Error";
import MovieProvider from "./context/MovieContext";

function App() {
  return (
    <main>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<SinglePage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </main>
  );
}

export default App;
