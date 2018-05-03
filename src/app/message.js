/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from "react";

export default function Message(props) {
  let message = "";
  switch (props.turn) {
    case "plr1":
      message = "Player 1 to play";
      break;
    case "plr2":
      message = "Player 2 to play";
      break;
    case "plr1won":
      message = "Player 1 won";
      break;
    case "plr2won":
      message = "Player 2 won";
      break;
    case "draw":
      message = "Game Over: Draw";
      break;
    default:
      break;
  }
  return <div>{message}</div>;
}
