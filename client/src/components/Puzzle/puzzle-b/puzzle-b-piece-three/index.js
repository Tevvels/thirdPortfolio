import React from "react";
import Tile from '../../../Tile';


function PuzzleBPieceThree() {

  return (
    <Tile positive={'-'} parallax={0.76} className={`puzzle puzzle_b puzzle_piece puzzle_b_piece puzzle_b_piece-three`}>
   
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="360 135 80 80">

      <path
        fill="white"
        stroke="white"
        d="M189.007 126.124L207.004 125.778 205.701 129.395 205.186 133.218 207.387 136.969 209.358 138.043 214.311 137.356 218.324 134.488 218.782 130.07 217.206 126.261 234.658 126.437 234.849 139.452 235.031 143.512 231.351 141.461 226.819 139.544 221.274 139.457 217.538 144.795 217.442 145.037 220.851 153.439 228.283 155.095 234.702 153.56 234.731 167.038 212.131 167.284 215.284 164.651 216.238 159.782 213.789 153.834 207.351 152.374 201.863 154.397 199.773 158.924 200.566 164.016 202.276 167.347 189.133 166.117 189.624 149.652 191.191 149.832 196.729 150.472 202.368 149.546 205.01 144.602 203.594 139.983 197.7 137.531 190.867 138.971 187.599 140.652 187.938 140.531z"
      ></path>

    </svg>
    </Tile>
  );
}

export default PuzzleBPieceThree;
