import React from "react";

export default function NavBar() {

    function ToggleMenu() {

        const nav = document.querySelector('.nav')
        nav.classList.toggle('toggle')
    }


    return (
        <header className="header">
            <img src="./src\assets\images\logo.svg" alt="logo" />
            <nav className="nav">
                <ul>
                    <li><a href="#Features"> Features</a></li>
                    <li><a href="#"> Pricing </a></li>
                    <li><a href="#"> Resources</a></li>
                    <hr />
                    <li className="Login">Login</li>
                    <li className="btn SignUp">Sign Up</li>
                </ul>
            </nav>
            <a onClick={ToggleMenu} className="hamburgerMenu">&#9776;</a>
        </header>
    )
}