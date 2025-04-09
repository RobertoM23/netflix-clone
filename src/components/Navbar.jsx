import React from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../assets/netflix_logo.png";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={netflixLogo} alt="Netflix Logo" height="40" />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-3">
          <li className="nav-item"><Link className="nav-link" to="/tv-shows">TV Shows</Link></li>
          <li className="nav-item"><Link className="nav-link" to="#">Movies</Link></li>
          <li className="nav-item"><Link className="nav-link" to="#">Recently Added</Link></li>
          <li className="nav-item"><Link className="nav-link" to="#">My List</Link></li>
        </ul>
        <div className="ms-auto d-flex align-items-center gap-3">
          <Link className="btn btn-link text-white text-decoration-none" to="/">Home</Link>
          <Link className="btn btn-link text-white text-decoration-none" to="/settings">Settings</Link>
          <Link className="btn btn-link text-white text-decoration-none" to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
