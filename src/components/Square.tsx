/**
 * Props for the Square component.
 */
type SquareProps = {
  /**
   * The value displayed in the square.
   * - "X" for player X
   * - "O" for player O
   * - null if the square is empty
   */
  value: string | null;
  /**
   * Callback fired when a square is clicked
   */
  onSquareClick: () => void;
};

/**
 * Renders a single square on the Tic-Tac-Toe board.
 *
 * Displays the current value ("X", "O", or null) and
 * notifies the parent component when clicked.
 *
 * This component is **stateless** — game state is managed
 * by the parent component via props.
 */
export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button type="button" className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
