import React from "react";
import Tile from '../../../Tile';


function PuzzleBPieceFour() {
  return (
    <Tile positive={'-'} parallax={0.76} className={`puzzle puzzle_piece puzzle_b  puzzle_b_piece puzzle_b_piece-four`}>

    <svg xmlns="http://www.w3.org/2000/svg"viewBox="160 10 110 200">

         <path
        fill="white"
        stroke="white"
        d="M188.303 100.573L183.033 97.295 179.287 95.903 172.679 95.164 168.179 98.663 167.926 103.983 172.895 108.246 179.504 108.68 188.367 107.057 189.752 121.002 189.331 125.466 206.628 125.175 205.444 129.786 205.571 132.868 207.716 136.393 209.805 137.58 214.205 136.383 217.448 133.977 218.117 130.331 216.478 126.365 215.768 125.256 235.456 125.417 235.737 111.12 239.865 112.8 243 113.385 246.586 113.869 250.282 109.075 249.977 104.859 244.335 101.721 239.789 102.917 235.456 105.288 235.536 88.878 188.893 82.542z"
      ></path>

    
    </svg>
    </Tile>
  );
}

export default PuzzleBPieceFour;
