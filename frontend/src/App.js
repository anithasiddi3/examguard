import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import ExamPage from "./pages/ExamPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ExamPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;