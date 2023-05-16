import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import YourServices from "./components/YourServices";


function App() {
  return (
    <Router>
       <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/YourServices">Your Services</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/YourServices" element={<YourServices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
