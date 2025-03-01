const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'job_marketplace'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key';

// Register endpoint
app.post('/register', async (req, res) => {
    const { name, email, password, user_type } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const sql = 'INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, hashedPassword, user_type], (err, result) => {
        if (err) return res.status(400).json({ error: 'Email already exists' });
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const user = results[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, user_type: user.user_type }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user_type: user.user_type });
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});