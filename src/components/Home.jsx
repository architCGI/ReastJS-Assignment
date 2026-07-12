import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to The React Session</h1>
      <p>We are building a React application.</p>
      <Link to="/nav" style={{ textDecoration: "none", color: "#007bff" }}>
        Go to Navbar
      </Link>
      <Link
        to="/counter"
        style={{ textDecoration: "none", color: "#007bff", marginLeft: "20px" }}
      >
        Go to Counter
      </Link>
    </div>
  );
}

export default Home;
