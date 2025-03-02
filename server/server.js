const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Change if your MySQL has a password
  database: "nodejs-login",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL");
});

// ========== Authentication Routes ==========

// User Registration (Signup)
app.post("/register", async (req, res) => {
  const { name, email, password, qualification } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO job_seekers (name, email, password, qualification) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, hashedPassword, qualification || null], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "User registered successfully!" });
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const sql = "SELECT * FROM job_seekers WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful!", user });
  });
});

// ========== Profile Routes ==========

// Fetch profile data
app.get("/profile/:id?", (req, res) => {
  const userId = req.params.id;
  let sql;
  let params;

  if (userId) {
    sql = "SELECT id, email, name, qualification, job FROM job_seekers WHERE id = ?";
    params = [userId];
  } else {
    sql = "SELECT id, email, name, qualification, job FROM job_seekers ORDER BY id ASC LIMIT 1";
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
app.put("/profile/:id", (req, res) => {
  const userId = req.params.id;
  const { qualification, job } = req.body;
  const sql = "UPDATE job_seekers SET qualification = ?, job = ? WHERE id = ?";

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

// ========== Workers Routes ==========

// Fetch All Workers
app.get("/workers", (req, res) => {
  const sql = "SELECT * FROM job_seekers";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching workers:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json(results);
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});