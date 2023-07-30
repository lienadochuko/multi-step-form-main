import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './App.css';
import { Home } from "./components";
import { Page2 } from "./components";
import { Page3 } from "./components";
import { Page4 } from "./components";
import { Page5 } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
      </Routes>
    </Router>
  );
}

export default App;