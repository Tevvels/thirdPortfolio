import React from "react";
import Tile from '../../../Tile';


function PuzzleBPieceOne() {
  return (
    <Tile positive={'-'} parallax={0.76} className={`puzzle puzzle_piece puzzle_b  puzzle_b_piece puzzle_b_piece-one`}>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 340 50 111.8 111.8">


      <path
        fill="white"
        stroke="white"
        d="M378.02 101.284L366.88 96.757 361.036 97.912 355.991 102.673 356.01 108.963 359.869 115.033 364.959 115.212 369.01 114.694 372.699 113.65 377.782 110.787 378.325 124.698 391.046 124.614 389.253 121.096 387.968 116.124 389.887 108.224 398.552 104.501 408.582 107.606 410.755 116.226 408.707 121.15 404.491 124.986 423.198 124.614 423.21 108.788 427.181 109.652 432.583 110.705 437.881 108.351 441.451 104.003 439.042 99.653 433.1 96.318 428.548 97.831 423.662 100.724 422.895 74.743 378.113 82.645z"
      ></path>
    
    </svg>
    </Tile>

  );
}

export default PuzzleBPieceOne;
