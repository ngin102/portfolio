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
            <h1 className = "nav_text"> NICHOLAS GIN </h1>
            </Link>

            <ul className ={click ? "nav_tabs active" : "nav_tabs"}>
                <li>
                    <Link to = "/" className = "nav_text" onClick={closeBurger}> HOME </Link>
                </li>
                <li>
                    <Link to = "/about" className = "nav_text" onClick={closeBurger}> ABOUT ME </Link>
                </li>
                <li>
                    <Link to = "/projects" className = "nav_text" onClick={closeBurger}> PROJECTS </Link>
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
