import katakana from "./katakana.json";
import harigana from "./harigana.json";
import kanji from "./kanji.json";

const checkIs = (alphabet: string[]) => (char: string) =>
  alphabet.includes(char);

type Alphabets = "katakana" | "harigana" | "kanji";

export const alphabets: { [key in Alphabets]: (char: string) => boolean } = {
  katakana: checkIs(katakana),
  harigana: checkIs(harigana),
  kanji: checkIs(kanji),
};

export const findAlphabet = (char: string) => {
  return Object.entries(alphabets).find(([_, checkAlphabet]) => {
    return checkAlphabet(char);
  });
};
