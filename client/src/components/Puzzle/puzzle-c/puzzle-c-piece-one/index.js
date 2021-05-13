import React from "react";
import Tile from '../../../Tile';


function PuzzleCPieceOne() {
  return (
    <Tile positive={'-'} parallax={0.76} className={`puzzle puzzle_e  puzzle_e_piece puzzle_e_piece-one`}>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">

      <path
        fill="green"
        stroke="#000"
        d="M18.083 252.248L14.539 245.55 14.201 238.076 20.382 233.793 27.05 236.335 30.048 240.81 31.027 245.735 29.111 248.915 26.023 252.306 46.689 252.612 46.914 267.865 43.387 265.665 37.446 263.975 30.53 265.25 26.477 272.034 29.173 279.621 35.373 282.622 43.979 280.534 47.272 278.797 46.342 293.12 18.679 294.792 -0.502 292.734 -0.379 252.136z"
      ></path>
  
    </svg>
    </Tile>
  );
}

export default PuzzleCPieceOne;
