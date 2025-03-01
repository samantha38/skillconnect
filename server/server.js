const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change if needed
    password: "", // Add your MySQL password
    database: "nodejs-login" // Ensure this matches your DB
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// API Route to Fetch Jobs with Filtering
app.get("/jobs", (req, res) => {
    const { title, location } = req.query;
    let sql = "SELECT * FROM jobs WHERE 1=1"; // Base query

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

// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
