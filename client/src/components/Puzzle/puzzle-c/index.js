import React,{useEffect} from "react";
import PuzzleCPieceOne from './puzzle-c-piece-one/';
import PuzzleCPieceTwo from './puzzle-c-piece-two/';
import PuzzleCPieceThree from './puzzle-c-piece-three/';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PuzzleC() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    gsap.from('.puzzle_c_piece-one',{
      duration: 1.2,
      y: '-321',
      scrollTrigger: {
        trigger: '.puzzle_c_piece-one',
        start:'top 50%',
        end:'+=500',
        
        toggleActions: 'play none reverse none '
      }
    })  
  
  },[])
  useEffect(()=>{
    gsap.from('.puzzle_c_piece-two',{
      duration: 1.2,
      y: '-321',
      scrollTrigger: {
        trigger: '.puzzle_c_piece-two',
        start:'top 50%',
        end:'+=500',
        
        toggleActions: 'play none reverse none '
      }
    })  
  
  },[])
  useEffect(()=>{
    gsap.from('.puzzle_c_piece-three',{
      duration: 1.2,
      y: '-321',
      scrollTrigger: {
        trigger: '.puzzle_c_piece-three',
        start:'top 50%',
        end:'+=500',
        
        toggleActions: 'play none reverse none '
      }
    })  
  
  },[])
  return (
    <>
      <PuzzleCPieceOne />
      <PuzzleCPieceTwo />
      <PuzzleCPieceThree />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 230 500 100" className={`puzzle puzzle_c`}>
  <path
        fill="white"
        stroke="white"
        d="M-0.4 210.79L0.003 251.658 16.774 251.364 13.866 245.631 13.309 237.83 20.456 233.155 27.421 235.749 30.759 240.766 31.584 245.475 29.219 249.472 27.141 251.619 46.929 251.726 47.861 269.142 42.934 266.124 37.142 264.934 30.985 265.964 27.393 272.288 29.755 278.839 35.461 281.681 43.941 279.729 48.157 277.297 47.167 293.097 72.657 296.069 92.667 292.85 92.667 280.463 86.972 282.719 78.357 282.367 73.476 278.551 71.506 270.238 73.799 264.745 78.994 264.085 88.978 265.456 93.812 269.058 93.621 251.975 109.104 251.726 106.427 264.322 108.961 269.971 114.367 272.845 122.27 271.632 124.193 265.295 122.34 257.718 118.395 251.726 140.313 251.479 141.027 265.352 145.718 261.641 149.841 260.893 155.844 263.82 159.301 270.981 155.74 275.144 149.366 279.222 144.224 276.921 141.949 276.213 142.457 292.602 187.722 287.398 235.603 292.602 319.382 284.675 318.984 274.374 312.949 275.721 312.853 275.651 306.25 273.334 304.133 269.059 306.345 263.501 310.372 260.314 315.304 260.292 319.134 262.409 318.548 248.636 338.726 248.636 337.769 251.247 337.214 255.544 338.388 259.152 340.306 262.778 345.817 263.132 349.236 260.28 349.786 254.977 349.212 248.861 365.551 248.861 365.411 263.557 360.948 261.109 356.219 260.87 353.003 263.109 352.289 269.591 355.443 272.448 360.918 272.603 365.668 269.783 365.566 283.008 424.242 293.382 471.08 290.913 501.618 284.825 500.986 209.74z"
      ></path>

    
    </svg>
  </>
  );
}

export default PuzzleC;