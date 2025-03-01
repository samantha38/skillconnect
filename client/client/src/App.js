import { useState } from "react";
import SearchBar from "./components/SearchBar";
import JobListings from "./components/JobListings";

const App = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  return (
    <div>
      <h1 className="text-center text-primary mt-4">Job Portal</h1>
      <SearchBar onSearch={(title, location) => {
        setSearchTitle(title);
        setSearchLocation(location);
      }} />
      <JobListings searchTitle={searchTitle} searchLocation={searchLocation} />
    </div>
  );
};

export default App;
