import type { SquareValue } from "../models";

/**
 * Calculates the winner based on the predefined winning lines.
 *
 * @param squares - An array representing the 9 squares of the board.
 * @returns The winning player ("X" or "O"), or null if no winner is found.
 */
export function calculateWinner(squares: SquareValue[]): string | null {
  // Winning lines
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];

  // Chek every winning combination line by line
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Destructure the line (0(a), 1(b), 2(c))

    if (
      squares[a] && // Square[a] exists?
      squares[a] === squares[b] && // All three values are equals
      squares[a] === squares[c]
    ) {
      return squares[a]; // Return the winner 'X' or 'O'
    }
  }
  return null; // No winner found
}
