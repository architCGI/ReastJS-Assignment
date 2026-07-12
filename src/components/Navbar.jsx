import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "#1f2937",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "24px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#f9fafb",
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#f9fafb",
            }}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#f9fafb",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>

      <span
        style={{
          color: "#d1d5db",
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        {props.name}
      </span>
    </div>
  );
}

export default Navbar;
