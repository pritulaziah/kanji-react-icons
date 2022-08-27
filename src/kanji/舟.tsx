import * as React from "react";
import { KanjiIconType } from "../kanjiIcon";

const Kanji舟: KanjiIconType = (props) => (
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
      <path d="M52.5 10.42c.25.83 0 2.05-.67 3.25C50 17 49 19.25 47 22" />
      <path d="M35.83 24.67c.94.94 1.36 2.46 1.42 4.58 1 35.5-.75 55.25-9.25 66.42" />
      <path d="M38 26.33c1.22-.12 2.76-.28 4.52-.48 8.3-.95 21.26-2.63 26.48-3.18 6.33-.67 6 1.33 6 3.67s-.67 61-.67 64.33c0 9.33-9 2-10.33 1.33" />
      <path d="M51.67 35.75c1.58 1.25 5.67 8.33 6 10.67" />
      <path d="M52.92 58.67c1.08 1.08 1.5 2.67 1.5 4 0 1.84-.02 8.37-.03 13.08 0 1.89-.01 3.48-.01 4.38" />
      <path d="M12.92 58.58c4.43.89 8.04.66 12.48.09 16.73-2.17 44.1-4.8 60.35-5.84 3.67-.24 7.74-.14 11.34.75" />
    </g>
    <g
      style={{
        fontSize: 8,
        fill: "gray",
      }}
    >
      <text transform="translate(43.5 10.5)">{"1"}</text>
      <text transform="translate(28.5 33.5)">{"2"}</text>
      <text transform="translate(38.25 22.63)">{"3"}</text>
      <text transform="translate(43.5 35.5)">{"4"}</text>
      <text transform="translate(46.5 66.5)">{"5"}</text>
      <text transform="translate(5.5 60.5)">{"6"}</text>
    </g>
  </svg>
);

export default Kanji舟;
