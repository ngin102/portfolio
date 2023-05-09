import React from "react";
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Projects from "./routes/Projects"
import { Route, Routes, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar"

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="content">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={800}>
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/about" element = {<About />} />
              <Route path = "/projects" element = {<Projects />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;
