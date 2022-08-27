import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji西: KanjiIconType = (props) => (
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
      <path d="M20.63 24.22c2.31.34 6.05.3 8.35.09 15.15-1.43 36.18-3.38 49.83-4.02 3.84-.18 6.66-.09 8.58.08" />
      <path d="M18.25 48.63c1.25 1.25 2.14 3.42 2.33 4.49 1.25 6.77 3.24 20.18 5.12 33.35.27 1.87.53 3.72.77 5.53" />
      <path d="M20.75 50.26c17.77-1.6 53.73-5.05 63.68-5.27 4.51-.1 7.27 2.79 6.55 6.54-1.6 8.35-4.1 21.97-6.49 32.97-.36 1.68-.61 2.5-1.13 4.6" />
      <path d="M42.75 26.75c.5 1.25.81 3.99.85 5.73.38 16.36-1.6 32.02-12.96 41.29" />
      <path d="M60.6 24.46c.94 1.12 1.74 2.94 1.74 4.67 0 13.33-.45 21.61-.45 27.37 0 10.25.62 11.14 11.36 11.14 6.38 0 8.94-.54 10.55-1.53" />
      <path d="M27.34 88.55C40.75 88 66.69 86.2 83 85.97" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.5 25.63)">{"1"}</text>
      <text transform="translate(9.5 55.63)">{"2"}</text>
      <text transform="translate(20.5 46.5)">{"3"}</text>
      <text transform="translate(35.5 33.5)">{"4"}</text>
      <text transform="translate(54.5 33.5)">{"5"}</text>
      <text transform="translate(30.5 85.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji西;
