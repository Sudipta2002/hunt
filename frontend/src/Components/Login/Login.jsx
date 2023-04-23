import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
import {UserState} from '../../Context/UserProvider'
import { Button } from "@mui/material";
import axios from 'axios';
function Login({setSignup}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    // const history = useHistory();
    const {setisAdmin}=UserState();
    const nav=()=>{
        navigate('/game');
    }
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    console.log("Form submitted with email: " + email + " and password: " + password);
    
    try {
      console.log(process.env.REACT_APP_APPLICATION_SERVER);
        const config={
            headers:{
              "Content-type":"application/json",
            }, 
          };
        const {data}= await axios.post(`${process.env.REACT_APP_APPLICATION_SERVER}/api/v1/signIn`,{email,password},config);
        localStorage.setItem('userInfo',JSON.stringify(data));
        if(data.username=="Admin@2023"){
          setisAdmin(true);
        }
        navigate('/game');
    } catch (error) {
        console.log(error);
    }
    
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Log in</button>  
      <p>Don't have an account ? <Button onClick={()=>setSignup(true)} className="sign">Signup</Button></p>
    </form>
  );
}

export default Login;
