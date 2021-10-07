/** 
 * @author: alexandercd
 * @description: 
 * @date 07/octubre/2021
**/
import React from 'react'
import { NavLink } from "react-router-dom";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/login" className="nav-link">Login</NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;