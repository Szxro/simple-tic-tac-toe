import { useState } from "react";
import type { SquareValue } from "../models";
import GameHistory from "./GameHistory";
import Board from "./Board";

/**
 * The Game component manages the state of a Tic-Tac-Toe game.
 *
 * It tracks the history of moves, the current move index, and determines
 * which player's turn is next. This component renders the Board and
 * the move history.
 *
 */
export default function Game() {
  /**
   * Tracks the history of the game.
   * Each entry is an array of 9 squares ("X", "O", or null).
   */
  const [history, setHistory] = useState<SquareValue[][]>([
    Array(9).fill(null),
  ]);
  /**
   * Tracks the index of the current move in the history.
   */
  const [currentMove, setCurrentMove] = useState<number>(0);
  /**
   * Boolean indicating whether it is X's turn.
   */
  const xIsNext = currentMove % 2 === 0;
  /**
   * The current board state for the current move.
   */
  const currentSquares = history[currentMove];

  /**
   * Jump to a specific move in the game history.
   *
   * @param move - The move index to jump to.
   */
  const handleJump = (move: number) => {
    setCurrentMove(move);
  };

  /**
   * Updates the game state after a player makes a move.
   *
   * @param nextSquares - The updated board squares after the move.
   */
  const handlePlay = (nextSquares: SquareValue[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  /**
   * Reset the game state
   */
  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} />
      </div>
      <div className="game-info">
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <br />
        <GameHistory history={history} onJump={handleJump} />
      </div>
    </div>
  );
}
