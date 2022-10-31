
import "./Board.css";
import { snakeLadderPosition } from "./PlaceOfSankeAndLAdder";
import { fromTo } from "./PlaceOfSankeAndLAdder";
import PlayerMoving from "./PlayerMoving";

type listprops = {
    list: {
        "playername": String,
        "playerId": Number,
        "playerPosition": number,
        "playerSymbol": String
    }[]
}

const Board = (props: listprops) => {

    const value = [];
    const array = [];
    let row = 0;
    let lastvalueofrow = 0;
    for (let i = 100; i > 0; i--) {
        array.push(i)
    }
    for (let j = 0, k = 0; j < 100; j++) {
        if (j % 10 === 0) {
            row += 1
            lastvalueofrow = array[j]
            k = 10
        }
        if (row % 2 === 0) {
            k--;
            value[j] = lastvalueofrow - k;
        } else value[j] = array[j]
    }
    return (
        <div>
            <div className="wrapper">
                {value.map((element) => (
                    <div className="box" id={"box" + element.toString()}>
                        <div className="row">
                            <div className='col-lg-6'>
                                <h5>{element}</h5>
                                <PlayerMoving value={element} list={props.list}/>
                            </div> 
                            <div className='col-lg-6'>
                                <h6>{snakeLadderPosition(element)}</h6>
                                <p>{fromTo(element)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Board;