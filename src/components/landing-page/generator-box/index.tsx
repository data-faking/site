/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

// import * as faking from "data-faking";

import GeneratorRow from "./generator-row";

//TODO resize some heights
//TODO finish form and display
//TODO refactor everything into components
//TODO figure out why theres scroll bar (hint: its probably some 100vh error)
//TODO incorporate different button states and variants from figma
//TODO reactbeautifuldnd for drag and drop features
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
	I_GeneratorRow,
} from "@src/store/GeneratorAtom";

import { GenerateJSON, df_assoc, df_func } from "@src/data-faking/assoc";

function GeneratorLines() {
	const getGeneratorRowsState: T_GeneratorRowsStateData = useRecoilValue(GeneratorRowsStateData);
	const setGeneratorRowsState: T_SetGeneratorRowsStateData =
		useSetRecoilState(GeneratorRowsStateData);

	function RemoveRow(id: string): void {
		const ns = structuredClone(getGeneratorRowsState);

		for (let i = 0; i < ns.rows.length; ++i) {
			// const element = array[i];
			if(ns.rows[i].id === id) {
				ns.rows.splice(i, 1);
				break;
			}
		}

		setGeneratorRowsState(ns);
	}

	return (
		<div className="content__input-row-area">
			{getGeneratorRowsState.rows.map((row: I_GeneratorRow, ridx: number) => {
				return <GeneratorRow
				key={ridx}
				row={row}
				RemoveRow={RemoveRow}
				/>;
			})}
		</div>
	);
}

function GeneratorBox() {
	const getGeneratorRowsState: T_GeneratorRowsStateData = useRecoilValue(GeneratorRowsStateData);
	const setGeneratorRowsState: T_SetGeneratorRowsStateData =
		useSetRecoilState(GeneratorRowsStateData);

	function GenerateFile(): void {
		if (getGeneratorRowsState.rows) {
			const ns = structuredClone(getGeneratorRowsState);
			for (let i = 0; i < ns.rows.length; ++i) {
				const str = ns.rows[i].type.title;
				// @ts-ignore
				ns.rows[i].type.func = df_func[str];
			}

			// const data = GenerateJSON(getGeneratorRowsState);
			const data = GenerateJSON(ns);

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

	function AddRow(): void {
		const ns = structuredClone(getGeneratorRowsState);

		ns.rows.push({
			id: "-1",
			field_name: "a",
			type: df_assoc[0],
			null_str: "",
			null_percent: 0,
		});

		setGeneratorRowsState(ns);
	}

	return (
		<>
			<div className="content__labels">
				<h1>Field Name</h1>
				<h1>Type</h1>
				<h1>Blank / Null Value</h1>
				<h1>Blank / Null Percent</h1>
			</div>

			<GeneratorLines />

			<div className="content__button-area">
				<div className="content__button-area-left center">
					<button onClick={AddRow}>Add Row</button>
				</div>

				<div className="content__button-area-right center">
					<button onClick={GenerateFile}>Generate</button>
					<button>Preview</button>
				</div>
			</div>

			<div className="content__schema-inputs">
				<div className="content__schema-input-wrapper">
					<label htmlFor="number-of-rows"># Rows</label>
					<input id="number-of-rows" type="number"></input>
				</div>

				<div className="content__schema-input-wrapper">
					<label htmlFor="format">Format</label>
					<select id="format">
						<option>JSON</option>
						<option>CSV</option>
					</select>
				</div>

				<div className="content__schema-input-wrapper">
					<label htmlFor="line-ending">Format</label>
					<select id="line-ending">
						<option>Unix (LF)</option>
						<option>Windows (CRLF)</option>
					</select>
				</div>

				<div className="content__schema-input-wrapper">
					<label htmlFor="header-checkbox">Header</label>
					<input id="header-checkbox" type="checkbox"></input>
				</div>
			</div>
		</>
	);
}

export default GeneratorBox;
