import React from 'react'
import './Card.css'
const Card = ({ind,name,score}) => {
  // {console.log(name)};
  return (
    <div className='card'>
      <div><h4>{ind+1}</h4></div>
      <div><h4>{name}</h4></div>
      <div><h4>{score}</h4></div>   
    </div>
  )
}

export default Card