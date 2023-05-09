import "./HomeScreenStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className ="main_screen">
        <div className = "info">
            <h1>Hello!</h1> 
            <p> I'm Nicholas.</p>

            <div>
                <Link to = "/about" className = "btn"> About Me </Link>
                <Link to = "/projects" className = "btn"> Projects </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeScreen