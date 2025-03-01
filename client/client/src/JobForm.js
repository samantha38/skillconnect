import { useState } from "react";

const JobForm = ({ onJobAdded }) => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Submitting job:", job); // Debugging step

    const response = await fetch("http://localhost:5000/add-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
    });

    const data = await response.json();
    console.log("Response from server:", data); // Debugging step

    alert(data.message);
    onJobAdded();
};


  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-3 text-center">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter job title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Job Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              placeholder="Enter job description"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Enter job location"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="text"
              name="salary"
              className="form-control"
              placeholder="Enter salary"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;