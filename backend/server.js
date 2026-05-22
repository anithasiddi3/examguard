const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// DB
const db = new sqlite3.Database(
path.join(__dirname, "database", "examguard.db"),
(err) => {
if (err) console.log(err.message);
else console.log("SQLite Connected");
}
);

// TABLES
db.serialize(() => {

// exams
db.run(`
CREATE TABLE IF NOT EXISTS exams (
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT,
course TEXT,
time_limit INTEGER,
status TEXT
)
`);

// results (IMPORTANT)
db.run(`
CREATE TABLE IF NOT EXISTS results (
id INTEGER PRIMARY KEY AUTOINCREMENT,
student_id INTEGER,
score INTEGER,
status TEXT
)
`);

});

// HOME
app.get("/", (req, res) => {
res.send("ExamGuard Backend Running");
});

// CREATE EXAM
app.post("/api/exams", (req, res) => {

const { title, course, time_limit } = req.body;

db.run(
`INSERT INTO exams(title, course, time_limit, status) VALUES (?,?,?,?)`,
[title, course, time_limit, "Scheduled"],
function (err) {
if (err) return res.status(500).json({ message: err.message });

res.json({ message: "Exam Created Successfully" });
}
);

});

// EVALUATE + SAVE RESULT
app.post("/api/evaluate", (req, res) => {

const answers = req.body.answers || {};

let score = 0;

Object.values(answers).forEach(ans => {
if (ans && ans.trim() !== "") {
score++;
}
});

// SAVE RESULT (IMPORTANT FIX)
db.run(
`INSERT INTO results(student_id, score, status) VALUES (?,?,?)`,
[1, score, score >= 1 ? "PASS" : "FAIL"]
);

res.json({
score,
total: 2
});

});

// RESULTS API
app.get("/api/results", (req, res) => {

db.all("SELECT * FROM results ORDER BY id DESC", [], (err, rows) => {

if (err) return res.status(500).json({ error: err.message });

res.json(rows);

});

});

// LEADERBOARD API (FIXED)
app.get("/api/leaderboard", (req, res) => {

db.all(
"SELECT * FROM results ORDER BY score DESC",
[],
(err, rows) => {

if (err) return res.status(500).json({ error: err.message });

res.json(rows);

}
);

});

// START SERVER
app.listen(5000, () => {
console.log("Server running on port 5000");
});