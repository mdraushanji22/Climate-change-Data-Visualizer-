import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Temperature from "./components/Temperature";
import Emissions from "./components/Emissions";
import SeaLevel from "./components/SeaLevel";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/emissions" element={<Emissions />} />
        <Route path="/sea-level" element={<SeaLevel />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="footer">
        <div className="container">
          <p className="text-h4">Climate Change Data Visualizer</p>
          <p className="text-muted">
            Data sourced from NASA, NOAA, and other scientific organizations.
            This tool is for educational purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
