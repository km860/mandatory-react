// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)

The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:

  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/

function calculateWinner(board) {
  let objWinInfo = { line: [], playerId: 0 };
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { ...objWinInfo, line: lines[i], playerId: board[a] };
    }
  }
  return objWinInfo;
}
export const newGame = () => ({
  state: "plr1",
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  line: [],
  isPlr1: true,
  steps: 0,
  gameOver: false
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play

It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/

export const makeMove = (game, id) => {
  // ...to be implemented!
  if (game.board[id] === 0 && !game.gameOver) {
    let playerId = 0;
    let stateMessage = "";
    let gameOver = game.gameOver;
    let stepNumber = game.steps;
    let winningLine = game.line;

    if (stepNumber % 2) {
      //player 2
      playerId = 2;
      stateMessage = "plr1";
    } else {
      //0 - player 1
      playerId = 1;
      stateMessage = "plr2";
    }

    let newBoard = game.board.map(
      (item, index) => (item === 0 && index === id ? (item = playerId) : item)
    );

    let winner = calculateWinner(newBoard);

    if (winner.playerId === 1) {
      stateMessage = "plr1won";
      winningLine = winner.line;
      gameOver = true;
    } else if (winner.playerId === 2) {
      stateMessage = "plr2won";
      winningLine = winner.line;
      gameOver = true;
    }

    stepNumber = stepNumber + 1;
    if (stepNumber === 9 && !gameOver) {
      gameOver = true;
      stateMessage = "draw";
    }

    //Update state
    return Object.assign({}, game, {
      state: stateMessage,
      board: newBoard,
      line: winningLine,
      gameOver: gameOver,
      steps: stepNumber
    });
  }
  return null;
};
