import "./NavbarStyles.css"

import React, {useState} from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeBurger = () => {
        setClick(false);
    };

    return (
        <div className = "header">
            <Link to = "/">
            <h1 className = "nav_text"> Nicholas Gin </h1>
            </Link>

            <ul className ={click ? "nav_tabs active" : "nav_tabs"}>
                <li>
                    <Link to = "/portfolio" className = "nav_text" onClick={closeBurger}> Home </Link>
                </li>
                <li>
                    <Link to = "/about" className = "nav_text" onClick={closeBurger}> About Me </Link>
                </li>
                <li>
                    <Link to = "/projects" className = "nav_text" onClick={closeBurger}> Projects </Link>
                </li>
            </ul>

            <div className = "burger" onClick = {handleClick}>
                {click ? (<FaTimes size = {30} style = {{color: "white"}}/>)
                : (<FaBars size = {30} style = {{color: "white"}}/>)}

            </div>
        </div>
    )
}

export default Navbar
