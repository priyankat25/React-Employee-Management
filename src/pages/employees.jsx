import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styling/Employee.css";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/getAllEmployee"
        );
        setEmployees(response.data);
      } catch (err) {
        setError("Failed to fetch employees.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }} className="container">
      <Navbar />
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>All Employees List</h2>
      {employees.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        employees.map(({ id, name, salary, assets = [] }, index) => (
          <div key={index}>
            <h4>
              <p>ID: {id}</p>
            </h4>
            <h4>{name}</h4>
            <p>Salary: {salary}</p>
            <p>
              Assets:{" "}
              {Array.isArray(assets) && assets.length > 0
                ? assets.join(", ")
                : "No assets available"}
            </p>
            <br />
            <br />
          </div>
        ))
      )}
    </div>
  );
}
