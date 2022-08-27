import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji度: KanjiIconType = (props) => (
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
      <path d="M51.55 11.63c2.27.77 7.08 5.77 7.53 7.3" />
      <path d="M22.63 26.73c1.52.54 4.3.63 5.82.54C44.25 26.36 66 23 83.56 22.04c2.53-.14 4.05.26 5.31.53" />
      <path d="M27.49 29.5c.04 1.59.03 4.1-.09 6.38-.91 17.62-5 46.09-16.6 60.59" />
      <path d="M33.25 41.71c1.45.44 4.11.52 5.56.44 7.58-.4 37.94-4.4 45.86-4.64 2.42-.07 3.87.21 5.08.43" />
      <path d="M45.6 31.89c1.19.4 1.91 1.82 2.15 2.63.24.81 1 14.73 1.76 21.23" />
      <path d="M68.21 29.25c1.19.4 1.91 1.82 2.15 2.63.24.81-1.41 11.33-2.13 18.82" />
      <path d="M49.51 53.83C57 52.75 61 52.25 70.25 51.11" />
      <path d="M43.11 64.66c1.51.26 1.7.66 4.72.26 3.02-.4 17.75-4.82 19.83-5.22s3.64 1.48 2.83 2.9C60.75 79.75 43.25 93 26.43 98.75" />
      <path d="M40.91 69.53c4.62.66 27.17 18.43 43.25 25.71 2.5 1.13 4.33 1.89 6.66 2.27" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(46 12.5)">{"1"}</text>
      <text transform="translate(24.5 24.5)">{"2"}</text>
      <text transform="translate(20.25 37.5)">{"3"}</text>
      <text transform="translate(33.5 38.5)">{"4"}</text>
      <text transform="translate(39.5 34.63)">{"5"}</text>
      <text transform="translate(60.5 33.13)">{"6"}</text>
      <text transform="translate(53.5 50.5)">{"7"}</text>
      <text transform="translate(39.75 61.5)">{"8"}</text>
      <text transform="translate(34.5 72.5)">{"9"}</text>
    </g>
  </svg>
);

export default Kanji度;
