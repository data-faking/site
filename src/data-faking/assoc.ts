import * as faking from "data-faking";

import {
  I_GeneratorRow,
  T_GeneratorRowsStateData,
} from "@src/store/GeneratorAtom";

export enum E_DF {
  // defaults - name
  MALE_PREFIX_STANDARD,
  FEMALE_PREFIX_STANDARD,
}

export interface I_DFASSOC {
  title: string;
  ex_data: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  func?: Function; // () => string | number | boolean | null;
}

export const df_func = {
    "Male prefix standard": faking.male_prefix_standard,
    "Female prefix standard": faking.female_prefix_standard,
    "Male prefix": faking.male_prefix,
    "Female prefix": faking.female_prefix,
};

export const df_assoc = [
  // defaults - name
  {
    title: "Male prefix standard",
    // description?
    ex_data: "Mr.",
    // func: faking.male_prefix_standard,
  },

  {
    title: "Female prefix standard",
    ex_data: "Mrs.",
    // func: faking.female_prefix_standard,
  },

  {
    title: "Male prefix",
    ex_data: "Mr.",
    // func: faking.female_prefix_standard,
  },

  {
    title: "Female prefix",
    ex_data: "Mrs.",
    // func: faking.female_prefix_standard,
  },
];

export function GenerateJSON(grs: T_GeneratorRowsStateData, n_rows: number): string {
  const rows = grs.rows;
  console.log(rows);
  let content = "[\n";

  for (let r = 0; r < n_rows; ++r) {
    let jobj = "{";
    for (let i = 0; i < rows.length; ++i) {
      console.log(rows[i]);

      jobj += CreateJSONObject(rows[i]);
    }

    jobj = jobj.substr(0, jobj.length - 2);
    jobj += "},\n";
    content += jobj;
  }
  content += "]";
  return content;
}

function CreateJSONObject(row: I_GeneratorRow): string {
  let content = "";

  content += '"' + row.field_name + '"';
  content += ": ";

  if (row.type.func) {
    content += '"' + row.type.func() + '"';
  }

  content += ", ";
  return content;
}
