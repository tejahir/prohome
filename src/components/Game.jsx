import { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function getWinner(squares) {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleSquareClick(index) {
    if (board[index] || getWinner(board)) return;

    const updated = [...board];
    updated[index] = isXTurn ? "X" : "O";

    setBoard(updated);
    setIsXTurn(!isXTurn); // FIXED (pehle yahan galti thi)
  }

  function getGameStats() {
    const winner = getWinner(board);
    if (winner) return `Winner: ${winner}`;
    if (board.every((sq) => sq !== null)) return "It's a draw!";
    return `Next Player: ${isXTurn ? "X" : "O"}`;
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div className="min-w-298 h-146 flex items-center justify-center bg-[#0a0f2d]/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
      <div className="w-full max-w-[300px] mx-5">
        <h1 className="text-5xl font-semibold text-white mb-8 text-center">
          Tic Tac Toe
        </h1>



        <div className="grid grid-cols-3 gap-3 rounded-xl mb-6">
          {board.map((square, index) => (
            <button
              key={index}
              onClick={() => handleSquareClick(index)}
              className="h-24 w-24 bg-black flex items-center justify-center 
                         rounded-xl text-5xl font-light hover:bg-gray-700 transition"
            >
              <span className={square === "X" ? "text-white" : "text-slate-400"}>
                {square}
              </span>
            </button>
          ))}
        </div>
        

        <button
          className="w-full py-3 text-lg text-white border rounded-xl
                     hover:bg-black hover:text-white transition"
          onClick={resetGame}
        >
          NEW GAME
        </button>
        <br/>
        <br/>
        <br/>

        <div
          className={`text-center mb-6 ${
            getWinner(board)
              ? "text-2xl font-bold text-green-400 animate-bounce"
              : "text-xl text-white"
          }`}
        >
          {getGameStats()}
        </div>
      </div>
    </div>
  );
};

export default Game;
