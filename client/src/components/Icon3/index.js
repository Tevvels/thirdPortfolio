import React, {useState,useEffect} from "react";


function Icon3() {
    const [offsetY, setOffsetY] =useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
  
      return () => window.removeEventListener("scroll",handleScroll)
    },[])
  return (
    <div style={{transform: `translateY(${offsetY * 0.15}px)`}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <path
        fill="#FFF"
        stroke="#FFF"
        d="M3.028 152.143L2.945 269.279 502.008 269.378 501.875 143.79 462.83 139.946 420.762 144.191 421.04 160.549 432.069 156.031 437.414 158.696 439.961 164.386 439.195 170.426 436.486 173.855 431.392 175.069 425.365 172.893 421.116 169.662 421.023 187.312 405.449 186.298 410.346 190.846 410.828 198.137 406.877 203.377 400.211 205.235 393.97 202.672 391.102 197.439 392.432 191.493 395.57 186.643 378.689 186.482 378.528 170.914 373.728 174.653 368.042 175.848 363.122 173.551 361.377 169.681 362.709 164.786 367.279 162.186 373.053 162.371 378.015 165.883 377.596 145.414 351.665 141.77 340.169 147.519 295.171 139.387 257.454 146.96 214.85 153.407 171.388 146.117z"
      ></path>
      {/* <path
        fill="#BBACAC"
        stroke="#FFF"
        d="M125.727 134.583L125.379 117.93 120.06 121.33 114.117 122.634 108.866 120.547 106.84 115.818 108.467 110.844 112.796 107.773 118.968 108.203 125.232 112.471 125.662 93.22 141.781 92.728 141.966 91.715 139.571 88.767 138.343 85.574 138.496 82.35 140.4 79.403 144.238 78.389 148.475 79.495 151.116 83.056 151.269 88.061 149.12 92.513 166.959 94.202 167.942 75.135 164.841 77.56 162.169 78.236 159.222 77.284 157.226 73.548 158.73 69.25 161.831 68.175 165.086 68.267 168.064 70.969 166.867 53.498 180.592 53.416 177.552 58.483 176.57 62.075 178.965 66.558 182.649 68.154 187.777 66.803 191.308 61.737 189.435 55.934 189.005 54.307 207.489 53.877 207.814 68.306 211.247 67.839 214.582 65.575 219.648 66.803 222.381 70.856 220.273 76.36 215.912 78.637 211.899 76.853 208.226 75.32 208.586 83.664 210.13 93.312 208.533 111.223 214.612 106.064 218.021 104.038 223.517 106.617 225.789 110.793 224.04 116.058 218.547 118.879 213.95 117.499 208.781 117.181 209.024 135.653 252.119 137.35 293.448 131.646 334.492 127.306 377.163 134.358 419.111 123.509 417.682 112.394 414.498 114.239 410.265 114.601 407.045 113.914 406.286 111.634 406.503 108.378 408.891 106.207 413.558 105.773 417.899 107.184 417.574 93.038 429.296 92.459 425.497 87.503 426.51 79.507 430.755 75.188 439.19 76.282 443.384 80.659 442.609 87.498 439.007 93.198 459.753 93.562 459.183 105.03 455.813 103.497 450.892 102.534 447.433 105.476 447.38 112.269 450.607 115.39 456.313 115.069 458.417 112.875 459.475 135.986 466.909 134.627 485.932 134.947 499.315 131.339 499.169 0 0.479 0.748 0 132.905 42.339 144.589 83.637 145.283z"
      ></path> */}
      
    </svg>
    </div>
  );
}

export default Icon3;
