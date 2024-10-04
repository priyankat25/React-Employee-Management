import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../componentStyling/Navbar.css"; // Importing CSS file

export default function Navbar() {
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    // Here, you can clear any user data or tokens if necessary
    // localStorage.removeItem('userToken'); // Example of clearing a token
    navigate("/"); // Redirect to the signup page
  };

  return (
    <nav>
      <NavLink to="/add">Add Employee</NavLink>
      <NavLink to="/update">Update Employee</NavLink>
      <NavLink to="/search">Search Employee</NavLink>
      <NavLink to="/employees">Get all Employees</NavLink>
      <button onClick={handleLogout}>HOME</button>
    </nav>
  );
}
