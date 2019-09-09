import Box from "./Box";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    boxes: new Array(9).fill(null),
    playerX: true,
    winner: null,
    boxLeft: 9,
    gameOver: false
  };

  setBoxValue = index => {
    if (!this.state.boxes[index]) {
      let newBoxes = this.state.boxes.slice();
      newBoxes[index] = this.state.playerX ? "X" : "O";
      let newCount = this.state.boxLeft - 1;
      this.setState(
        {
          ...this.state,
          boxes: newBoxes,
          boxLeft: newCount
        },
        this.togglePlayer
      );
    }
  };

  togglePlayer = () => {
    this.setState(
      {
        ...this.state,
        playerX: !this.state.playerX
      },
      this.CheckForWinner
    );
  };

  checkBoxAvailability = () => {
    if (this.state.boxLeft === 0) {
      this.setState({ ...this.state, gameOver: true, winner: "No One" });
    }
  };

  CheckForWinner = () => {
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
      if (
        this.state.boxes[a] &&
        this.state.boxes[a] === this.state.boxes[b] &&
        this.state.boxes[a] === this.state.boxes[c]
      ) {
        this.setState({
          ...this.state,
          gameOver: true,
          winner: this.state.boxes[a]
        });
      } else {
        this.checkBoxAvailability();
      }
    }
    return null;
  };

  playAgain = () => {
    this.setState({
      boxes: new Array(9).fill(null),
      playerX: true,
      winner: null,
      boxLeft: 9,
      gameOver: false
    });
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.gameOver ? (
          <div className="winner-container">
            <h1>Winner is {this.state.winner}</h1>
            <button onClick={this.playAgain}>Play Again</button>
          </div>
        ) : null}
        <h1>Classic TIC TAC TOE</h1>
        <div className="container">
          <div className="row">
            <Box
              value={this.state.boxes[0]}
              pos={0}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
            <Box
              value={this.state.boxes[1]}
              pos={1}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
            <Box
              value={this.state.boxes[2]}
              pos={2}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
          </div>
          <div className="row">
            <Box
              value={this.state.boxes[3]}
              pos={3}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
            <Box
              value={this.state.boxes[4]}
              pos={4}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
            <Box
              value={this.state.boxes[5]}
              pos={5}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
          </div>
          <div className="row">
            <Box
              value={this.state.boxes[6]}
              pos={6}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
            <Box
              value={this.state.boxes[7]}
              pos={7}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
            <Box
              value={this.state.boxes[8]}
              pos={8}
              setBoxValue={this.setBoxValue}
              winner={this.state.winner}
            />
          </div>
        </div>
      </div>
    );
  }
}
