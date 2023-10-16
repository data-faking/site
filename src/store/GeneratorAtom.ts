import { atom } from "recoil";

export interface I_GeneratorRow {
  field_name: string;
  value: number;
  null_str: string;
  null_percent: number;
}

export type T_GeneratorRowsStateData = {
  rows: I_GeneratorRow[];
};

export type T_SetGeneratorRowsStateData = (
  State_obj: T_GeneratorRowsStateData
) => void;

export const GeneratorRowsStateData = atom<T_GeneratorRowsStateData>({
  key: "GeneratorRowsState",
  default: {
    rows: [
        {
            field_name: "a",
            value: 0,
            null_str: "",
            null_percent: 0,
        },

        {
            field_name: "b",
            value: 1,
            null_str: "",
            null_percent: 0,
        },

        {
            field_name: "c",
            value: 2,
            null_str: "",
            null_percent: 0,
        },
    ],
  },
});
