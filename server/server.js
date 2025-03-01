const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Allows parsing JSON request body

// Connect to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Change if using a different username
    password: "",       // Enter your MySQL password
    database: "nodejs-login"  // Make sure this matches your database name
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// API Route to Add a Job
app.post("/add-job", (req, res) => {
    const { title, description, location, salary } = req.body;

    if (!title || !description || !location || !salary) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query = "INSERT INTO jobs (title, description, location, salary) VALUES (?, ?, ?, ?)";
    db.query(query, [title, description, location, salary], (err, result) => {
        if (err) {
            console.error("Error inserting job:", err);
            return res.status(500).json({ message: "Error adding job" });
        }
        res.status(201).json({ message: "Job added successfully" });
    });
});

// API Route to Fetch Jobs
app.get("/jobs", (req, res) => {
    db.query("SELECT * FROM jobs", (err, results) => {
        if (err) {
            console.error("Error fetching jobs:", err);
            return res.status(500).json({ message: "Error fetching jobs" });
        }
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
