import React from "react";
import Tile from '../../../Tile';

function PuzzleAPieceOne() {
  return (
    <Tile positive={''} parallax={0.26} className={`puzzle puzzle_piece puzzle_a  puzzle_a_piece puzzle_a_piece-two`}>

    <svg xmlns="http://www.w3.org/2000/svg"viewBox="75 20 112 112">

      <path
        fill="white"
        stroke="white"
        d="M94.852 75.847L94.335 63.764 90.45 66.003 85.979 66.958 82.372 65.805 81.476 61.763 83.157 57.452 87.048 56.035 90.097 57.085 94.367 60.262 94.679 42.913 110.333 42.739 108.062 37.899 107.965 33.217 109.482 28.057 114.071 26.537 119.122 28.036 121.01 32.811 119.897 37.542 118.29 43.009 140.466 42.913 140.553 55.174 134.183 52.669 129.623 53.742 127.04 57.857 128.503 63.319 134.527 64.393 140.466 61.081 140.379 83.274z"
      ></path>

    </svg>
    </Tile>
  );
}

export default PuzzleAPieceOne;
