/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// import * as faking from "data-faking";

// import GeneratorRow from "./generator-row";

//TODO resize some heights
//TODO figure out why theres scroll bar (hint: its probably some 100vh error)
//TODO incorporate different button states and variants from figma
//TODO spacing on input row is not correct
//having a hard time seeing with light mode, added borders for sanity

// NOTE(clearfeld): not a great solution but decent for testing - for the time being.
import {
	useRecoilValue,
	useSetRecoilState,
	// useSetRecoilState
} from "recoil";
import {
	T_GeneratorRowsStateData,
	T_SetGeneratorRowsStateData,
	GeneratorRowsStateData,
	// I_GeneratorRow,
} from "@src/store/GeneratorAtom";
import {
	T_GeneratorSettingsData,
	T_SetGeneratorSettingsStateData,
	GeneratorSettingsStateData,
	// I_GeneratorRow,
} from "@src/store/GeneratorSettingsAtom";
import {
    PreviewGeneratorDataStateData, T_SetPreviewGeneratorDataStateData
} from "@src/store/PreviewGeneratorDataAtom";

import { GenerateJSON, df_assoc, df_func } from "@src/data-faking/assoc";
// import { produce } from "immer";
import Input from "@src/components/commons/input";
import { produce } from "immer";

function GeneratorSettings() {
	const getGeneratorRowsState: T_GeneratorRowsStateData = useRecoilValue(GeneratorRowsStateData);
	const setGeneratorRowsState: T_SetGeneratorRowsStateData =
		useSetRecoilState(GeneratorRowsStateData);

	const setPreviewGeneratorDataState: T_SetPreviewGeneratorDataStateData =
		useSetRecoilState(PreviewGeneratorDataStateData);

	const getGeneratorSettingsState: T_GeneratorSettingsData = useRecoilValue(
		GeneratorSettingsStateData,
	);
	const setGeneratorSettingsState: T_SetGeneratorSettingsStateData = useSetRecoilState(
		GeneratorSettingsStateData,
	);

	useEffect(() => {
		GenerateAndSetPreviewData();
	}, []);

	function GenerateFile(): void {
		if (getGeneratorRowsState.rows) {
			const ns = structuredClone(getGeneratorRowsState);
			for (let i = 0; i < ns.rows.length; ++i) {
				const str = ns.rows[i].type.title;
				// @ts-ignore
				ns.rows[i].type.func = df_func[str];
			}

			// const data = GenerateJSON(getGeneratorRowsState);
            let n_rows = getGeneratorSettingsState.rows;
            if(n_rows > 1000) {
				n_rows = 1000;
			} else if (n_rows < 1) {
				n_rows = 1;
			}

			const data = GenerateJSON(ns, n_rows);

			// console.log(data);
			const a = document.createElement("a");
			const blob = new Blob([data], {
				type: "application/json", // file ending
			});
			a.href = URL.createObjectURL(blob);
			a.download = "data"; // filename to download
			a.click();
			a.remove();
		}
	}

	function GenerateAndSetPreviewData(): void {
		if (getGeneratorRowsState.rows) {
			const ns = structuredClone(getGeneratorRowsState);
			for (let i = 0; i < ns.rows.length; ++i) {
				const str = ns.rows[i].type.title;
				// @ts-ignore
				ns.rows[i].type.func = df_func[str];
			}

			// const data = GenerateJSON(getGeneratorRowsState);
            let n_rows = getGeneratorSettingsState.rows;
            if(n_rows > 1000) {
				n_rows = 1000;
			} else if (n_rows < 1) {
				n_rows = 1;
			}

			let data = GenerateJSON(ns, 10);

			try {
				data = data.substring(0, data.length - 3);
				data += "\n]";
				// console.log("data");
				// console.log(data);
				const jd = JSON.parse(data);
				// console.log("json");
				// console.log(jd);
				setPreviewGeneratorDataState(jd);
			} catch (error) {
				// TODO(clearfeld): show an error modal or something
				console.error(error);
			}

			return;
		}
	}

	function AddRow(): void {
		const ns = structuredClone(getGeneratorRowsState);

		ns.rows.push({
			id: uuidv4(),
			field_name: "a",
			type: df_assoc[0],
			null_str: "",
			null_percent: 0,
		});

		setGeneratorRowsState(ns);
	}

	function UpdateNumberOfRows(val: string): void {
		const ns = produce(getGeneratorSettingsState, (draft) => {
			draft.rows = parseInt(val);
		});

		setGeneratorSettingsState(ns);
	}

	return (
		<>
			<div className="content__button-area">
				<div className="content__button-area-left center">
					<button onClick={AddRow}>Add Row</button>
				</div>

				<div className="content__button-area-right center">
					<button onClick={GenerateFile}>Generate</button>
					<button onClick={GenerateAndSetPreviewData}>Preview</button>
				</div>
			</div>

			<div className="content__schema-inputs">
				<div className="content__schema-input-wrapper">
					<label
						htmlFor="number-of-rows"
						style={{
							// @ts-ignore
							textWrap: "nowrap",
						}}
					>
						# Rows
					</label>
					{/* <input id="number-of-rows" type="number"></input> */}
					<Input value={getGeneratorSettingsState.rows} SetValue={UpdateNumberOfRows} />
				</div>

				{/* <div className="content__schema-input-wrapper">
					<label htmlFor="format">Format</label>
					<select id="format">
						<option>JSON</option>
						<option>CSV</option>
					</select>
				</div> */}

				{/* <div className="content__schema-input-wrapper">
					<label htmlFor="line-ending">Format</label>
					<select id="line-ending">
						<option>Unix (LF)</option>
						<option>Windows (CRLF)</option>
					</select>
				</div> */}

				{/* <div className="content__schema-input-wrapper">
					<label htmlFor="header-checkbox">Header</label>
					<input id="header-checkbox" type="checkbox"></input>
				</div> */}
			</div>
		</>
	);
}

export default GeneratorSettings;
