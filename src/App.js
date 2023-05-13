import React from "react";
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Projects from "./routes/Projects"
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import { motion } from "framer-motion/dist/framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/projects" element = {<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
