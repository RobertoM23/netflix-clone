import React from "react";
import "../assets/settings.css";
import netflixLogo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

const Settings = () => (
  <div className="text-white bg-black">
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={netflixLogo} alt="Netflix Logo" height="40" />
        </a>
      </div>
    </nav>

    <div className="container my-5">
      <h2 className="fw-bold">Account</h2>
      <hr />
      <div className="row mb-2">
        <div className="col-md-3">
          <h5 className="fw-bold text-muted">MEMBERSHIP & BILLING</h5>
          <button className="btn btn-light border mt-2 w-100">Cancel Membership</button>
        </div>
        <div className="col-md-3">
          <p><strong>morganebugo@amicixsempre.school</strong></p>
          <p className="text-muted">Password: ********</p>
          <p className="text-muted">Phone: 321 044 1279</p>
          <p><i className="bi bi-paypal"></i> morganebugo@amicixsempre.school</p>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3 text-end">
          <p><a href="#" className="text-primary">Change account email</a></p>
          <p><a href="#" className="text-primary">Change password</a></p>
          <p><a href="#" className="text-primary">Change phone number</a></p>
          <p><a href="#" className="text-primary">Update payment info</a></p>
          <p><a href="#" className="text-primary">Billing details</a></p>
        </div>
      </div>
      <hr />
      <div className="row mb-4">
        <div className="col-md-3 fw-bold text-muted">PLAN DETAILS</div>
        <div className="col-md-3">
          <p><strong>Premium</strong> <span className="badge bg-secondary">ULTRA HD</span></p>
        </div>
      </div>
      <hr />
      <div className="row mb-4">
        <div className="col-md-3 fw-bold text-muted">SETTINGS</div>
        <div className="col-md-3">
          <a href="#" className="text-primary d-block">Parental controls</a>
          <a href="#" className="text-primary d-block">Test participation</a>
          <a href="#" className="text-primary d-block">Manage download devices</a>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3 text-end">
          <a href="#" className="text-primary d-block">Activate a device</a>
          <a href="#" className="text-primary d-block">Recent device streaming activity</a>
          <a href="#" className="text-primary d-block">Sign out of all devices</a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3 fw-bold text-muted">MY PROFILE</div>
        <div className="col-md-3 d-flex align-items-center">
          <img src={avatar} className="rounded-circle me-2" alt="Profile" />
          <strong>Bugo e Morgan</strong>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3 text-end">
          <a href="#" className="text-primary d-block">Manage profiles</a>
          <a href="#" className="text-primary d-block">Add profile email</a>
        </div>
      </div>
    </div>
  </div>
);

export default Settings;