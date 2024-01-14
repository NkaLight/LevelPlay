import React from "react";

const TicTacToe = (props) => {
    // Initialize the game board as an array
    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = React.useState(true); // To track whose turn it is (X or O)
    const [count , setCount] = React.useState(0)
    // Function to handle a square click
    const handleSquareClick = (index) => {
      if (calculateWinner(board) || board[index]) {
        // If there's a winner or the square is already filled, return early
        return;
      }
      /**Increment count by one for conditonal rendering later on */
      setCount(prevState => prevState + 1)
  
      // Create a copy of the current board
      const newBoard = [...board];
      newBoard[index] = xIsNext ? 'X' : 'O';
  
      // Update the board and toggle the player
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    };
  
    // Function to calculate the winner
    const calculateWinner = (squares) => {
      // Define winning combinations
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
  
      return null;
    };

    // Render the game board
  const renderSquare = (index) => {

        /**Selectively render certain sides of the borders, basde on 
         * the index of each square to achieve design specifications */
        const styles = {
            borderTop: (index !== 0 && index !== 1 && index !== 2) ? "flex" : "none",
            borderLeft: (index !== 3 && index !== 0 && index !== 6)? "flex": "none",
            borderRight: (index !== 2 && index !== 5 && index !== 8) ? "flex": "none",
            borderBottom: (index !== 6 && index !== 7 && index !== 8) ? "flex" : "none"
        }

    return (
      <button className="square" onClick={() => handleSquareClick(index)} style={styles} >
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else if( !winner && count < 9) {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }else if(!winner && count === 9){
    status = "Draw"
  }else if(props.gameEnded){
    status = "Game ended start new game."
  }

  return (
    <div>
        <div className="game-info">
            <div className="game-status">{status}</div>
        </div>
        
        <br/>
        <br/>
        <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      
    </div>
    </div>
    
  );
};
export default TicTacToe