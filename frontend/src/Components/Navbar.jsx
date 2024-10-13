import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to={"/dashboard"} className="navbar-item">
            <img style={{objectFit: "fill"}} src="../img/admin.png" alt='logo' width="112" height="28" />
          </NavLink>
      
          <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink to={"/dashboard"} className="navbar-item">
              Home
            </NavLink>
      
            <a href='#' className="navbar-item">
              Documentation
            </a>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar