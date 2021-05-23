import React from "react";
import Tile from '../../../Tile';


function PuzzleAPieceOne() {
  return (
    <Tile positive={''} parallax={0.16} className={`puzzle puzzle_piece puzzle_a  puzzle_a_piece puzzle_a_piece-one`}>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="225 20 110 110">

            <path
        fill="white"
        stroke="white"
        d="M237.018 87.905L236.546 70.579 239.376 72.133 245.269 73.031 251.399 70.825 253.756 64.942 252.343 59.875 247.627 58.402 241.811 58.567 236.624 60.527 236.153 43.284 254.858 43.202 252.343 39.361 251.949 35.194 252.893 32.987 257.137 30.618 261.123 31.524 263.187 34.867 261.931 39.361 261.239 42.965 282.245 42.674 281.578 58.65 278.283 56.625 273.552 56.951 269.839 59.072 267.592 64.139 270.218 69.827 276.522 70.732 281.341 69.025 281.498 83.575z"
      ></path>
    
    </svg>
    </Tile>
  );
}

export default PuzzleAPieceOne;
