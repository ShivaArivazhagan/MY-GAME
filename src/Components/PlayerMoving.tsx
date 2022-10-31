import React from "react"

type PlayerProps={
    value:Number,
    list:{"playername": String,
    "playerId": Number,
    "playerPosition": number,
    "playerSymbol":String
}[]
}
const PlayerMoving = (props:PlayerProps) =>{
    return(<span>
         {props.list.map((n)=>{
            if(props.value===n.playerPosition){
              return(n.playerSymbol)
            }
          })}
    </span>
    )  
}
export default PlayerMoving