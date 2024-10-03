// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated to import Routes
import Watch from "./components/Watch";
import Shortcuts from "./components/Shortcuts";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<Watch />} />{" "}
        {/* Updated to use element prop */}
        <Route path="/shortcuts" element={<Shortcuts />} />{" "}
        {/* Updated to use element prop */}
      </Routes>
    </Router>
  );
};

export default App;
