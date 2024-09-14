import { SVGProps } from "../types";

const Plus = ({ size, color = "#000000" }: SVGProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M4 12H20M12 4V20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

export default Plus;
