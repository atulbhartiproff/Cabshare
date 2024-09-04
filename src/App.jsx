// App.js
import React from "react";
import Navbar from "./navbar"; // Adjust path as needed
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Optional, for route navigation
import TripList from "./cards";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <div>
          <TripList />
        </div>
      </Router>
    </>
  );
};

export default App;
