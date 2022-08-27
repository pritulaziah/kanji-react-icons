import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji求: KanjiIconType = (props) => (
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
      <path d="M19.75 35.4c2.75.47 6.08.33 8.77.02C41 34 62.3 31.74 74.38 30.83c3.24-.25 6.66-.65 9.87.05" />
      <path d="M52.27 11.33c1.26 1.26 1.76 2.67 1.76 4.77 0 15.77-.01 68.02-.01 77.12 0 8.53-5.77 2.53-8.71.25" />
      <path d="M26.27 49.08c3.99 1.48 10.3 6.08 11.29 8.38" />
      <path d="M18.45 83.33c1.18.55 2.93.42 4.3-.7 1.7-1.39 14.5-13.38 22.75-21.38" />
      <path d="M81 42.25c0 .88-.22 2.08-.78 2.81-3.37 4.36-9.59 9.13-15.47 12.19" />
      <path d="M60.25 62.5c3.5 1 17.39 15.53 24.45 20.14 2.06 1.34 5.3 3.48 8.05 4.36" />
      <path d="M69.5 11.5c4.08 1.63 10.54 6.69 11.56 9.22" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(13.5 36.5)">{"1"}</text>
      <text transform="translate(43.99 10.56)">{"2"}</text>
      <text transform="translate(18.49 50.98)">{"3"}</text>
      <text transform="translate(10.99 89.5)">{"4"}</text>
      <text transform="translate(72.5 42.5)">{"5"}</text>
      <text transform="translate(60.49 74.76)">{"6"}</text>
      <text transform="translate(63.5 10.5)">{"7"}</text>
    </g>
  </svg>
);

export default Kanji求;
