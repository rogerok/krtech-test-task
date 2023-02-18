import { applyMix } from "./applyMix";

export const visuallyHidden = (open: boolean | undefined) =>
  applyMix(!open, "visually-hidden");
