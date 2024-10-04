import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styling/Search.css";

export default function GetEmployee() {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getEmployee?id=${employeeId}`
      );
      setEmployee(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching employee:", error);
      setError("Failed to fetch employee data. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleFetch}>Get Employee</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {employee && (
        <div className="employee-info">
          <h3>{employee.name}</h3>
          <p>Salary: {employee.salary}</p>
          <p>
            Assets:{" "}
            {employee.assets && employee.assets.length > 0
              ? employee.assets.join(", ")
              : "No assets available"}
          </p>
        </div>
      )}
    </div>
  );
}
