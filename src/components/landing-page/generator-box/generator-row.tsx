/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// import "./LandingPage.scss";

// import { ReactComponent as DragHandleSVG } from "@src/assets/drag-handle.svg";
import { ReactComponent as DeleteIconSVG } from "@src/assets/delete-icon.svg";
import { I_GeneratorRow } from "@src/store/GeneratorAtom";

// import {
// 	// useRecoilValue,
// 	useSetRecoilState,
// } from "recoil";
// import {
// 	// T_SelectedGeneratorRowStateData,
// 	T_SetSelectedGeneratorRowStateData,
// 	SelectedGeneratorRowStateData,
// } from "@src/store/SelectedGeneratorAtom";

import Input from "@src/components/commons/input";
import { produce } from "immer";
import GenTypeButton from "./GenTypeButton";

interface I_GeneratorRowProps {
	row: I_GeneratorRow;
	UpdateRow: (row: I_GeneratorRow) => void;
	RemoveRow: (id: string) => void;
}

function GeneratorRow(props: I_GeneratorRowProps) {
	function RemoveRow(): void {
		props.RemoveRow(props.row.id);
	}

	function UpdateFieldName(val: string): void {
		const ns = produce(props.row, (draft) => {
			draft.field_name = val;
		});

		props.UpdateRow(ns);
	}

	return (
		<div className="content__input-row">
			{/* <button>
				<DragHandleSVG className="svg-filter" height="1rem" width="1rem" viewBox="0 0 10 16" />
			</button> */}

			<Input value={props.row.field_name} SetValue={UpdateFieldName} />
			<GenTypeButton row={props.row} />

			{/* <Input value={props.row.null_str ?? ""} />
			<div
				style={{
					width: "8rem",
				}}
			>
				<Input value={props.row.null_percent} />
			</div> */}

			<button onClick={RemoveRow}>
				<DeleteIconSVG className="svg-filter" height="1rem" width="1rem" viewBox="0 0 16 18" />
			</button>
		</div>
	);
}

export default GeneratorRow;