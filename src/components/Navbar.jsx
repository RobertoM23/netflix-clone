import React from "react";
import netflixLogo from "../assets/netflix_logo.png";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={netflixLogo} alt="Netflix Logo" height="40" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-3">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">TV Shows</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Recently Added</a></li>
          <li className="nav-item"><a className="nav-link" href="#">My List</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;