import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const JobListings = ({ searchTitle, searchLocation }) => {
  const [jobs, setJobs] = useState([]);
  const [requestedJobs, setRequestedJobs] = useState([]);

  // Fetch jobs from the backend with filters
  const fetchJobs = async () => {
    try {
      let url = "http://localhost:5000/jobs";
      const params = new URLSearchParams();
      if (searchTitle) params.append("title", searchTitle);
      if (searchLocation) params.append("location", searchLocation);
      
      const response = await fetch(`${url}?${params.toString()}`);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [searchTitle, searchLocation]); // Refetch when filters change

  const handleRequestJob = (job) => {
    setRequestedJobs((prev) => [...prev, job]);
    alert(`You have requested the job: ${job.title}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Job Listings</h2>
      <div className="row">
        {jobs.length === 0 ? (
          <p className="text-center text-muted">No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="col-md-3">
              <div className="card mb-4 shadow-sm border-primary">
                <div className="card-body">
                  <h3 className="card-title">{job.title}</h3>
                  <p className="card-text">{job.description}</p>
                  <p className="text-muted">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-muted">
                    <strong>Salary:</strong> {job.salary}
                  </p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => handleRequestJob(job)}
                  >
                    Request Job
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Requested Jobs List */}
      <h3 className="mt-4">Requested Jobs:</h3>
      <ul>
        {requestedJobs.map((job, index) => (
          <li key={index}>{job.title} - {job.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;