// src/WorkerRequestForm.js
import React, { useState } from 'react';

const WorkerRequestForm = () => {
  const [workerId, setWorkerId] = useState('');
  const [message, setMessage] = useState('');
  const [isRequestSent, setIsRequestSent] = useState(false);

  const workers = [
    { id: 1, name: 'Savita Chaudhary', phone: '1237767890' },
    { id: 2, name: 'Ram Jadhav', phone: '9876543210' },
    { id: 3, name: 'Sunita Patil', phone: '5551239876' },
    // Add more workers as needed
  ];

  const handleRequest = async () => {
    try {
      const response = await fetch('http://localhost:5000/request-worker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workerId, message }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Request sent successfully!');
        setIsRequestSent(true);
      } else {
        setMessage('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Request a Worker</h2>
      <div>
        <label>Worker:</label>
        <select
          value={workerId}
          onChange={(e) => setWorkerId(e.target.value)}
        >
          <option value="">Select a worker</option>
          {workers.map((worker) => (
            <option key={worker.id} value={worker.id}>
              {worker.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Message (optional):</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
      </div>

      <button onClick={handleRequest}>Request Worker</button>

      {isRequestSent && <p>{message}</p>}
    </div>
  );
};

export default WorkerRequestForm;
