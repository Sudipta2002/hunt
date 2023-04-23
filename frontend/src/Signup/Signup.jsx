import React, { useState } from "react";
import "./Signup.css";
import { Button } from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup({setSignup}) {
  const [email, setEmail] = useState("");
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Form submitted with email: " + email + " and password: " + password);
    try {
        const config={
            headers:{
              "Content-type":"application/json",
            },
          };
        const {data}= await axios.post(`${process.env.REACT_APP_APPLICATION_SERVER}/api/v1/signUp`,{email,password,username},config);
        setSignup(false);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="username">Username:</label>
      <input type="name" id="username" name="usename" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" onClick={handleSubmit}>Sign Up</button>
      <p>Already have an account ? <Button onClick={()=>setSignup(false)} className="sign">Login </Button></p>
    </form>
  );
}

export default Signup;
