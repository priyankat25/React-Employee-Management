import { useState } from "react";
import React from "react";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post("http://localhost:8080/signUp", {
      username,
      email,
      password,
      dob,
      gender,
    });
    console.log({ resp });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="email">EMAIL: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="password">PASSWORD: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="dob">DOB: </label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />
        <br />
        <br />

        <label>GENDER: </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="M"
          id="gender-m"
          checked={gender === "M"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-m">Male</label>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          value="F"
          id="gender-f"
          checked={gender === "F"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-f">Female</label>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          value="O"
          id="gender-o"
          checked={gender === "O"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-o">Other</label>
        <br />
        <br />

        <input type="submit" value="SUBMIT" />
        <br />
        <br />
        <br />
        <br />
        <a href="/">Already have an account? Login instead</a>
      </form>
      {/* <footer>
        <p>
          &copy; 2024 Tune Trove Music Streaming App | Design and Development.
          All Rights Reserved.
        </p>
      </footer> */}
    </div>
  );
}
