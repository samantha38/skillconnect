import { useEffect, useState } from "react";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs from the backend
  const fetchJobs = async () => {
    const response = await fetch("http://localhost:5000/jobs");
    const data = await response.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Job Listings</h2>
      <div className="row">
        {jobs.length === 0 ? (
          <p className="text-center text-muted">No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">{job.title}</h3>
                  <p className="card-text">{job.description}</p>
                  <p className="text-muted">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-muted">
                    <strong>Salary:</strong> {job.salary}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobListings;
    