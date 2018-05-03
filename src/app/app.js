import React from "react";

import { makeMove, newGame } from "../logic";

import Message from "./message";
import Tile from "./tile";

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

class Board extends React.Component {
  renderTile(i) {
    return (
      <Tile
        id={i}
        onClick={() => this.props.handleClick(i)}
        board={this.props.board}
        winline={this.props.winline}
      />
    );
  }
  render() {
    return (
      <div className="board">
        <div>
          {this.renderTile(0)}
          {this.renderTile(3)}
          {this.renderTile(6)}
        </div>
        <div>
          {this.renderTile(1)}
          {this.renderTile(4)}
          {this.renderTile(7)}
        </div>
        <div>
          {this.renderTile(2)}
          {this.renderTile(5)}
          {this.renderTile(8)}
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = newGame();
  }
  resetGame() {
    this.setState(newGame());
  }

  handleClick(id) {
    this.setState(makeMove(this.state, id));

  }
  render() {
    return (
      <div>
        <Message turn={this.state.state} />
        <Board
          board={this.state.board}
          handleClick={id => this.handleClick(id)}
          winline={this.state.line}
        />
        <button type="button" onClick={() => this.resetGame()}>
          Reset Game
        </button>
        {console.log(this.state)}
      </div>
    );
  }
}
