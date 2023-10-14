// src/App.js
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/Routes"; // Import the RoutesComponent

function App() {
  return (
    <Router>
      <RoutesComponent /> {/* Use the imported RoutesComponent */}
    </Router>
  );
}

export default App;
