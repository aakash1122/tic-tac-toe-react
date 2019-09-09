import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export default function GameContextProider(props) {
  let [boxes, setBoxes] = useState(new Array(9).fill(null));
  let [isPlayerX, setIsPlayerX] = useState(true);
  let [gameOver, setGameOver] = useState(false);
  let [boxLeft, setBoxLeft] = useState(9);
  let [winner, setWinner] = useState("");

  useEffect(() => {}, [boxes]);

  let togglePlayer = () => {
    if (isPlayerX) {
      setIsPlayerX(false);
    } else {
      setIsPlayerX(true);
    }
    setBoxLeft(--boxLeft);
  };

  let CheckForWinner = () => {
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
      console.log(boxes);
      const [a, b, c] = lines[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setWinner(boxes[a]);
        console.log("winner");
      }
    }
    return null;
  };

  let updateBox = async pos => {
    let cbox = boxes.slice();
    cbox[pos] = isPlayerX ? "x" : "O";
    setBoxes(cbox);

    togglePlayer();
    CheckForWinner();
  };

  return (
    <GameContext.Provider
      value={{
        togglePlayer,
        boxes,
        setBoxes,
        isPlayerX,
        CheckForWinner,
        winner,
        updateBox
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
