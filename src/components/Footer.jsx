import React from 'react';

function Footer() {
  return (
    <footer className="mt-5 py-4 bg-black text-white">
      <div className="container">
        <div className="text-center mb-3">
          <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-4"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-4"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-4"></i></a>
          <a href="#" className="text-white"><i className="bi bi-youtube fs-4"></i></a>
        </div>
        <div className="text-center text-muted mt-3">
          <small>© 2025 Netflix Clone. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;