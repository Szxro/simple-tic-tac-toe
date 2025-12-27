import Square from "./Square";
import { calculateWinner } from "../utils/calculate-winner";
import type { SquareValue } from "../models";

/**
 * Props for the Board component.
 */
type BoardProps = {
  /**
   * Determine if the x is next to move
   */
  xIsNext: boolean;
  /**
   * Current state of the board
   */
  squares: SquareValue[];
  /**
   * Callback fired to update the squares on the board
   */
  onPlay: (nextSquares: SquareValue[]) => void;
};

/**
 * Renders the Tic-Tac-Toe game board.
 *
 * Displays the current game status (next player or winner),
 * renders all 9 squares, and handles user interactions.
 *
 * This component is **stateless** — game state is managed
 * by the parent component via props.
 */
export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares);
  /**
   * Check if all the square are filled to declare it a draw
   */
  const isDraw = squares.every((square) => square !== null);
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw!"
    : `Next Turn: ${xIsNext ? "X" : "O"}`;

  /**
   * Handles a click on a square.
   *
   * Ignores the click if the square is already filled
   * or if the game has already been won.
   */
  const handleClick = (index: number) => {
    if (squares[index] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((value, index) => {
          return (
            <Square
              key={index}
              value={value}
              onSquareClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </>
  );
}
