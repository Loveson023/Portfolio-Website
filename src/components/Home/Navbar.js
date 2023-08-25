import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="sticky-top"
      style={{
        fontFamily: "Bricolage Grotesque, sans-serif",
        fontWeight: "bold",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="#Home">
            <strong className="text-white">Love Rathore</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarNav"
            style={{
              justifyContent: "center",
            }}
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Api-fetch">
                  API Fetch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Projects">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/About-me">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Contact-me">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
