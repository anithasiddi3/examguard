import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ExamList />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;