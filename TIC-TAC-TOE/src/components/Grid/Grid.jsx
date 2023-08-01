import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Card from "../Card/Card";
import "./Grid.css";
import 'react-toastify/dist/ReactToastify.css';
function isWinner(board, symbol) {
  //rowswise
  if (board[0] == board[1] && board[1] == board[2] && board[2] == symbol) {
    return symbol;
  }
  if (board[3] == board[4] && board[4] == board[5] && board[5] == symbol) {
    return symbol;
  }
  if (board[6] == board[7] && board[7] == board[8] && board[8] == symbol) {
    return symbol;
  }
  // columnswise
  if (board[0] == board[3] && board[3] == board[6] && board[6] == symbol) {
    return symbol;
  }
  if (board[1] == board[4] && board[4] == board[7] && board[7] == symbol) {
    return symbol;
  }
  if (board[2] == board[5] && board[5] == board[8] && board[8] == symbol) {
    return symbol;
  }
  //cross
  if (board[0] == board[4] && board[4] == board[8] && board[8] == symbol) {
    return symbol;
  }
  if (board[2] == board[4] && board[4] == board[6] && board[6] == symbol) {
    return symbol;
  }

  return "";
}

function Grid({ numberofCards }) {
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(numberofCards).fill(""));
  const [turn, setTurn] = useState(false); // if true-> o and if false -> X
  function play(index) {
    setTurn(!turn);
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const winner = isWinner(board, turn ? "O" : "X");
    if (winner) {
      setWinner(winner);
      toast(`Congratulation ${winner} win the game`)
    }

    setBoard([...board]);
    console.log(turn, index);
  }

function reset(params) {
    setBoard(Array(numberofCards).fill(""))
    setWinner(null)
    setTurn(true)
}



  return (
    <>
      {winner && (
        <>
          <h1 className="Trun-Highlight">Winner is {winner}</h1>
          <button onClick={reset}>Reset Game</button>
          <ToastContainer position="top-right" theme="dark" />
        </>
      )}

      <h1 className="Trun-Highlight">Current Turn: {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((value, idx) => {
          return <Card  gameEnd ={winner ? true :false } onPlay={play} player={value} key={idx} index={idx} />;
        })}
      </div>
    </>
  );
}
export default Grid;
