import React from "react"
import "../index.css";
import logo from "../react-logo.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <img className="logo" src={logo} alt=""/>
                <p>ReactFacts</p>
            </div>
            <div className="right">
                React Course - Project 1
            </div>
        </nav>
    )
}
