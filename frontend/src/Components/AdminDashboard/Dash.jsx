import React, { useEffect, useState } from 'react'
import './Dash.css';
import Card from '../ScoreCard/Card.jsx';
// import {data} from '../../data';
import axios from 'axios';
const Dash = () => {
    const [dummy, setdummy] = useState([]);
    const [data,setData]=useState([]);
    const getData=  async() =>{
        try {
            const datas =await axios.get('http://localhost:5000/api/v1/dash');
            console.log(datas.data.data);
            setData(datas.data.data);
            // setData(datas.data.data);
            setdummy(soort(datas.data.data)); 
        } catch (error) {
            console.log(error);
        }
    }
    function soort(dataa){
        return dataa.sort((a,b)=>{
            if(a.score===b.score){
                return b.score-a.score;
            }else{
                return b.score-a.score;
            }
        })
    }
    useEffect( () => {
        getData();
    }, [])  

  return (
    <div className='container'>
        <div className='header'>LeaderBoard</div>
          <div className='card-head'>
            <div><h4>RANK</h4></div>
            <div><h4>Name</h4></div>
            <div><h4>Score</h4></div>   
        </div>
        <div className='CardSection'> 
            {
                dummy && dummy.map((e,i)=>{
                    return <Card ind={i} name={e.username} score={e.score}/>
                })
            }
        </div>          
      </div>
  )
}

export default Dash