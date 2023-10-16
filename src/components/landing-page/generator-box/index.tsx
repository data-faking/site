/* eslint-disable @typescript-eslint/no-unsafe-call */
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

import { produce } from "immer";
import GeneratorSettings from "./GeneratorSettings";

function GeneratorLines() {
	const getGeneratorRowsState: T_GeneratorRowsStateData = useRecoilValue(GeneratorRowsStateData);
	const setGeneratorRowsState: T_SetGeneratorRowsStateData =
		useSetRecoilState(GeneratorRowsStateData);

	function RemoveRow(id: string): void {
		const ns = structuredClone(getGeneratorRowsState);

		for (let i = 0; i < ns.rows.length; ++i) {
			// const element = array[i];
			if (ns.rows[i].id === id) {
				ns.rows.splice(i, 1);
				break;
			}
		}

		setGeneratorRowsState(ns);
	}

	function UpdateRow(row: I_GeneratorRow): void {
		const ns = produce(getGeneratorRowsState, (draft) => {
			for (let i = 0; i < draft.rows.length; ++i) {
				if (draft.rows[i].id === row.id) {
					draft.rows[i] = row;
					break;
				}
			}
		});

		setGeneratorRowsState(ns);
	}

	return (
		<div className="content__input-row-area">
			{getGeneratorRowsState.rows.map((row: I_GeneratorRow, ridx: number) => {
				return <GeneratorRow key={ridx} row={row} UpdateRow={UpdateRow} RemoveRow={RemoveRow} />;
			})}
		</div>
	);
}

function GeneratorBox() {
	return (
		<>
			<div className="content__labels">
				<h1>Field Name</h1>
				<h1>Type</h1>
				{/* <h1>Blank / Null Value</h1>
				<h1>Blank / Null Percent</h1> */}
			</div>

			<GeneratorLines />

			<GeneratorSettings />
		</>
	);
}

export default GeneratorBox;
