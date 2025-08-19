import * as React from "react";

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const SVGComponent: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="300.000000pt"
    height="161.000000pt"
    viewBox="0 0 300.000000 161.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <metadata>
      {"\nCreated by potrace 1.10, written by Peter Selinger 2001-2011\n"}
    </metadata>
    <g
      transform="translate(0.000000,161.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M2105 1179 c-88 -5 -295 -10 -460 -13 -165 -3 -372 -10 -460 -15 -88 -6 -222 -11 -298 -11 -106 0 -138 -3 -135 -12 6 -16 40 -33 96 -48 106 -28 182 -175 232 -447 20 -110 45 -165 95 -216 15 -15 37 -28 49 -28 52 -3 547 2 606 7 194 13 418 24 515 24 61 0 117 5 125 10 13 8 15 47 13 262 -3 290 -15 431 -42 468 -17 23 -25 25 -97 26 -43 1 -151 -3 -239 -7z" />
    </g>
  </svg>
);

export default SVGComponent;

