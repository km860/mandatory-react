/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)

The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/

import React from 'react';

export default function Tile(props){
  let playerStyle = props.board[props.id] === 1 ? 'plr1' : 'plr2';
  if (props.board[props.id] === 0 ) {
    playerStyle = null;
  }
  if (props.winline.length > 0 && props.winline.filter(item => item === props.id).length > 0) {
    playerStyle += ' line';
  }
  let text = props.board[props.id] === 1 ? 'X' : 'O';
  return (
    <div className={'tile ' + playerStyle} onClick={() => props.onClick()}>
      {text}
    </div>
  );
}
