import { useState } from "react";
import "./board.css";
import Square from "./Square";

const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X')

  const changePlayers = (currentPlayer: string) => {
    if(currentPlayer === "X") {
      setCurrentPlayer("O")
    } else {
      setCurrentPlayer("X")
    }
  }

  const handleClick = (index: number) => {
    if(squares[index]) return;
    let squaresCopy = [...squares];
    squaresCopy[index] = currentPlayer;
    setSquares(squaresCopy)
    changePlayers(currentPlayer)
  }

  return (
    <>
      <button onClick={() => setSquares(Array(9).fill(null))}>
        Start Game
      </button>
      <text>You are: {currentPlayer} </text>
      <div className="outer-container">
        <div className="grid-container">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};

export default Board;
