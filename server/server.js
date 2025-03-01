/*

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs-login"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// ✅ **Fetch First Profile**
app.get("/profile", (req, res) => {
    const query = "SELECT * FROM job_seekers ORDER BY id LIMIT 1";

    db.query(query, (err, result) => {
        if (err) {
            console.error("Error fetching profile:", err);
            return res.status(500).json({ message: "Error fetching profile" });
        }
        if (result.length > 0) {
            res.json(result[0]); // Return the first job seeker's profile
        } else {
            res.status(404).json({ message: "No profiles found" });
        }
    });
});

// Start Server
app.listen(5000, () => {
    console.log("✅ Server running on port 5000");
});
*/


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs-login"
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});

// Fetch profile data
app.get('/profile/:id?', (req, res) => {
    const userId = req.params.id;

    let sql;
    let params;

    if (userId) {
        // Fetch profile by specific ID
        sql = 'SELECT id, email, name, qualification, job FROM job_seekers WHERE id = ?';
        params = [userId];
    } else {
        // Fetch the first user's profile (smallest ID)
        sql = 'SELECT id, email, name, qualification, job FROM job_seekers ORDER BY id ASC LIMIT 1';
        params = [];
    }

    db.query(sql, params, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.status(404).json({ message: 'No user found' });
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
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'Profile updated successfully' });
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});