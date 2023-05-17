import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import YourServices from "./components/YourServices";
import DiscoverPage from "./components/DiscoverPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/YourServices" element={<YourServices />} />
          <Route path="/DiscoverPage" element={<DiscoverPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
