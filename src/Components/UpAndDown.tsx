import {placesOfSnakeLadder} from "./PlaceOfSankeAndLAdder"
type List={
    "playername": String,
    "playerId": Number,
    "playerPosition": number,
    "playerSymbol":String
}[]

export const UpAndDown=(list:List)=>{
    list.forEach((data)=>{
        if (placesOfSnakeLadder.ladder.from.includes(data.playerPosition)) {
            let index = placesOfSnakeLadder.ladder.from.indexOf(data.playerPosition)
            data.playerPosition=placesOfSnakeLadder.ladder.to[index]
        }else if(placesOfSnakeLadder.snake.from.includes(data.playerPosition)){
            let index = placesOfSnakeLadder.snake.from.indexOf(data.playerPosition)
            data.playerPosition=placesOfSnakeLadder.snake.to[index]
        }
    })
   
}