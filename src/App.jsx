import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projelerim from "./Projelerim"
import Header from "./Header";
import { Box } from "@mui/material";
import "./App.css";
import Sertifikalarim from "./Sertifikalarim";
import Deneyimlerim from "./Deneyimlerim";
import Anasayfa from "./Anasayfa"

function App() {

  return (
    <div className="App">
      <Header />
      <Box className="App" >
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/Projelerim" element={<Projelerim  />} />
            <Route path="/Sertifikalarim" element={<Sertifikalarim  />} />
            <Route path="/Deneyimlerim" element={<Deneyimlerim  />} />
            <Route path="/Anasayfa" element={<Anasayfa  />} />

          </Routes>
        </Box>
    </div>
  );
}

export default App;
