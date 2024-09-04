// StickyNavbar.js
import React from "react";
import { Link } from "react-router-dom"; // Optional if using react-router-dom

const navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <h1 style={styles.logo}>Cab Share</h1>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "15px",
    margin: "3px",
    padding: "1rem",
    position: "sticky", // Makes the navbar sticky
    top: 0, // Sticks to the top of the viewport
    zIndex: 1000, // Ensures the navbar stays above other content
  },
  brand: {
    color: "#fff",
    fontSize: "1.5rem",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  },
  linkHover: {
    backgroundColor: "#555",
  },
};

export default navbar;
