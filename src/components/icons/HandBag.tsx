import * as React from "react";
import type { SVGProps } from "react";
const SvgHandBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 22"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 14.5 3 1s7.5-1.5 8.5-1.5 1 1 0 2-4.5 4-7.5 4-5-1.5-7-1.5H2"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 12.5c1-1 3-2.5 5-2.5s6.75 2 7.5 3-1.5 2.5-1.5 2.5M8 7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 2h5v4.5h-5z"
    />
  </svg>
);
export default SvgHandBag;
