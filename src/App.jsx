import React, { useState } from 'react';
import '../assets/style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
