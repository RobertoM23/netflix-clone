import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <>
      <Navbar />
      <Gallery saga="The Lord of the Rings" />
      <Gallery saga="Star Wars" />
      <Gallery saga="Harry Potter" />
      <Footer />
    </>
  );
}

