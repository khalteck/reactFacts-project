import React from "react"
import "../index.css";
import bgLogo from "../bg-logo.png";

export default function Main() {
    return (
        <main className="main">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}