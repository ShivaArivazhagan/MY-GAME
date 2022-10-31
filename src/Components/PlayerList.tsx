import { useState } from "react";
import PlayerPositionStatus from "./PlayerPositionStatus";
import "./InputList.css"

type PlayerProps = {
  Value: String
}

const PlayerList = (props: PlayerProps) => {

  const [Player, setPlayer] = useState("")
  const [playerNameList, setPlayerNameList] = useState([""]);
  let PlayerLists: any = [];
  const howManyPlayers = (value: any) => {
    for (let i = 1; i <= value; i++) {
      PlayerLists.push(i)
    }
  }
  howManyPlayers(props.Value);

  return (
    <div className="list-div">
      {PlayerLists.map((element: any) => {
        return (
          <div className="sub">
            <label>Player{element}Name</label>
            <input type="text" id={element} onChange={(e) => setPlayer(e.target.value)} />
            <button onClick={() => setPlayerNameList([...playerNameList, Player])}>submit</button>
          </div>
        )
      }
      )}
      {playerNameList.length === Number(props.Value) + 1 ?
        <p className="success">Details are Correct..Lets Go</p>
        :<p className="error">Please Fill Correct Details!</p>
      }
        <PlayerPositionStatus names={playerNameList}/>
    </div>
  )
}
export default PlayerList;