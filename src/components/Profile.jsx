import React from "react";
import "../assets/profile.css";
import netflixLogo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

const Profile = () => (
  <div className="bg-black text-white">
    <nav className="navbar navbar-dark bg-black px-4">
      <a className="navbar-brand" href="#">
        <img src={netflixLogo} alt="Netflix Logo" height="40" />
      </a>
    </nav>

    <div className="container mt-5">
      <h1 className="fw-bold">Edit Profile</h1>
      <hr className="border-secondary" />
      <div className="row">
        <div className="col-md-2 position-relative">
          <img src={avatar} className="rounded img-fluid" alt="Avatar" />
          <button className="btn btn-dark border position-absolute edit-icon">
            <i className="bi bi-pencil"></i>
          </button>
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control bg-dark text-white mb-3" value="Morgan e Bugo" />
          <div className="mb-3 d-flex align-items-center">
            <label className="form-label me-2">Language:</label>
            <select className="form-select form-select-sm bg-dark text-white border-light small-dropdown">
              <option>English</option>
              <option>Italian</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Maturity Settings:</label>
            <button className="btn btn-secondary text-white btn-sm">ALL MATURITY RATINGS</button>
            <p className="mt-2">Show titles of <strong>all maturity ratings</strong> for this profile.</p>
            <button className="btn btn-outline-secondary text-white btn-sm">EDIT</button>
          </div>

          <div>
            <label className="form-label">Autoplay Controls</label>
            <div className="form-check">
              <input className="form-check-input bg-dark border-light" type="checkbox" checked />
              <label className="form-check-label">Autoplay next episode in a series on all devices.</label>
            </div>
            <div className="form-check">
              <input className="form-check-input bg-dark border-light" type="checkbox" checked />
              <label className="form-check-label">Autoplay previews while browsing on all devices.</label>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-secondary" />

      <div className="d-flex gap-2">
        <button className="btn btn-light px-4">SAVE</button>
        <button className="btn btn-outline-secondary px-4">CANCEL</button>
        <button className="btn btn-outline-secondary px-4">DELETE PROFILE</button>
      </div>
    </div>
  </div>
);

export default Profile;