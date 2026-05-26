import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import HomePage from "./components/HomePage";
import ExamPage from "./pages/ExamPage";
import Leaderboard from "./components/Leaderboard";
import ResultPage from "./components/ResultPage";
import AdminPage from "./components/AdminPage";
import ProctorDashboard from "./components/ProctorDashboard";
import AnalyticsPage from "./components/AnalyticsPage";

function App() {

return (

<HashRouter>

<Routes>

<Route path="/" element={<HomePage />} />

<Route path="/exam" element={<ExamPage />} />

<Route path="/leaderboard" element={<Leaderboard />} />

<Route path="/results" element={<ResultPage />} />

<Route path="/admin" element={<AdminPage />} />

<Route path="/proctor" element={<ProctorDashboard />} />

<Route path="/analytics" element={<AnalyticsPage />} />

</Routes>

</HashRouter>

);

}

export default App;