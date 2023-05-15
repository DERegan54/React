import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1> Lights Out! </h1>
      <h4>Click on the squares to turn the lights on and off.</h4>
      <h4>When all of the lights are out, YOU WIN!!!</h4>
      <Board />
    </div>
  );
}

export default App;
