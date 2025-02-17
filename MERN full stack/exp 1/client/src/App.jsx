import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios"; // Import axios
import Register from "./register"; // Import Register component
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to PharmSuites</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
