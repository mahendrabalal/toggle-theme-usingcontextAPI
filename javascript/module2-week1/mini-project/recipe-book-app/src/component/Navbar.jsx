import React from "react";
import logo from "/src/assets/logo.avif"

const Navbar = () => {

    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" width="200" />
            <h1>My React App</h1>
          </div>
        </nav>
      );
    };
    
    export default Navbar;