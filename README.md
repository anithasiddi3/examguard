# 📝 ExamGuard - Online Exam Proctoring & Result Analysis System

## 📌 Project Overview

ExamGuard is a full-stack web application developed for conducting online examinations and analyzing student performance.

The system allows students to attend exams, submit answers, and receive evaluation results. It also provides analytics, leaderboard functionality, and role-based modules for exam management.

This project is developed using:

- ReactJS (Frontend)
- Node.js + Express.js (Backend)
- SQLite (Database)

---

## 🚀 Live Demo

https://examguard1-uj2a.vercel.app

---

## 🛠️ Technologies Used

### Frontend
- ReactJS
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- SQLite

---

## 📁 Project Structure

```
examguard/
│
├── frontend/
│   ├── public/
│   ├── src/
│
├── backend/
│   ├── database/
│   ├── server.js
│
└── README.md
```

---

## ⚙️ Installation Steps

### Clone Repository

```bash
git clone https://github.com/anithasiddi3/examguard.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint | Purpose |
|----------|-------------------|-----------------------------|
| POST | /api/exams | Create exam |
| POST | /api/evaluate | Submit exam answers |
| GET | /api/results | Get student results |
| GET | /api/leaderboard | Get leaderboard data |

---

## 🗄️ Database Initialization

SQLite database is used for storing:

- Exam details
- Student answers
- Results
- Leaderboard data

Database file:

```
examguard.db
```

Tables include:

- exams
- results

---

## 🎯 Features

### Student Module

- Attend online exam
- Submit answers
- Timer-based examination
- Instant score generation

### Admin Module

- Create exams
- Manage questions
- Monitor performance
- Analyze exam statistics

### Proctor Module

- Monitor examination process
- Detect suspicious activities
- Track violations

### Leaderboard

- Displays top performers
- Performance comparison

### Exam Analytics Dashboard

Displays:

- Total Students
- Pass Percentage
- Violations
- Top Scorer

---

## ✅ Validations Implemented

- Timer-based exam control
- Automatic evaluation
- Empty answer handling
- API error handling
- Result generation validation

---

## 📊 Analytics Dashboard

The analytics dashboard helps admins analyze:

- Student participation
- Pass percentage
- Violation reports
- Top performers

---

## 🖥️ Deployment

Frontend deployed using:

Vercel

Live URL:

https://examguard1-uj2a.vercel.app

---

## 📸 Screenshots

Add screenshots of:

- Exam Page
- Result Page
- Leaderboard
- Admin Dashboard
- Analytics Dashboard

---

## 👨‍💻 Author

Anitha Siddi

---

## 📌 Project Objective

The main objective of this project is to provide an online examination platform with evaluation, monitoring, analytics, and result management features.

The system improves efficiency and reduces manual effort in conducting examinations.
