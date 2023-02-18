export const applyMix = <T, K>(condition: T, mix: K) =>
  condition ? mix : undefined;
