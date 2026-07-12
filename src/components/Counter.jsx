import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  function decrementCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="counter">
      <h1>Interactive Counter</h1>

      <h2>Current Value: {count}</h2>

      <button onClick={incrementCount}>Increase</button>

      <button onClick={decrementCount}>Decrease</button>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#007bff",
          marginLeft: "20px",
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}

export default Counter;
