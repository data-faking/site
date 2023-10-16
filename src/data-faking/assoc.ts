import {
  I_GeneratorRow,
  T_GeneratorRowsStateData,
} from "@src/store/GeneratorAtom";

export enum E_DF {
  // defaults - name
  MALE_PREFIX_STANDARD,
  FEMALE_PREFIX_STANDARD,
}

export const df_assoc = [
  // defaults - name
  {
    title: "Male prefix standard",
    // description?
    func: "male_prefix_standard",
  },

  {
    title: "Femlae prefix standard",
    func: "female_prefix_standard",
  },
];

export function GenerateJSON(grs: T_GeneratorRowsStateData): string {
  const rows = grs.rows;
  console.log(rows);
  let content = "[\n";

  for (let r = 0; r < 10; ++r) {
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

import * as faking from "data-faking";

function CreateJSONObject(row: I_GeneratorRow): string {
  let content = "";

  content += '"' + row.field_name + '"';
  content += ": ";

  content += '"' + faking.female_prefix() + '"';

  content += ", ";
  return content;
}
