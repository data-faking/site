import { atom } from "recoil";

export type T_UserPreferencesData = {
	theme: "LIGHT" | "DARK";
    jsonTheme: "djv-default" | "twilight";
};

export type T_SetUserPreferencesStateData = (State_obj: T_UserPreferencesData) => void;

export const UserPreferencesStateData = atom<T_UserPreferencesData>({
	key: "UserPreferencesStateAtom",
	default: {
		theme: "LIGHT",
        jsonTheme: "djv-default",
	},
});