import React, { useState } from 'react';
import './App.css';

// Sample data for workers
const workers = [
  { name: 'Savita Chaudhary', mobile: '1237767890', location: 'Mumbai, India', skill: 'House-Helper', experience: '2 years' },
  { name: 'Ram Jadhav', mobile: '9876543210', location: 'Nagpur, India', skill: 'Plumber', experience: '3 years' },
  { name: 'Sunita Patil', mobile: '5551239876', location: 'Jalgaon, India', skill: 'Cook', experience: '7 years' },
  { name: 'Sunita Bajaj', mobile: '1234569990', location: 'Mumbai, India', skill: 'House-Helper', experience: '2 years' },
  { name: 'Rashmi Patil', mobile: '12345778890', location: 'Akola, India', skill: 'House-Helper', experience: '5 years' },
  { name: 'Shyam Bhavsar', mobile: '9876543210', location: 'Nagpur, India', skill: 'Driver', experience: '3 years' },
  { name: 'Isha Bhavsar', mobile: '9876666610', location: 'Amravati, India', skill: 'Accountant', experience: '2 years' },
  { name: 'Mahesh Patil', mobile: '8881234567', location: 'Boisar, India', skill: 'Carpenter', experience: '4 years' },
  { name: 'Aakash Bhavsar', mobile: '9876543210', location: 'Surat, India', skill: 'Peon', experience: '3 years' },
  { name: 'Suyash Samant', mobile: '9888543210', location: 'Office-boy, India', skill: 'Accountant', experience: '2 years' },
  { name: 'Asha Patil', mobile: '6661234567', location: 'Nasik, India', skill: 'Nurse', experience: '6 years' },
  { name: 'Lata Patil', mobile: '8777234567', location: 'Boisar, India', skill: 'Nurse', experience: '4 years' },
  { name: 'Anurag Patil', mobile: '8881234567', location: 'Mumbai, India', skill: 'Labour', experience: '2 years' },
  { name: 'Abhi Chaudhary', mobile: '8881444567', location: 'Mumbai, India', skill: 'Labour', experience: '1 years' },
  { name: 'Akshay Patil', mobile: '8881288567', location: 'Mumbai, India', skill: 'Labour', experience: '3 years' }
];

const WorkerCard = ({ worker, onRequest }) => {
  return (
    <div className="worker-card">
      <h3>{worker.name}</h3>
      <p><strong>Mobile:</strong> {worker.mobile}</p>
      <p><strong>Location:</strong> {worker.location}</p>
      <p><strong>Skill:</strong> {worker.skill}</p>
      <p><strong>Experience:</strong> {worker.experience}</p>
      <button onClick={() => onRequest(worker)} className="request-button">
        Request
      </button>
    </div>
  );
};

const WorkersList = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [requestedWorkers, setRequestedWorkers] = useState([]);

  const handleLocationFilterChange = (e) => setLocationFilter(e.target.value);
  const handleSkillFilterChange = (e) => setSkillFilter(e.target.value);
  
  const handleRequest = (worker) => {
    setRequestedWorkers((prev) => [...prev, worker]);
    alert(`${worker.name} has been requested!`);
  };

  const filteredWorkers = workers.filter((worker) => {
    const matchesLocation = worker.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesSkill = worker.skill.toLowerCase().includes(skillFilter.toLowerCase());
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
          <WorkerCard key={index} worker={worker} onRequest={handleRequest} />
        ))}
      </div>

      {/* Requested Workers */}
      <h3>Requested Workers:</h3>
      <ul>
        {requestedWorkers.map((worker, index) => (
          <li key={index}>{worker.name} - {worker.skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkersList;