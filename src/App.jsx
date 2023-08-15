import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import Error from "./pages/Error";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
