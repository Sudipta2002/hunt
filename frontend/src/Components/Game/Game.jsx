import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import  './Game.css';
import axios from 'axios';
import {UserState} from '../../Context/UserProvider'
import { useNavigate } from 'react-router-dom';
import Dash from '../AdminDashboard/Dash';
function Game() {
  const [clues, setClues] = useState([
    { clue: "I am where the wind blows and the grass grows", answer: "https://images.unsplash.com/photo-1504280645497-00afe6a47e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmllbGR8ZW58MHx8MHx8&w=1000&q=80" },
    { clue: "I am where the sun sets and the stars come out", answer: "https://i.pinimg.com/originals/94/81/aa/9481aa84d9446fd65a074a0341cbdbf2.jpg" },
    { clue: "I am where the water flows and the fish swim", answer: "https://c0.wallpaperflare.com/preview/479/162/458/leh-indus-river-indus-valley.jpg" },
    { clue: "I am where the fire burns and the smoke rises", answer: "https://media.gettyimages.com/id/172417303/photo/smoke-stacks-on-the-tiled-roof.jpg?s=612x612&w=gi&k=20&c=_LP6LIpztMGYl5LmC_bFKJy_ENcAXJjBGIJh26gVOZ0=" },
    { clue: `You found the treasure!`, answer: "" },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  // const [isAdmin, setisAdmin]= useState(false);
  const [treasureFound, setTreasureFound] = useState(false);
  const {user,score,start, setStart,isAdmin, setisAdmin, setScore,currentClueIndex, setCurrentClueIndex}=UserState();
  const navigate = useNavigate();
  const handleInput = async() => {
    
    if (treasureFound) {
        return;
      }
    if (inputValue === clues[currentClueIndex].answer) {
        setMessage('');
        const newScore = score + 5;
        setScore(newScore);
        setMessage('Score is '+ newScore);
        // setStage(stage+1);
        const newIndex = currentClueIndex + 1;
        // console.log(typeof(currentClueIndex));
        if (newIndex === clues.length-1) { 
            console.log(newIndex);
            setCurrentClueIndex(currentClueIndex + 1);
            setTreasureFound(true);
            const nscore=score+5;
            setMessage('Final Score is '+ nscore);
            try {
              console.log(nscore,user.username,user.id);
              const {data}= await axios.post(`${process.env.REACT_APP_APPLICATION_SERVER}/api/v1/score`,{score:nscore,username:user.username,userId:user.id});
              console.log(data);
            } catch (error) {
              console.log(error);
            }   
        } else { 
            setCurrentClueIndex(newIndex);
        }
        setInputValue('');
    } else {
        setMessage('Wrong answer, try again!');
        const newScore = score - 2; 
        setScore(newScore);     
        setInputValue('');
    }
  };
  const handleClick = (e) => {
    setInputValue(e.target.getAttribute("src"));
  };
  useEffect(() => {
    inputValue && handleInput();
  }, [inputValue]);
  // console.log(typeof(user.username));
  
  // console.log(user.username);
  const [divContent, setDivContent] = useState([
    'https://images.unsplash.com/photo-1504280645497-00afe6a47e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmllbGR8ZW58MHx8MHx8&w=1000&q=80',
    'https://i.pinimg.com/originals/94/81/aa/9481aa84d9446fd65a074a0341cbdbf2.jpg',
    'https://c0.wallpaperflare.com/preview/479/162/458/leh-indus-river-indus-valley.jpg',
    'https://media.gettyimages.com/id/172417303/photo/smoke-stacks-on-the-tiled-roof.jpg?s=612x612&w=gi&k=20&c=_LP6LIpztMGYl5LmC_bFKJy_ENcAXJjBGIJh26gVOZ0=',
  ]);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledContent = shuffleArray(divContent);
  const handleSubmit= async ()=>{
    setStart(true);window.location.reload();
  }
  
  return (
    <>
    {isAdmin===true ?( <Dash/>) 
    :( 
      <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      
        {!treasureFound ? (
          <div style={{ margin: "20px" }}>
              <div className='clue'>     
                  <p>{
                  //console.log(currentClueIndex)
                  clues[currentClueIndex].clue
                  }</p>
              </div>
            <div className='container-2'>
          
              {shuffledContent.map((content, index) => (
              <div key={index} className='opt1' onClick={handleClick}>
                  <img className='img' src={content}></img>
              </div>
              ))
          }
            </div> 
            <p style={{color: "red"}}>{message}</p>
          </div>
        ) : (
          <>
            <p style={{ fontSize: "24px" }}>{message}</p>
            <Button onClick={handleSubmit} variant='contained'>Start Again</Button>
          </>
        )}
      </div> )
      }
      </>
  );
}

export default Game;
