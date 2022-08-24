export const checkIsHarigana = (v: number) => {
  return v >= 12352 && v <= 12447;
};

export const checkIsKatakana = (v: number) => {
  return v >= 12448 && v <= 12543;
};

export const checkIsKanji = (v: number) => {
  return (
    (v >= 19968 && v <= 40899) ||
    (v >= 13312 && v <= 19903) ||
    (v >= 63744 && v <= 64217) ||
    (v >= 11904 && v <= 12031) ||
    (v >= 131072 && v <= 173791)
  );
};

type Alphabets = "katakana" | "harigana" | "kanji";

export const alphabets: { [key in Alphabets]: (v: number) => void } = {
  katakana: checkIsKatakana,
  harigana: checkIsHarigana,
  kanji: checkIsKanji,
};

export const findAlphabet = (v: number) => {
  return Object.entries(alphabets).find(([_, checkAlphabet]) => {
    return checkAlphabet(v);
  });
};
