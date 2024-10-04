import React, { useState } from "react";
import axios from "axios";
import "../styling/Add.css";
import Navbar from "../components/Navbar";

export default function Add() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [assets, setAssets] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const assetList = assets.split(",").map((asset) => asset.trim());
    const employeeData = { name, salary: parseInt(salary), assets: assetList };

    const response = await axios.post(
      "http://localhost:8080/addEmployee",
      employeeData
    );
    alert("Employee added successfully!");
    console.log(response.data);
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Salary:</label>
        <input
          type="number"
          placeholder="Eg: 9000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <br />
        <label>Assets (comma separated):</label>
        <input
          type="text"
          placeholder="Eg: Apple, Airtel SIM"
          value={assets}
          onChange={(e) => setAssets(e.target.value)}
        />
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
