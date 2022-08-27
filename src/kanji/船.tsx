import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji船: KanjiIconType = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 109 109"
    {...props}
  >
    <g
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    >
      <path d="M32.95 13.75c.94 1.93 1.57 1.93 1.25 3.47-.31 1.54-1.57 4.24-5.96 10.78" />
      <path d="M20.15 29.97c.8 1.27 1 3.5 1 5.09 0 1.59.11 22.57.2 25.43C21.75 73 15.5 88.65 11.5 95" />
      <path d="M21.75 31.56c4.2-.64 14.8-2.86 18.6-3.5 3.8-.64 3.6 1.27 3.6 3.5 0 2.22-.4 56.21-.4 59.39 0 3.18-1.2 5.72-2.8 4.13-1.6-1.59-2.6-2.22-3.4-2.86" />
      <path d="M30.28 39.27c.89 1.44 3.12 5.29 3.34 6.97" />
      <path d="M31.05 57.39c1 1.59 1.2 2.54 1.2 3.81s0 17.05-.4 20.21" />
      <path d="M10.5 56.5c.44 1.12 2.35 1.81 3.75 1.5s33.26-9.25 35-9.25" />
      <path d="M64.5 25.5c.5 1.5.52 2.71.22 3.63-1.71 5.47-7.86 18.85-10.72 22.5" />
      <path d="M76.25 25.25C82.81 30.93 91.81 42.82 94 48.37" />
      <path d="M57.35 63.97c.49.53 1 .97 1.21 1.6 1.64 4.96 3.19 16.17 4.2 24.93" />
      <path d="M60 65.5c10.32-1.73 21.29-2.59 27.18-2.77 2.15-.07 3.41 1.63 3.07 2.97-1.39 5.54-3.27 11.99-5.33 19.63" />
      <path d="M63.08 87.28c6.92-.19 15.47-.71 24.98-1.09" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(25.5 12.5)">{"1"}</text>
      <text transform="translate(13.5 38.5)">{"2"}</text>
      <text transform="translate(21.75 28.63)">{"3"}</text>
      <text transform="translate(24.75 46.5)">{"4"}</text>
      <text transform="translate(25.25 64.5)">{"5"}</text>
      <text transform="translate(2.5 58.63)">{"6"}</text>
      <text transform="translate(58.5 28.5)">{"7"}</text>
      <text transform="translate(74.5 21.5)">{"8"}</text>
      <text transform="translate(51.25 71.5)">{"9"}</text>
      <text transform="translate(58.5 62.5)">{"10"}</text>
      <text transform="translate(64.5 84.5)">{"11"}</text>
    </g>
  </svg>
);

export default Kanji船;
