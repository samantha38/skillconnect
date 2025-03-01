import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import Profile from './Profile';
import JobListings from "./JobListings";
import JobForm from './JobForm';
import WorkersList from './WorkersList';

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const [refresh, setRefresh] = useState(false);

  // Function to refresh job listings when a new job is added
  const handleJobAdded = () => {
    setRefresh(prev => !prev);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
            <div className="mt-5">
              <SearchBar  onSearch={(title, location) => {
                setSearchTitle(title);
                setSearchLocation(location);
              }} />
              </div>
              <JobListings searchTitle={searchTitle} searchLocation={searchLocation} />
              <AboutUs />
              <footer>
                <Reviews />
              </footer>
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-job" element={<JobForm onJobAdded={handleJobAdded} />} /> {/* Added JobForm route */}
          <Route path="/workers" element={<WorkersList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
