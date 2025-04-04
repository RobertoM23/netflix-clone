import React from "react";

const Footer = () => (
  <footer className="mt-5 py-4 bg-black text-white">
    <div className="container">
      <div className="text-center mb-3">
        <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-4"></i></a>
        <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-4"></i></a>
        <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-4"></i></a>
        <a href="#" className="text-white"><i className="bi bi-youtube fs-4"></i></a>
      </div>

      <div className="row text-center text-md-start">
        <div className="col-6 col-md-3">
          <p><a href="#" className="text-muted text-decoration-none">Audio and Subtitles</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Media Center</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Privacy</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Contact Us</a></p>
        </div>
        <div className="col-6 col-md-3">
          <p><a href="#" className="text-muted text-decoration-none">Audio Description</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Investor Relations</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Legal Notices</a></p>
        </div>
        <div className="col-6 col-md-3">
          <p><a href="#" className="text-muted text-decoration-none">Help Center</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Jobs</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Cookie Preferences</a></p>
        </div>
        <div className="col-6 col-md-3">
          <p><a href="#" className="text-muted text-decoration-none">Gift Cards</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Terms of Use</a></p>
          <p><a href="#" className="text-muted text-decoration-none">Corporate Information</a></p>
        </div>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-outline-light btn-sm">Service Code</button>
      </div>

      <div className="text-center text-muted mt-3">
        <small>© 2025 Netflix Clone. All Rights Reserved.</small>
      </div>
    </div>
  </footer>
);

export default Footer;