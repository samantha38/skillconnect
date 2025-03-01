import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
