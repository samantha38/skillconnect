/*import React from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Reviews from "./Reviews";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <AboutUs />
      <footer>
      <Reviews />
      </footer>
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import Profile from './Profile'; // Import the Profile component

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={
                        <>
                            <SearchBar />
                            <AboutUs /> {/* About Us remains unchanged */}
                            <footer>
                                <Reviews />
                            </footer>
                        </>
                    } />
                    <Route path="/about" element={<AboutUs />} /> {/* About Us route */}
                    <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;