import { useState } from "react";
import SearchBar from "./components/SearchBar";
import JobListings from "./components/JobListings";
import JobForm from './components/JobForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const [refresh, setRefresh] = useState(false);

    // Function to refresh job listings when a new job is added
    const handleJobAdded = () => {
        setRefresh(prev => !prev);
    };

  return (
    <div>
      <h1 className="text-center text-primary mt-4">Job Portal</h1>
      <SearchBar onSearch={(title, location) => {
        setSearchTitle(title);
        setSearchLocation(location);
      }} />
       <JobForm onJobAdded={handleJobAdded} />
      <JobListings searchTitle={searchTitle} searchLocation={searchLocation} />
    </div>
  );
};

export default App;
