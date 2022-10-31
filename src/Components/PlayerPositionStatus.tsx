
import Dice from './Dice';
import Board from './Board';
import { symbol } from "./PlaceOfSankeAndLAdder";


type playrprops = {
    names: String[]
}
const PlayerPositionStatus = (props: playrprops) => {
    const Symbol=symbol;
    let ParticipantsFullList:any[] = [];
    let playerList = props.names
    for (let index = 1; index < playerList.length; index++) {
        ParticipantsFullList.push(
            {
                "playername": playerList[index],
                "playerId": index,
                "playerPosition": 0,
                "playerSymbol":Symbol[index-1]
            }
        )
    }
    return (
        <>
            <Dice list={ParticipantsFullList}/>            
        </>
    )
}
export default PlayerPositionStatus