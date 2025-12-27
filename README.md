# Simple Tic-Tac-Toe

This project is based on the official React Tic-Tac-Toe tutorial, with a few of my own adjustments.

## Features

- Fully Interactive 3x3 Board
- Move history and jump to move functionality
- Draw detection and reset functionality
- Winner detection with status functionality
- Stateless components (lift state up)

## Installation

1. clone the repository

```bash
git clone https://github.com/Szxro/simple-tic-tac-toe
cd tic-tac-toe-react
```

2. Install deps

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
```

## Project Structure

```
src/
├─ components/
│  ├─ Board.tsx
│  ├─ Square.tsx
│  └─ GameHistory.tsx
│  └─ Game.tsx
├─ utils/
│  └─ calculate-winner.ts
├─ models/
│  └─ square-value.model.ts
│  └─ index.ts
├─ App.tsx
└─ index.tsx
```

## Tech Stack

- Vite
- React
- Typescript
- Css

## License

This project is released under the MIT License.
