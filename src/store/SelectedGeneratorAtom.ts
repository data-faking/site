import { atom } from "recoil";

import { I_GeneratorRow } from "./GeneratorAtom";

import { df_assoc } from "@src/data-faking/assoc";

export type T_SelectedGeneratorRowStateData = {
  id: string | null;
  row: I_GeneratorRow | null;
};

export type T_SetSelectedGeneratorRowStateData = (
  State_obj: T_SelectedGeneratorRowStateData
) => void;

export const SelectedGeneratorRowStateData =
  atom<T_SelectedGeneratorRowStateData>({
    key: "SelectedGeneratorRowState",
    default: {
      id: "",
      row: {
        id: "-1",
        field_name: "a",
        type: df_assoc[0],
        null_str: "",
        null_percent: 0,
      },
    },
  });
