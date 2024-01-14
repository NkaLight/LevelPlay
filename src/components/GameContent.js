import React from "react";
import TicTacToe from "./Tic Tac Toe";
export default function GameContent(props){

    /*This state tracks who won a specific round, and update the point accordingly
    *I actually need help with implementing this logic*/
    //const [userWon, setUserWon] = React.useState()
    
  
    
    
    return(
        <div className="gamecontent">
            <p className="gamecontent--users">{`${props.opponent} vs ${props.userName}`}</p>
            <div className="gamecontent--score">
                <p className="gamecontent--points">{`${props.opponentPoints}`}</p>
                <p className="gamecontent--userPoints">{props.userNamePoints}</p>
            </div>
            <div className="board">
                <TicTacToe/>
                <div className="gamecontent-func">
                    <p className="gamecontent-func-endGame">End Game</p>
                    <p className="gamecontent-func-restartGame">Restart Game</p>
                </div>
            </div>
            
        </div>
    )
}