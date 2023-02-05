import { NUM_OF_GUESSES_ALLOWED } from "./constants";

export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const guessList = () => {
  return range(NUM_OF_GUESSES_ALLOWED).map((i) => {
    return {
      word: "",
      results: [],
      id: crypto.randomUUID(),
    };
  });
};
