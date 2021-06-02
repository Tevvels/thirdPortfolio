import React from "react";
import PuzzleFPieceOne from './puzzle-f-piece-one/';

function PuzzleF() {
  return (
    <>
    <PuzzleFPieceOne />
    <div  className={`puzzle puzzle_f`}>  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 500 250">
        <path
          fill="#FFF"
          stroke="#FFF"
          d="M3.028 154.024L2.945 271.16 502.008 271.259 501.875 145.671 462.83 141.827 420.762 146.072 420.831 160.838 432.488 156.781 437.833 160.242 440.003 166.351 439.279 173.396 434.35 176.532 428.67 176.238 423.522 173.685 421.116 171.543 421.565 188.719 407.954 188.179 409.398 193.201 409.677 199.544 405.861 204.445 400.414 206.236 393.97 204.553 391.102 199.32 391.349 192.629 393.132 188.456 378.689 188.363 377.851 175.502 373.813 177.253 368.592 179.04 363.46 177.42 360.954 172.577 362.709 166.667 367.279 164.067 372.926 164.125 377.761 166.495 377.596 147.295 351.665 143.651 340.169 149.4 295.171 141.268 257.454 148.841 214.85 155.288 171.388 147.998z"
        ></path>

    </svg>
    </div>
    </>

  );
}

export default PuzzleF;
