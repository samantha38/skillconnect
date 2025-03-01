const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs-login"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
    console.log("Connected to MySQL");
});

// ========== Profile Routes ==========

// Fetch profile data
app.get('/profile/:id?', (req, res) => {
    const userId = req.params.id;
    let sql;
    let params;

    if (userId) {
        sql = 'SELECT id, email, name, qualification, job FROM job_seekers WHERE id = ?';
        params = [userId];
    } else {
        sql = 'SELECT id, email, name, qualification, job FROM job_seekers ORDER BY id ASC LIMIT 1';
        params = [];
    }

    db.query(sql, params, (err, result) => {
        if (err) {
            console.error("Error fetching profile:", err);
            return res.status(500).json({ message: "Database error" });
        }
        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.status(404).json({ message: "No user found" });
        }
    });
});

// Update profile data
app.put('/profile/:id', (req, res) => {
    const userId = req.params.id;
    const { qualification, job } = req.body;
    const sql = 'UPDATE job_seekers SET qualification = ?, job = ? WHERE id = ?';
    
    db.query(sql, [qualification, job, userId], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: "Database error" });
        }
        res.json({ message: "Profile updated successfully" });
    });
});

// ========== Job Routes ==========

// Fetch jobs with optional filtering
app.get("/jobs", (req, res) => {
    const { title, location } = req.query;
    let sql = "SELECT * FROM jobs WHERE 1=1";
    let queryParams = [];

    if (title) {
        sql += " AND title LIKE ?";
        queryParams.push(`%${title}%`);
    }
    if (location) {
        sql += " AND location LIKE ?";
        queryParams.push(`%${location}%`);
    }

    db.query(sql, queryParams, (err, results) => {
        if (err) {
            console.error("Error fetching jobs:", err);
            return res.status(500).json({ message: "Error fetching jobs" });
        }
        res.json(results);
    });
});

// Add a new job
app.post("/add-job", (req, res) => {
    const { title, description, location, salary } = req.body;
    const sql = "INSERT INTO jobs (title, description, location, salary) VALUES (?, ?, ?, ?)";
    const values = [title, description, location, salary];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error adding job:", err);
            return res.status(500).json({ message: "Error adding job" });
        }
        res.json({ message: "Job added successfully", id: result.insertId });
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
