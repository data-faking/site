/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { atom } from "recoil";

// export type T_PreviewGeneratorStateData = {
// };

export type T_SetPreviewGeneratorDataStateData = (State_obj: any) => void;

export const PreviewGeneratorDataStateData = atom<any>({
  key: "PreviewGeneratorDataStateAtom",
  default: [],
});
