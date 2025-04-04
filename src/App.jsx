import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
// import Settings from "./components/Settings";
// import Profile from "./components/Profile";

export default function App() {
  // const [page, setPage] = useState("home");

  return (
    <div className="app-container" /*onNavigate={setPage}*/>
      <Navbar />
      <main>
        {/* {page === "settings" && <Settings />} */}
        {/* {page === "profile" && <Profile />} */}
        {/* {page === "home" && ( */}
        <>
          <Gallery saga="The Lord of the Rings" />
          <Gallery saga="Star Wars" />
          <Gallery saga="Harry Potter" />
        </>
        {/* )} */}
      </main>
      <Footer />
    </div>
  );
}
