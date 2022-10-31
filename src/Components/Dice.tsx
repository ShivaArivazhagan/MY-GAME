
import { useState } from 'react'
import Board from './Board';
import "./Dice.css";
import { UpAndDown } from './UpAndDown';

type listprops = {
  list: {
    "playername": String,
    "playerId": Number,
    "playerPosition": number,
    "playerSymbol": String
  }[]
}

const Dice = (props: listprops) => {
  const [rollCount, setRollCount] = useState(1);
  const [random, setRandom] = useState(0);
  const [list, setList] = useState(props.list)

  const rollDice = () => {
    let Random = Math.ceil(Math.random() * 6);
    setRandom(Random)
    setRollCount(rollCount + 1)
    for (let i = 0; i < props.list.length; i++) {
      if (rollCount === props.list[i].playerId) {
        props.list[i].playerPosition += Random;
        setList(props.list)
        if (props.list[i].playerPosition > 100) {
          props.list[i].playerPosition -= Random;
        } 
      }
      if (rollCount === props.list.length) {
        setRollCount(1)
      }
    }
  }
  UpAndDown(list)
  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className="col-lg-3">
            <div className='dice'>
              <button onClick={rollDice}>RollUp</button>
              <h5>{random}</h5>
            </div>
            {props.list.map((element) => {
              return (
                <div>
                  <h6>{element.playername}:{element.playerSymbol}:{element.playerPosition}</h6>
                </div>
              )
            })}
            {props.list.map((element) => {
              return (
                <div>
                 {element.playerPosition===100? <h6>{element.playername} is WINNER 🏆</h6>:""}
                </div>
              )
            })}
          </div>
          <div className="col-lg-9">
            <Board list={list}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dice;