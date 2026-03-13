const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // set your password
    database: 'test' // set your database name
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

// Serve index.html from the same directory as this file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Example route to test MySQL connection
app.get('/db-test', (req, res) => {
    db.query('SELECT NOW() AS now', (err, results) => {
        if (err) {
            res.status(500).send('Database error');
        } else {
            res.json(results[0]);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});