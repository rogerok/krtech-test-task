export const generateRandomHsla = (
  h: number,
  s: number,
  l: number,
  a: number
) => `hsla(${Math.random() * h}, ${s}%, ${l}%, ${a})`;
