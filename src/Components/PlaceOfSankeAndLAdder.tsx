type Places={
    snake :{
        from:Number[],
        to:number[]
    },
    ladder:{
        from:Number[],
        to:number[]
    }
 }

export const symbol:String[]=["🧇","🍥","🥮","🍛","🧅","🥚","🍪","🍘","🍔","🌲"]
 
export let placesOfSnakeLadder:Places = {
    snake:
    {
        from: [98, 96, 92, 77, 58, 53, 21],
        to: [67, 71, 52, 38, 8, 18, 15]
    },
    ladder: {
        from: [7, 12, 16, 34, 50, 69, 62, 89],
        to: [29, 49, 59, 70, 91, 87, 97, 93]
    }
}

export const snakeLadderPosition = (value:Number) => {
    if (placesOfSnakeLadder.snake.from.includes(value)) {
        return '🐍'
    }
    else if (placesOfSnakeLadder.ladder.from.includes(value)) {
        return '⚡'
    }
}

export const fromTo = (value:Number) => {
    if (placesOfSnakeLadder.ladder.from.includes(value)) {
        let index = placesOfSnakeLadder.ladder.from.indexOf(value)
        return `${value}-${placesOfSnakeLadder.ladder.to[index]}`
    } else if (placesOfSnakeLadder.snake.from.includes(value)) {
        let index = placesOfSnakeLadder.snake.from.indexOf(value)
        return `${value}-${placesOfSnakeLadder.snake.to[index]}`
    }
}

