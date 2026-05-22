import React from "react";
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ExamPage from "./pages/ExamPage";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import ProctorDashboard from "./pages/ProctorDashboard";
import ResultPage from "./pages/ResultPage";
import Leaderboard from "./pages/Leaderboard";
import CreateExamPage from "./pages/CreateExamPage";

function App() {

return (

<BrowserRouter>

<Routes>

<Route
path="/"
element={<LoginPage/>}
/>

<Route
path="/exam"
element={<ExamPage/>}
/>

<Route
path="/analytics"
element={<AnalyticsDashboard/>}
/>

<Route
path="/create-exam"
element={<CreateExamPage/>}
/>

<Route
path="/proctor"
element={<ProctorDashboard/>}
/>

<Route
path="/results"
element={<ResultPage/>}
/>

<Route
path="/leaderboard"
element={<Leaderboard/>}
/>

</Routes>

</BrowserRouter>

);

}

export default App;