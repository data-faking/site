import React from "react";

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
	// useSetRecoilState
} from "recoil";
import {
	T_GeneratorRowsStateData,
	// T_SetGeneratorRowsStateData,
	GeneratorRowsStateData,
	I_GeneratorRow,
} from "@src/store/GeneratorAtom";

import { GenerateJSON } from "@src/data-faking/assoc";

function GeneratorLines() {
	const getGeneratorRowsState: T_GeneratorRowsStateData = useRecoilValue(GeneratorRowsStateData);

	return (
		<div className="content__input-row-area">
			{getGeneratorRowsState.rows.map((row: I_GeneratorRow, ridx: number) => {
				return <GeneratorRow key={ridx} row={row} />;
			})}
		</div>
	);
}

function GeneratorBox() {
	const getGeneratorRowsState: T_GeneratorRowsStateData = useRecoilValue(GeneratorRowsStateData);

	function GenerateFile(): void {
		if (getGeneratorRowsState.rows) {
			const data = GenerateJSON(getGeneratorRowsState);

			console.log(data);

			const a = document.createElement("a");
			const blob = new Blob([data]);
			a.href = URL.createObjectURL(blob);
			a.download = "data"; // filename to download
			a.click();
			a.remove();
		}
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
					<button>Add Row</button>
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
