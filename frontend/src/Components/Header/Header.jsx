import React from 'react'
import './Header.css';
import Button from '@mui/material/Button';
import {UserState} from '../../Context/UserProvider'
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const {user}=UserState(); 
  const navigate = useNavigate();
  const handleClick = () => {
    if (localStorage.getItem("userInfo")) {
      localStorage.removeItem("userInfo");
    }
    if (localStorage.getItem("score")) {
      localStorage.removeItem("score");
    }
    if (localStorage.getItem("stage")) {
      localStorage.removeItem("stage");
    }
    navigate("/");
  }
  return (
    <>
    <div className='header'>

    <span >Treasure Hunt</span>
    <div className="btn">
      {user &&<Button variant='contained' onClick={handleClick}>Log Out</Button>}
        
    </div>
    </div>
    </>
  )
}

export default Header