import React, { useState } from 'react'
import PlayerList from './PlayerList';
import "./Input.css";
const UserInput = () => {

  const[input,setInput]=useState("");
  return (
    <>
        <div className='input-div'>
            <label>How many Players : </label>
            <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>  
            <p>Minimum 2 Players...</p> 
        </div>
        <div>
            {input?<PlayerList Value={input}/>:null}
        </div>
    </>
  )
}

export default UserInput;