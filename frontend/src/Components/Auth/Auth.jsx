import React, { useState } from 'react'
import Login from '../Login/Login';
import Signup from '../../Signup/Signup';

const Auth = () => {
    const [signup, setSignup]= useState(false);
  return (
    <div>
        {signup===false?<Login setSignup={setSignup}/>:<Signup setSignup={setSignup}/>}
    </div>
  )
}

export default Auth