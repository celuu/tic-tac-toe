import { useState } from "react";
import "./board.css";

const Board: React.FC = () => {
  const [game, setGame] = useState( Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null)))
  const [currentPlayer, setCurrentPlayer] = useState('X')


  return (
    <>
    <button>Start Game</button>
    <text>You are: {currentPlayer} </text>
      <div className="outer-container">
        <div className="grid-container">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    </>
  );
};

export default Board;
