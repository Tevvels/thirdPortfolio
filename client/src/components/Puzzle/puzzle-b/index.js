import React,{useEffect} from "react";
import PuzzleBPieceOne from './puzzle-b-piece-one/';
import PuzzleBPieceTwo from './puzzle-b-piece-two/';
import PuzzleBPieceThree from './puzzle-b-piece-three/';
import PuzzleBPieceFour from './puzzle-b-piece-four/';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PuzzleB() {


gsap.registerPlugin(ScrollTrigger);

// useEffect(()=>{
//   gsap.from('.puzzle_b_piece-one',{
//     duration: 1.2,
//     y: '-321',
//     scrollTrigger: {
//       trigger: '.puzzle_b_piece-one',
//       start:'top 50%',
//       markers:'true',
//       end:'+=500',
//       toggleActions: 'reverse none play none '
//     }
//   })  

// },[])
// useEffect(()=>{
//   gsap.from('.puzzle_b_piece-two',{
//     duration: 1.2,
//     y: '-321',
//     scrollTrigger: {
//       trigger: '.puzzle_b_piece-two',
//       start:'top 50%',
//       markers:'true',
//       end:'+=500',
//       toggleActions: 'none reverse play none '
//     }
//   })  

// },[])
useEffect(()=>{
  gsap.from('.puzzle_b_piece-three',{
    duration: 1.2,
    y: '-479',
    scrollTrigger: {
      trigger: '.puzzle_b_piece-three',
      start:'top 50%',
      markers:'true',
      end:'+=500',
      toggleActions: 'reverse none play none '
    }
  })  

},[])
useEffect(()=>{
  gsap.from('.puzzle_b_piece-four',{
    duration: 1.2,
    y: '-301',
    scrollTrigger: {
      trigger: '.puzzle_b_piece-four',
      start:'top 50%',
      markers:'true',
      end:'+=500',
      toggleActions: 'reverse none play none '
    }
  })  

},[])

  return (
    <>
    <PuzzleBPieceOne />
    <PuzzleBPieceTwo />
    <PuzzleBPieceThree />
    <PuzzleBPieceFour />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" className={`puzzle puzzle_b`}>
    
  <path
  
        fill="white"
        stroke="white"
        d="M-0.497 86.265L46.116 87.279 93.698 76.717 140.91 83.98 170.61 84.332 188.129 82.288 187.756 99.142 182.978 96.394 179.286 94.988 172.295 94.22 167.441 98.563 167.178 104.355 172.732 109.033 179.578 109.624 187.637 108.033 188.729 120.99 188.451 124.896 186.921 141.1 191.078 139.573 197.587 138.386 202.847 140.551 204.013 144.976 202.1 148.573 197.045 149.439 191.103 149.108 188.868 148.334 188.311 167.29 188.607 167 202.434 167.652 201.597 163.839 200.6 159.377 202.695 155.02 207.039 153.22 213.326 154.582 215.421 160.14 214.526 163.95 209.973 168.307 235.531 167.87 235.111 152.769 228.458 154.401 221.39 152.493 218.25 144.814 221.337 140.241 226.576 140.456 231.184 142.258 235.635 145.035 235.741 140.133 235.319 125.538 254.501 125.146 252.3 128.874 251.357 135.385 253.076 141.116 259.634 142.757 265.382 141.244 266.743 133.162 265.361 128.757 263.667 125.326 282.366 124.877 281.689 112.89 275.828 110.285 268.969 111.726 263.82 110.491 263.576 102.825 268.669 96.65 273.168 97.918 277.202 100.627 280.398 102.153 282.872 84.368 282.872 83.933 282.872 83.933 329.586 89.596 377.346 82.629 377.346 82.629 377.137 99.799 377.518 100.441 367.042 95.791 360.797 97.005 355.14 102.45 355.078 109.384 359.752 115.727 365.096 116.109 368.886 115.513 373.116 114.432 376.998 112.332 377.556 125.321 392.371 125.695 390.023 120.695 388.982 116.196 390.772 108.806 398.607 105.246 407.74 107.972 409.987 115.931 408.163 120.776 402.975 125.653 424.15 125.465 423.741 109.46 427.473 109.873 432.707 110.773 438.587 108.699 442.467 103.69 439.482 98.927 433.495 95.319 428.02 97.009 424.4 99.124 423.641 74.784 470.981 84.151 501.567 75.656 501.895 209.115 -0.437 210.146z"
      ></path>
   
    </svg>
    </>
  );
}

export default PuzzleB;
