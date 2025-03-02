import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Reviews from "./Reviews";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
import JobListings from "./JobListings";
import JobForm from "./JobForm";
import WorkersList from "./WorkersList";
import Login from "./Login"; // Import Login component
import Signup from "./Signup"; // Import Signup component

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleJobAdded = () => {
    // If refresh logic is needed, add it here
  };

  const handleLogin = (user) => {
    // Handle user login logic here
    console.log("Logged in user:", user);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="mt-5">
                  <SearchBar
                    onSearch={(title, location) => {
                      setSearchTitle(title);
                      setSearchLocation(location);
                    }}
                  />
                </div>
                <JobListings searchTitle={searchTitle} searchLocation={searchLocation} />
                <AboutUs />
                <footer>
                  <Reviews />
                </footer>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-job" element={<JobForm onJobAdded={handleJobAdded} />} />
          <Route path="/workers" element={<WorkersList />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;