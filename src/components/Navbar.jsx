import React from "react";
import netflixLogo from "../assets/netflix_logo.png";

const Navbar = ({ onNavigate }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={netflixLogo} alt="Netflix Logo" height="40" />
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-3">
          <li className="nav-item"><a className="nav-link" href="#">TV Shows</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Recently Added</a></li>
          <li className="nav-item"><a className="nav-link" href="#">My List</a></li>
        </ul>
        <div className="ms-auto d-flex align-items-center gap-3">
          <button className="btn btn-link text-white text-decoration-none" onClick={() => onNavigate("home")}>Home</button>
          {/* <button className="btn btn-link text-white text-decoration-none" onClick={() => onNavigate("settings")}>Settings</button> */}
          {/* <button className="btn btn-link text-white text-decoration-none" onClick={() => onNavigate("profile")}>Profile</button> */}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;