/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { atom } from "recoil";
import { v4 as uuidv4 } from 'uuid';

import {
    df_assoc,
    I_DFASSOC
} from "@src/data-faking/assoc";

export interface I_GeneratorRow {
  id: string;
  field_name: string;
  type: I_DFASSOC;
  null_str: string | null;
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
        id: uuidv4(),
        field_name: "a",
        type: df_assoc[0],
        null_str: "",
        null_percent: 0,
      },

      {
        id: uuidv4(),
        field_name: "b",
        type: df_assoc[0],
        null_str: "",
        null_percent: 0,
      },

      {
        id: uuidv4(),
        field_name: "c",
        type: df_assoc[1],
        null_str: "",
        null_percent: 0,
      },
    ],
  },
});
