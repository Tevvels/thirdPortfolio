import React from "react";
import Tile from '../../../Tile';

function PuzzleEPieceOne() {
  return (
    <Tile positive={'-'} parallax={0.46} className={`puzzle puzzle_piece puzzle_e  puzzle_e_piece puzzle_e_piece-one`}>
    <svg xmlns="http://www.w3.org/2000/svg"viewBox="157 383 108 108">
      <path
        fill="white"
        stroke="white"
        d="M183.021 422.125L182.268 436.655 177.299 434.118 170.131 434.094 165.588 437.51 164.014 442.799 165.8 449.152 170.779 451.254 175.979 451.444 182.373 447.7 183.199 461.237 198.294 460.812 196.573 467.758 196.75 473.157 200.529 477.187 206.646 476.687 210.12 473.142 209.969 467.7 206.454 461.274 227.912 462.523 228.445 447.474 233.239 448.339 239.122 450.191 245.874 447.772 249.489 443.193 248.582 436.454 244.925 432.941 237.162 432.844 228.778 435.455 227.598 420.368z"
      ></path>
    </svg>
    </Tile>
  );
}

export default PuzzleEPieceOne;
