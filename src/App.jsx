import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './components/Home';
import TVShows from './components/TvShows';
import MovieDetails from './components/MovieDetails';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

