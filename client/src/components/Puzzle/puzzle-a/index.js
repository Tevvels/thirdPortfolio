import React, {useRef,useEffect} from "react";
import PuzzleAPieceOne from './puzzle-a-piece-one/';
import PuzzleAPieceTwo from './puzzle-a-piece-two/';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PuzzleA() {
useEffect(()=>{
  gsap.from('.puzzle_a_piece-one',{
    duration: 1.2,
    y: '-321',
    scrollTrigger: {
      trigger: '.puzzle_a_piece-one',
      start:'top 50%',
      end:'+=500',
      toggleActions: 'play none reverse none '
    }
  })  

},[])


useEffect(()=>{
  gsap.from('.puzzle_a_piece-two',{
    duration: 3,
    y: '-201',
    scrollTrigger: {
      trigger: '.puzzle_a_piece-two',
      start:'top 50%',
      end:'+=500',
      toggleActions: 'play none reverse none '
    }
  })
  
},{})

  return (
    <>
    <PuzzleAPieceOne />
    <PuzzleAPieceTwo />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" className={`puzzle puzzle_a`} id={`puzzle_a`}>

      <path
        fill="white"
        stroke="white"
        d="M500.959 0.132L-0.2 0 -0.471 85.547 46.274 86.576 94.279 75.783 93.78 65.03 90.628 66.751 86.276 67.724 81.454 66.361 80.603 61.781 82.371 56.805 86.923 55.33 90.933 56.488 93.599 58.499 93.905 42.057 108.925 41.826 107.172 38.02 106.978 33.186 108.819 27.813 114.093 25.581 119.809 27.376 121.833 32.621 121.044 36.849 119.385 42.342 141.529 42.11 141.083 55.994 136.741 54.464 133.484 53.034 129.807 54.214 127.713 58.264 129.301 62.776 134.311 63.494 137.476 61.922 140.971 60.16 141.083 82.951 170.132 83.636 188.553 81.481 235.994 87.945 235.764 68.789 239.417 71.642 245.332 72.056 251.002 70.23 252.998 64.983 251.719 60.724 247.418 59.036 241.528 59.462 235.72 61.476 235.303 42.208 253.384 42.385 251.576 39.364 251.005 35.225 252.183 32.188 257.165 29.598 261.709 31.109 263.996 34.905 263.123 38.808 261.883 42.254 283.203 41.729 282.282 60.374 278.307 57.617 273.851 57.79 270.57 59.585 268.496 63.7 270.468 69.298 275.98 70.251 282.076 67.979 282.152 67.758 282.512 83.158 328.8 88.666 375.779 82.199 422.757 73.844 471.35 83.663 501.977 74.802z"
      ></path>

    
    </svg>
    </>
  );
}

export default PuzzleA;