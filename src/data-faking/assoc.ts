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

export interface I_FN {
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn: Function; // () => string | number | boolean | null;
  return_type: E_FAKING_RETURN_TYPES;
}

export interface I_DFASSOC {
  title: string;
  ex_data: string;
  func?: I_FN;
}

export enum E_FAKING_RETURN_TYPES {
  STRING,
  NUMBER,
  BOOLEAN
}

// TODO(clearfeld): this is pretty nasty - think of something better later
export enum E_DF_NAMES {
  // defaults - uuids
  UUID_V1 = "UUID V1",
  UUID_V3 = "UUID V3",
  UUID_V4 = "UUID V4",
  UUID_V5 = "UUID V5",

  // defaults - types
  BOOL = "Bool",
  I8 = "i8",
  I16 = "i16",
  I32 = "i32",
  I64 = "i64",
  ISIZE = "isize",
  U8 = "u8",
  U16 = "u16",
  U32 = "u32",
  U64 = "u64",
  USIZE = "usize",
  F32 = "f32",
  F64 = "f64",
}

export const df_func = {
  // defaults - uuids
  [E_DF_NAMES.UUID_V1]: { "fn": faking.uuid_v1, "return_type": E_FAKING_RETURN_TYPES.STRING },
  [E_DF_NAMES.UUID_V3]: { "fn": faking.uuid_v3, "return_type": E_FAKING_RETURN_TYPES.STRING },
  [E_DF_NAMES.UUID_V4]: { "fn": faking.uuid_v4, "return_type": E_FAKING_RETURN_TYPES.STRING },
  [E_DF_NAMES.UUID_V5]: { "fn": faking.uuid_v5, "return_type": E_FAKING_RETURN_TYPES.STRING },

  // defaults - types
  [E_DF_NAMES.BOOL]: { "fn": faking.bool, "return_type": E_FAKING_RETURN_TYPES.BOOLEAN },

  [E_DF_NAMES.I8]: { "fn": faking.i8, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.I16]: { "fn": faking.i16, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.I32]: { "fn": faking.i32, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.I64]: { "fn": faking.i64, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.ISIZE]: { "fn": faking.isize, "return_type": E_FAKING_RETURN_TYPES.NUMBER },

  [E_DF_NAMES.U8]: { "fn": faking.u8, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.U16]: { "fn": faking.u16, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.U32]: { "fn": faking.u32, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.U64]: { "fn": faking.u64, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.USIZE]: { "fn": faking.usize, "return_type": E_FAKING_RETURN_TYPES.NUMBER },

  [E_DF_NAMES.F32]: { "fn": faking.f32, "return_type": E_FAKING_RETURN_TYPES.NUMBER },
  [E_DF_NAMES.F64]: { "fn": faking.f64, "return_type": E_FAKING_RETURN_TYPES.NUMBER },

  // defaults - names
  "Male prefix standard": { "fn": faking.male_prefix_standard, "return_type": E_FAKING_RETURN_TYPES.STRING },
  "Female prefix standard": { "fn": faking.female_prefix_standard, "return_type": E_FAKING_RETURN_TYPES.STRING },
  "Male prefix": { "fn": faking.male_prefix, "return_type": E_FAKING_RETURN_TYPES.STRING },
  "Female prefix": { "fn": faking.female_prefix, "return_type": E_FAKING_RETURN_TYPES.STRING },

  "Male First Name": { "fn": faking.male_first_name, "return_type": E_FAKING_RETURN_TYPES.STRING },
  "Last Name": { "fn": faking.last_name, "return_type": E_FAKING_RETURN_TYPES.STRING },
};

export const df_assoc = [
  // defaults - uuids
  {
    title: E_DF_NAMES.UUID_V1,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.UUID_V3,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.UUID_V4,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.UUID_V5,
    ex_data: "",
  },


  // defaults - types
  {
    title: E_DF_NAMES.BOOL,
    ex_data: "true or false",
  },

  {
    title: E_DF_NAMES.I8,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.I16,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.I32,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.I64,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.ISIZE,
    ex_data: "",
  },

  {
    title: E_DF_NAMES.U8,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.U16,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.U32,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.U64,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.USIZE,
    ex_data: "",
  },

  {
    title: E_DF_NAMES.F32,
    ex_data: "",
  },
  {
    title: E_DF_NAMES.F64,
    ex_data: "",
  },


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

  {
    title: "Male First Name",
    ex_data: "John, James, ...",
    // func: faking.female_prefix_standard,
  },

  {
    title: "Last Name",
    ex_data: "Smith, Doe, ...",
    // func: faking.female_prefix_standard,
  },
];

export function GenerateJSON(
  grs: T_GeneratorRowsStateData,
  n_rows: number
): string {
  const rows = grs.rows;
  // console.log(rows);
  let content = "[\n";

  for (let r = 0; r < n_rows - 1; ++r) {
    let jobj = "{";
    for (let i = 0; i < rows.length; ++i) {
      // console.log(rows[i]);

      jobj += CreateJSONObject(rows[i]);
    }

    jobj = jobj.substr(0, jobj.length - 2);
    jobj += "},\n";
    content += jobj;
  }

  let jobj = "{";
  for (let i = 0; i < rows.length; ++i) {
    // console.log(rows[i]);

    jobj += CreateJSONObject(rows[i]);
  }

  jobj = jobj.substr(0, jobj.length - 2);
  jobj += "}\n";
  content += jobj;

  content += "]";

  // console.log(content);

  return content;
}

function CreateJSONObject(row: I_GeneratorRow): string {
  let content = "";
  content += '"' + row.field_name + '"';
  content += ": ";

  if (row.type.func && row.type.func.fn) {
    switch(row.type.func.return_type) {
      case E_FAKING_RETURN_TYPES.STRING: content += '"' + row.type.func.fn() + '"'; break;
      case E_FAKING_RETURN_TYPES.NUMBER: content += row.type.func.fn(); break;
      case E_FAKING_RETURN_TYPES.BOOLEAN: content += row.type.func.fn(); break;

      default: content += '"' + row.type.func.fn() + '"'; break;
    }

  }

  content += ", ";
  return content;
}
