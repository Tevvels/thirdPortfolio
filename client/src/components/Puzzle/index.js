import React from "react";
import './style.css';

function Puzzle() {
  return (
    <p>puzzle</p>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
//       <path
//         fill="red"
//         stroke="#000"
//         d="M500.959 0.132L-0.2 0 -0.471 85.547 46.274 86.576 94.279 75.783 93.78 65.03 90.628 66.751 86.276 67.724 81.454 66.361 80.603 61.781 82.371 56.805 86.923 55.33 90.933 56.488 93.599 58.499 93.905 42.057 108.925 41.826 107.172 38.02 106.978 33.186 108.819 27.813 114.093 25.581 119.809 27.376 121.833 32.621 121.044 36.849 119.385 42.342 141.529 42.11 141.083 55.994 136.741 54.464 133.484 53.034 129.807 54.214 127.713 58.264 129.301 62.776 134.311 63.494 137.476 61.922 140.971 60.16 141.083 82.951 170.132 83.636 188.553 81.481 235.994 87.945 235.764 68.789 239.417 71.642 245.332 72.056 251.002 70.23 252.998 64.983 251.719 60.724 247.418 59.036 241.528 59.462 235.72 61.476 235.303 42.208 253.384 42.385 251.576 39.364 251.005 35.225 252.183 32.188 257.165 29.598 261.709 31.109 263.996 34.905 263.123 38.808 261.883 42.254 283.203 41.729 282.282 60.374 278.307 57.617 273.851 57.79 270.57 59.585 268.496 63.7 270.468 69.298 275.98 70.251 282.076 67.979 282.152 67.758 282.512 83.158 328.8 88.666 375.779 82.199 422.757 73.844 471.35 83.663 501.977 74.802z"
//       ></path>
//       <path
//         fill="red"
//         stroke="#000"
//         d="M94.852 75.847L94.335 63.764 90.45 66.003 85.979 66.958 82.372 65.805 81.476 61.763 83.157 57.452 87.048 56.035 90.097 57.085 94.367 60.262 94.679 42.913 110.333 42.739 108.062 37.899 107.965 33.217 109.482 28.057 114.071 26.537 119.122 28.036 121.01 32.811 119.897 37.542 118.29 43.009 140.466 42.913 140.553 55.174 134.183 52.669 129.623 53.742 127.04 57.857 128.503 63.319 134.527 64.393 140.466 61.081 140.379 83.274z"
//       ></path>
//       <path
//         fill="yellow"
//         stroke="#000"
//         d="M-0.497 86.265L46.116 87.279 93.698 76.717 140.91 83.98 170.61 84.332 188.129 82.288 187.756 99.142 182.978 96.394 179.286 94.988 172.295 94.22 167.441 98.563 167.178 104.355 172.732 109.033 179.578 109.624 187.637 108.033 188.729 120.99 188.451 124.896 186.921 141.1 191.078 139.573 197.587 138.386 202.847 140.551 204.013 144.976 202.1 148.573 197.045 149.439 191.103 149.108 188.868 148.334 188.311 167.29 188.607 167 202.434 167.652 201.597 163.839 200.6 159.377 202.695 155.02 207.039 153.22 213.326 154.582 215.421 160.14 214.526 163.95 209.973 168.307 235.531 167.87 235.111 152.769 228.458 154.401 221.39 152.493 218.25 144.814 221.337 140.241 226.576 140.456 231.184 142.258 235.635 145.035 235.741 140.133 235.319 125.538 254.501 125.146 252.3 128.874 251.357 135.385 253.076 141.116 259.634 142.757 265.382 141.244 266.743 133.162 265.361 128.757 263.667 125.326 282.366 124.877 281.689 112.89 275.828 110.285 268.969 111.726 263.82 110.491 263.576 102.825 268.669 96.65 273.168 97.918 277.202 100.627 280.398 102.153 282.872 84.368 282.872 83.933 282.872 83.933 329.586 89.596 377.346 82.629 377.346 82.629 377.137 99.799 377.518 100.441 367.042 95.791 360.797 97.005 355.14 102.45 355.078 109.384 359.752 115.727 365.096 116.109 368.886 115.513 373.116 114.432 376.998 112.332 377.556 125.321 392.371 125.695 390.023 120.695 388.982 116.196 390.772 108.806 398.607 105.246 407.74 107.972 409.987 115.931 408.163 120.776 402.975 125.653 424.15 125.465 423.741 109.46 427.473 109.873 432.707 110.773 438.587 108.699 442.467 103.69 439.482 98.927 433.495 95.319 428.02 97.009 424.4 99.124 423.641 74.784 470.981 84.151 501.567 75.656 501.895 209.115 -0.437 210.146z"
//       ></path>
//       <path
//         fill="red"
//         stroke="#000"
//         d="M237.018 87.905L236.546 70.579 239.376 72.133 245.269 73.031 251.399 70.825 253.756 64.942 252.343 59.875 247.627 58.402 241.811 58.567 236.624 60.527 236.153 43.284 254.858 43.202 252.343 39.361 251.949 35.194 252.893 32.987 257.137 30.618 261.123 31.524 263.187 34.867 261.931 39.361 261.239 42.965 282.245 42.674 281.578 58.65 278.283 56.625 273.552 56.951 269.839 59.072 267.592 64.139 270.218 69.827 276.522 70.732 281.341 69.025 281.498 83.575z"
//       ></path>
//       <path
//         fill="yellow"
//         stroke="#000"
//         d="M188.303 100.573L183.033 97.295 179.287 95.903 172.679 95.164 168.179 98.663 167.926 103.983 172.895 108.246 179.504 108.68 188.367 107.057 189.752 121.002 189.331 125.466 206.628 125.175 205.444 129.786 205.571 132.868 207.716 136.393 209.805 137.58 214.205 136.383 217.448 133.977 218.117 130.331 216.478 126.365 215.768 125.256 235.456 125.417 235.737 111.12 239.865 112.8 243 113.385 246.586 113.869 250.282 109.075 249.977 104.859 244.335 101.721 239.789 102.917 235.456 105.288 235.536 88.878 188.893 82.542z"
//       ></path>
//       <path
//         fill="yellow"
//         stroke="#000"
//         d="M189.007 126.124L207.004 125.778 205.701 129.395 205.186 133.218 207.387 136.969 209.358 138.043 214.311 137.356 218.324 134.488 218.782 130.07 217.206 126.261 234.658 126.437 234.849 139.452 235.031 143.512 231.351 141.461 226.819 139.544 221.274 139.457 217.538 144.795 217.442 145.037 220.851 153.439 228.283 155.095 234.702 153.56 234.731 167.038 212.131 167.284 215.284 164.651 216.238 159.782 213.789 153.834 207.351 152.374 201.863 154.397 199.773 158.924 200.566 164.016 202.276 167.347 189.133 166.117 189.624 149.652 191.191 149.832 196.729 150.472 202.368 149.546 205.01 144.602 203.594 139.983 197.7 137.531 190.867 138.971 187.599 140.652 187.938 140.531z"
//       ></path>
//       <path
//         fill="yellow"
//         stroke="#000"
//         d="M236.333 88.736L236.381 103.94 239.61 101.953 244.592 100.874 250.768 104.285 251.207 109.333 246.396 114.58 239.714 113.762 236.541 112.259 236.213 124.653 256.102 124.237 253.266 129.228 252.296 135.563 253.745 140.475 259.535 141.781 265.025 140.531 265.845 133.523 264.572 129.144 262.167 124.579 281.345 124.103 280.791 113.457 274.866 111.037 269.036 112.285 263.039 110.995 262.636 102.551 268.382 95.648 273.776 97.122 277.599 99.866 279.882 100.891 282.135 84.058z"
//       ></path>
//       <path
//         fill="yellow"
//         stroke="#000"
//         d="M378.02 101.284L366.88 96.757 361.036 97.912 355.991 102.673 356.01 108.963 359.869 115.033 364.959 115.212 369.01 114.694 372.699 113.65 377.782 110.787 378.325 124.698 391.046 124.614 389.253 121.096 387.968 116.124 389.887 108.224 398.552 104.501 408.582 107.606 410.755 116.226 408.707 121.15 404.491 124.986 423.198 124.614 423.21 108.788 427.181 109.652 432.583 110.705 437.881 108.351 441.451 104.003 439.042 99.653 433.1 96.318 428.548 97.831 423.662 100.724 422.895 74.743 378.113 82.645z"
//       ></path>
//       <path
//         fill="green"
//         stroke="#000"
//         d="M-0.4 210.79L0.003 251.658 16.774 251.364 13.866 245.631 13.309 237.83 20.456 233.155 27.421 235.749 30.759 240.766 31.584 245.475 29.219 249.472 27.141 251.619 46.929 251.726 47.861 269.142 42.934 266.124 37.142 264.934 30.985 265.964 27.393 272.288 29.755 278.839 35.461 281.681 43.941 279.729 48.157 277.297 47.167 293.097 72.657 296.069 92.667 292.85 92.667 280.463 86.972 282.719 78.357 282.367 73.476 278.551 71.506 270.238 73.799 264.745 78.994 264.085 88.978 265.456 93.812 269.058 93.621 251.975 109.104 251.726 106.427 264.322 108.961 269.971 114.367 272.845 122.27 271.632 124.193 265.295 122.34 257.718 118.395 251.726 140.313 251.479 141.027 265.352 145.718 261.641 149.841 260.893 155.844 263.82 159.301 270.981 155.74 275.144 149.366 279.222 144.224 276.921 141.949 276.213 142.457 292.602 187.722 287.398 235.603 292.602 319.382 284.675 318.984 274.374 312.949 275.721 312.853 275.651 306.25 273.334 304.133 269.059 306.345 263.501 310.372 260.314 315.304 260.292 319.134 262.409 318.548 248.636 338.726 248.636 337.769 251.247 337.214 255.544 338.388 259.152 340.306 262.778 345.817 263.132 349.236 260.28 349.786 254.977 349.212 248.861 365.551 248.861 365.411 263.557 360.948 261.109 356.219 260.87 353.003 263.109 352.289 269.591 355.443 272.448 360.918 272.603 365.668 269.783 365.566 283.008 424.242 293.382 471.08 290.913 501.618 284.825 500.986 209.74z"
//       ></path>
      // <path
      //   fill="green"
      //   stroke="#000"
      //   d="M18.083 252.248L14.539 245.55 14.201 238.076 20.382 233.793 27.05 236.335 30.048 240.81 31.027 245.735 29.111 248.915 26.023 252.306 46.689 252.612 46.914 267.865 43.387 265.665 37.446 263.975 30.53 265.25 26.477 272.034 29.173 279.621 35.373 282.622 43.979 280.534 47.272 278.797 46.342 293.12 18.679 294.792 -0.502 292.734 -0.379 252.136z"
      // ></path>
      // <path
      //   fill="green"
      //   stroke="#000"
      //   d="M94.55 270.908L88.89 266.366 79.403 264.86 74.407 265.688 72.512 270.456 73.647 278.179 78.78 281.934 87.14 281.66 93.598 279.631 93.524 293.193 116.85 294.665 141.963 293.038 141.355 274.792 143.695 276.064 149.936 278.391 154.886 274.612 158.316 270.784 155.215 264.587 149.819 261.857 146.045 262.312 140.918 266.845 139.578 252.51 119.46 252.265 122.842 257.332 124.687 265.244 122.252 271.255 115.16 273.363 109.588 271.194 106.133 264.609 107.915 256.734 109.114 252.484 94.311 252.782z"
      // ></path>
      // <path
      //   fill="green"
      //   stroke="#000"
      //   d="M319.946 284.095L319.497 273.45 312.782 275.358 307.45 273.37 304.984 269.28 306.819 264.284 310.736 261.317 314.703 261.123 319.927 263.714 319.489 249.518 337.754 249.338 337.222 252.659 336.591 255.36 337.432 259.545 340.39 263.486 346.741 263.855 349.98 260.466 350.362 255.035 349.669 249.373 365.047 249.438 365.185 262.63 361.081 260.828 356.074 260.133 352.178 262.576 351.377 269.805 355.124 273.162 361.284 273.341 364.773 270.984 364.678 283.031z"
      // ></path>
//       <path
//         fill="blue"
//         stroke="#000"
//         d="M-0.434 293.782L18.95 295.422 46.502 293.914 72.944 297.085 92.822 293.605 116.739 295.426 142.44 293.457 188.075 288.034 188.851 307.31 181.918 304.503 174.106 304.41 169.793 308.282 168.326 312.717 170.818 318.349 175.178 321.378 182.749 321.117 188.29 318.867 187.825 334.624 171.137 334.801 171.105 330.446 171.3 326.118 168.667 321.524 163.133 319.5 157.571 320.091 154.495 326.087 155.263 330.758 156.517 334.964 140.654 335.474 141.296 353.213 144.687 350.245 148.4 349.928 154.471 350.377 157.535 354.741 155.178 360.225 151.239 364.202 145.735 363.299 141.283 361.001 140.978 377.704 160.487 376.941 158.69 370.968 157.992 364.872 161.358 360.415 167.334 358.823 172.918 362.056 174.78 366.869 173.427 372.175 170.299 377.597 188.637 377.827 207.19 377.827 203.139 368.823 204.631 360.752 210.603 357.872 218.381 359.335 223.083 363.343 222.533 370.467 217.641 377.606 236.408 376.276 234.915 355.875 238.422 357.997 244.379 359.777 254.697 353.99 254.401 345.419 248.988 340.574 242.638 340.209 238.057 342.247 235.126 345.008 235.34 335.029 235.047 319.534 229.41 321.902 224.277 322.397 221.185 319.148 219.672 312.03 222.03 307.775 226.769 306.673 230.883 308.024 235.544 311.488 236.149 293.338 282.745 288.838 319.686 285.087 319.504 299.627 312.318 296.855 305.161 296.869 299.104 303.662 298.546 310.551 301.622 317.27 307.884 320.625 315.888 319.533 320.56 316.313 320.396 332.744 337.813 331.632 335.937 326.837 335.757 322.305 339.388 318.021 343.978 315.048 350.014 318.031 353.684 322.75 352.871 327.916 351.285 332.017 366.546 331.468 365.89 313.263 369.979 315.571 375.534 317.527 383.29 316.549 388.546 308.043 386.173 301.07 379.538 298.483 372.626 298.981 367.249 300.833 366.337 284.22 424.07 294.226 471.413 292.895 501.482 286.464 501.244 417.596 -0.539 418.799z"
//       ></path>
      // <path
      //   fill="blue"
      //   stroke="#000"
      //   d="M144.008 349.77L148.257 349.045 154.77 349.637 158.061 354.712 155.648 360.574 151.504 364.358 145.524 363.548 141.13 361.105 141.447 376.858 159.29 376.366 157.949 371.099 157.703 364.867 160.76 360.026 167.579 358.158 173.363 361.427 175.608 366.279 173.919 372.375 171.041 376.881 188.254 377.805 188.254 359.049 183.555 361.055 179.538 360.456 176.944 358.358 175.657 353.54 177.159 348.927 180.752 346.831 185.752 347.729 188.194 350.285 187.993 335.542 170.74 335.709 170.487 326.564 168.069 322.153 163.102 320.563 158.061 320.642 155.328 326.571 156.316 330.862 157.73 335.97 141.546 336.358 141.899 352.432z"
      // ></path>
      // <path
      //   fill="blue"
      //   stroke="#000"
      //   d="M188.907 335.689L189.105 351.711 185.479 348.608 180.791 347.75 177.793 349.321 176.432 353.54 177.476 357.78 179.81 359.7 183.913 360.533 189.101 357.843 189.042 376.914 205.894 377.008 202.667 368.669 204.551 360.848 210.675 358.044 218.43 358.894 222.849 363.773 222.355 370.597 218.716 376.773 235.802 375.881 234.004 353.901 238.736 357.509 244.787 358.867 253.815 353.461 253.633 345.439 248.595 341.362 243.164 340.892 238.276 342.64 234.434 346.446 234.416 333.58 215.342 333.874 216.466 330.197 216.821 324.817 213.345 321.243 207.054 320.977 203.666 325.359 204.777 331.386 206.171 334.407z"
      // ></path>
      // <path
      //   fill="blue"
      //   stroke="#000"
      //   d="M189.475 308.21L181.559 305.39 174.95 305.041 170.074 308.618 169.301 313.076 171.699 317.755 175.6 320.457 182.602 320.283 189.17 317.928 188.625 334.656 205.177 333.76 203.833 331.767 202.917 324.894 206.766 320.218 213.651 320.265 217.45 324.467 217.244 329.98 216.366 333.333 234.362 332.741 234.22 320.759 229.694 322.477 224.281 323.01 220.466 319.625 218.849 311.901 221.442 307.161 226.454 305.683 231.271 307.279 234.692 309.848 235.398 293.337 188.953 288.487z"
      // ></path>
      // <path
      //   fill="blue"
      //   stroke="#000"
      //   d="M320.08 300.698L312.233 297.484 305.606 297.846 299.475 303.777 299.554 310.639 302.122 316.779 307.336 319.752 314.943 319.43 320.711 315.01 319.903 332.732 337.253 331.615 335.622 325.55 335.94 321.632 338.746 317.886 344.07 314.721 350.188 317.538 354.344 322.95 353.644 328.324 352.097 331.896 367.024 331.751 365.386 311.866 370.657 315.134 375.366 316.788 383.334 316.168 387.786 307.426 386.041 301.962 379.345 298.929 373.102 299.138 366.304 301.459 365.504 283.476 320.375 284.892z"
      // ></path>
//       <path
//         fill="pink"
//         stroke="#000"
//         d="M0.557 434.571L70.149 421.647 136.541 430.191 181.921 422.456 181.874 435.278 178.029 433.298 169.789 433.611 164.859 436.958 162.954 442.787 164.997 449.689 170.806 452.151 176.038 452.319 182.376 448.692 182.1 461.798 197.677 461.83 196.106 467.615 195.788 473.365 200.524 477.847 206.977 477.561 210.665 473.566 211.218 467.95 207.708 461.894 228.577 463.22 228.89 448.106 228.956 448.087 233.112 448.982 239.377 450.955 246.476 448.486 250.321 443.16 249.538 435.915 244.632 432.259 236.85 432.253 228.816 434.659 228.735 420.448 291.675 422.445 332.319 433.336 379.46 419.611 446.923 426.583 501.608 420.702 501.189 502.304 0.26 502.304z"
//       ></path>
//       <path
//         fill="pink"
//         stroke="#000"
//         d="M183.021 422.125L182.268 436.655 177.299 434.118 170.131 434.094 165.588 437.51 164.014 442.799 165.8 449.152 170.779 451.254 175.979 451.444 182.373 447.7 183.199 461.237 198.294 460.812 196.573 467.758 196.75 473.157 200.529 477.187 206.646 476.687 210.12 473.142 209.969 467.7 206.454 461.274 227.912 462.523 228.445 447.474 233.239 448.339 239.122 450.191 245.874 447.772 249.489 443.193 248.582 436.454 244.925 432.941 237.162 432.844 228.778 435.455 227.598 420.368z"
//       ></path>
//     </svg>
  );
}

export default Puzzle;
