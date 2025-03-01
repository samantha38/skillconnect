import React from "react";
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

export default App;
