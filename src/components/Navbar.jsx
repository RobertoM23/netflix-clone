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

        <div className="ms-auto d-flex align-items-center">
          <a href="#" className="text-white me-3"><i className="bi bi-search"></i></a>
          <a href="#" className="text-white me-3 fw-bold">KIDS</a>
          <a href="#" className="text-white me-3"><i className="bi bi-bell"></i></a>

          <div className="dropdown">
            <a href="#" className="text-white dropdown-toggle d-flex align-items-center" id="profileDropdown" data-bs-toggle="dropdown" role="button">
              <i className="bi bi-person-circle fs-4 me-1"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><a className="dropdown-item" href="#">Account</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;