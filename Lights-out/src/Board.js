import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/
// The Board() component takes in props in the form of an object containing values for nrows, ncols, and chanceLightStartsOn

// useState(createBoard) sets the initial state as the return value of the createBoard function.  Then useState is 
//          destructured to gain access to the board and setBoard variables.

// createBoard() function, which will return the data for the the grid where the board will be rendered.
//          The initialBoard variable (line 55) is defined as as an empty array whose indexes will eventually be the y-coodinates of the grid's cells.
//          Each iteration of the first(y) for-loop (line 57) creates an empty array called row, into which the second(x) for-loop (line 58) will push a random value    
//          that is less than or equal to the chanceLightStartsOn value, until it has pushed 1 less than the ncols value. 
//          The indexes of the row arrays are the x-coordinates of the grid's cells. Once the second(x) for-loop has completed its iterations,
//          We now have an array of ncols random values, which makes up the top row of our grid, each value being the chance that the light is lit
//          at the start of the game.  The function then returns to the first(y) for-loop that creates the next row (empty array) and then the second(x) 
//          for-loop pushes ncols random values into it, creating the second row of our grid.  These two loops continue to run until there are nrows rows
//          in the grid.  Once both loops have completed, the createBoard function returns the array of arrays called initialBoard with a random value that 
//          is less than chanceLightStartsOn in each cell. The indexes of the outer array are the y-coordinates of each cell of the grid, and the indexes
//          of the inner arrays are the x-indexes of each cell in the grid. The grid returned by this function is the initial state of the grid at the start of the game.

// hasWon() function, which returns a boolean value of true if every cell on the grid is lit, and false if not.  If this function returns true, 
//          then the game is won.

// flipCellsAround() function takes in a set of coordinates for a cell on the grid.   
//          The state is then changed using setBoard(oldBoard), which takes in the previous board as argument.  Then the coordinates destructured into their x and y values
//          are made into a string separated by a - using the .split() method, and then mapped over to convert them into numbers. A deep copy of the board (called boardCopy) is then made using 
//          the map function and the spread operator.  The function, flipCell() is then defined.  It takes in the x and y values destructured from coord, as well as boardCopy. If the x-y coordinates
//          are on the board (logic: if x is greater than 0 AND x is less than ncols And y is greater than 0 AND y is less than nrows, then it is on the board), then that cell (boardCopy[x][y]) is 
//          flipped to !boardCopy[x][y], meaning that cell is no longer in the same state it was in previously.
// FlipCell() is then called on the coord values that were passed in, as well as the cells above, below, to the left and to the right.  
// setBoard() returns boardCopy, which is the new state of the board. 
// hasWon() is then checked to see if the change in state has won the game, and if so, the <div>You Win!</div> is rendered, ending the game.
// tableBoard is defined as an empty array that will contain the data to be passed into the Cell component.  As above, two for-loops run.  The first(y) loop places the empty row arrays on the grid, 
//          and the inner(x) loop first takes the x-y coordinates from above and defines them as coord, and then Cell components are placed at the indexes of the row created in the outer(y) for-loop.
//          The Cell component's props are isLit, which is defined as the current state of board[x][y], the flipCellsAroundMe function, which calls the flipCellsAround() function on coords, and the 
//          component's key is defined as {coord}. A new <tr> element containing {row} is pushed into the tableBoard array along with key={y}
// Finally, the Board() component returns a <table> element with the className of "Board", and the <tbody> containing {tableBoard}.  
// The Board() component is then rendered inside the App() component

function Board({ nrows=3, ncols=3, chanceLightStartsOn=0.25 }) {
  const [board, setBoard] = useState(createBoard());
  function createBoard() {
    let initialBoard = [];
    for (let y = 0; y < nrows; y++) {
        let row = [];
        for (let x = 0; x < ncols; x++) {
          row.push(Math.random() < chanceLightStartsOn); 
        }
        initialBoard.push(row);
    }   
    return initialBoard;
  }
  function hasWon() {
    return board.every(row => row.every(cell => !cell));
  }
  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number); 
      const boardCopy = oldBoard.map(row => [...row]);
      const flipCell = (y, x, boardCopy) => {
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      return boardCopy;
    });
  }
  if(hasWon()) {
    return <div className="Winner">You Win!</div>;
  }
  let tableBoard = [];
  for(let y=0; y<nrows; y++) {
    let row = [];
    for(let x=0; x<ncols; x++) {
        let coord=`${y}-${x}`;
        row.push(
            <Cell
                key={coord}
                isLit={board[y][x]}
                flipCellsAroundMe={() => flipCellsAround(coord)}
            />
        );
    }
    tableBoard.push(<tr key={y}>{row}</tr>);
  }
  return (
    <table className="Board">
        <tbody>{tableBoard}</tbody>
    </table>
  );
}

export default Board;
