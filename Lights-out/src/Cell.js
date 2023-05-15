import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/
// The Cell component takes in the flipCellsAroundMe function and the isLit boolean as props.   
// The variable "classes" defines which class should be applied to the cell.  This is determined by
//      whether or not the isLit boolean is true.  If it is true, the class of "Cell-lit" is applied 
//      to the component.  If not, then then "Cell" class is applied to the component.
// The Cell component returns a <td> containing the class to be applied to the cell, and the onClick 
//      event handler that will call the flipCellsAroundme function when the cell is clicked.  The
//      <td> element is then placed into the correct index of the tableBoard array by the Board component,
//      and then the whole board is rendered in the App component.

function Cell({ flipCellsAroundMe, isLit=false }) {  // How is flipCellsAroundMe defined?
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={flipCellsAroundMe} />;
}

export default Cell;
