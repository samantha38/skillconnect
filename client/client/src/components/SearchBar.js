import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(title, location);
  };

  return (
    <div className="mb-4 text-center">
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control border-primary"
          placeholder="Search by job title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control border-primary"
          placeholder="Search by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
