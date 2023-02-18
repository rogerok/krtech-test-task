export const generateArrayOfNumbers = (num: number): number[] =>
  Array.from(Array(num), (_, i) => i + 1);
