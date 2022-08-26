import katakana from "./katakana.json";
import hiragana from "./hiragana.json";
import kanji from "./kanji.json";

const checkIs = (alphabet: string[]) => (char: string) =>
  alphabet.includes(char);

type Alphabets = "katakana" | "hiragana" | "kanji";

export const alphabets: { [key in Alphabets]: (char: string) => boolean } = {
  katakana: checkIs(katakana),
  hiragana: checkIs(hiragana),
  kanji: checkIs(kanji),
};

export const findAlphabet = (char: string) => {
  return Object.entries(alphabets).find(([_, checkAlphabet]) => {
    return checkAlphabet(char);
  });
};
