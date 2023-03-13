import React from "react";
import {Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> DailyMilk Information </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <a href="/delete">Delete</a>
            </div>
        </nav>
    );
}
 
export default Navbar;