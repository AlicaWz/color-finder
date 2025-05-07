import { atom } from "nanostores";
import type Props from "../../library/listItem/index";

export const $colors = atom<(typeof Props)[]>([]);

export function addColor(color: typeof Props) {
  $colors.set([...$colors.get(), color]);
}
