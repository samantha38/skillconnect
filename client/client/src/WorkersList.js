import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorkersList.css"; // Import the CSS file for styling

const WorkersList = () => {
  const [workers, setWorkers] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [requestedWorkers, setRequestedWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/workers");
        console.log("Workers data:", res.data); // Log the fetched data
        setWorkers(res.data);
      } catch (error) {
        console.error("Error fetching workers:", error);
      }
    };
    fetchWorkers();
  }, []);

  const handleLocationFilterChange = (e) => setLocationFilter(e.target.value);
  const handleSkillFilterChange = (e) => setSkillFilter(e.target.value);

  const handleRequest = (worker) => {
    setRequestedWorkers((prev) => [...prev, worker]);
    alert(`${worker.name} has been requested!`);
  };

  const filteredWorkers = workers.filter((worker) => {
    const workerLocation = worker.location || ""; // Default to empty string if undefined
    const workerSkill = worker.skill || ""; // Default to empty string if undefined
    const matchesLocation = workerLocation.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesSkill = workerSkill.toLowerCase().includes(skillFilter.toLowerCase());
    return matchesLocation && matchesSkill;
  });

  return (
    <div className="workers-container">
      <h2>Find Workers</h2>

      {/* Filters */}
      <div className="filters">
        <label>
          Filter by Location:
          <input
            type="text"
            value={locationFilter}
            onChange={handleLocationFilterChange}
            placeholder="Enter location..."
          />
        </label>
        <label>
          Filter by Skill:
          <input
            type="text"
            value={skillFilter}
            onChange={handleSkillFilterChange}
            placeholder="Enter skill..."
          />
        </label>
      </div>

      {/* Workers List */}
      <div className="workers-list">
        {filteredWorkers.map((worker, index) => (
          <div key={index} className="worker-card">
            <h3>{worker.name}</h3>
            <p><strong>Mobile:</strong> {worker.mobile}</p>
            <p><strong>Location:</strong> {worker.location || "N/A"}</p>
            <p><strong>Skill:</strong> {worker.skill || "N/A"}</p>
            <p><strong>Experience:</strong> {worker.experience || "N/A"}</p>
            <button onClick={() => handleRequest(worker)} className="request-button">
              Request
            </button>
          </div>
        ))}
      </div>

      {/* Requested Workers */}
      <h3>Requested Workers:</h3>
      <ul>
        {requestedWorkers.map((worker, index) => (
          <li key={index}>
            {worker.name} - {worker.skill || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkersList;