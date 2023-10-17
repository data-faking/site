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
        field_name: "id",
        type: df_assoc[2],
        null_str: "",
        null_percent: 0,
      },

      {
        id: uuidv4(),
        field_name: "first_name",
        type: df_assoc[8],
        null_str: "",
        null_percent: 0,
      },

      {
        id: uuidv4(),
        field_name: "last_name",
        type: df_assoc[9],
        null_str: "",
        null_percent: 0,
      },

      // {
      //   id: uuidv4(),
      //   field_name: "active",
      //   type: df_assoc[6],
      //   null_str: "",
      //   null_percent: 0,
      // },

      // TODO: will need to have a field to specific params for a function
      // {
      //   id: uuidv4(),
      //   field_name: "email",
      //   type: df_assoc[1],
      //   null_str: "",
      //   null_percent: 0,
      // },

      // {
      //   id: uuidv4(),
      //   field_name: "created_at",
      //   type: df_assoc[1],
      //   null_str: "",
      //   null_percent: 0,
      // },
    ],
  },
});
