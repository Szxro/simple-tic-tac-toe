import type { SquareValue } from "../models";

/**
 * Props for the GameHistory component.
 */
type GameHistoryProps = {
  /**
   * Array of board states representing the history of the game.
   * Each entry is an array of 9 squares ("X", "O", or null).
   */
  history: SquareValue[][];
  /**
   * Callback fired when the user wants to jump to a specific move.
   *
   * @param move - The index of the move to jump to.
   */
  onJump: (move: number) => void;
};

/**
 * Callback fired when the user wants to jump to a specific move.
 *
 * @param move - The index of the move to jump to.
 */
export default function GameHistory({ history, onJump }: GameHistoryProps) {
  return (
    <ol>
      {history.map((_, index) => {
        const description =
          index > 0 ? `Go to move #${index}` : `Go to game start`;
        return (
          <li key={index}>
            <button type="button" onClick={() => onJump(index)}>
              {description}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
