// App.js
import React from 'react';
import Navbar from './navbar'; // Adjust path as needed
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Optional, for route navigation

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
