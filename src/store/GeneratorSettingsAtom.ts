import { atom } from "recoil";

export type T_GeneratorSettingsData = {
	rows: number;
};

export type T_SetGeneratorSettingsStateData = (State_obj: T_GeneratorSettingsData) => void;

export const GeneratorSettingsStateData = atom<T_GeneratorSettingsData>({
	key: "GeneratorSettingsStateAtom",
	default: {
		rows: 100,
	},
});
