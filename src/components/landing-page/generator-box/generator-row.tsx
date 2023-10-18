/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from "react";

// import "./LandingPage.scss";
import { ReactComponent as DragHandleSVG } from "@src/assets/drag-handle.svg";
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
import { Draggable } from "react-beautiful-dnd";

//TODO reorder the rows when you drop it
interface I_GeneratorRowProps {
	row: I_GeneratorRow;
	index: number;
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

	function UpdateNullStr(val: string): void {
		const ns = produce(props.row, (draft) => {
			draft.null_str = val;
		});

		props.UpdateRow(ns);
	}

	function UpdateNullPercent(val: string): void {
		try {
			let x = parseInt(val);
			if(x < 0) {
				x = 0;
			} else if(x > 100) {
				x = 100;
			}

			const ns = produce(props.row, (draft) => {
				draft.null_percent = x;
			});

			props.UpdateRow(ns);
		} catch (error) {
			console.log("TODO: error state");
		}
	}

	return (
		<Draggable draggableId={"draggable-" + props.index} index={props.index}>
			{(provided) => (
				<div className="content__input-row" {...provided.draggableProps} ref={provided.innerRef}>
					<button className="content__input-row-drag-icon" {...provided.dragHandleProps}>
						<DragHandleSVG className="svg-filter" height="1rem" width="1rem" viewBox="0 0 10 16" />
					</button>

					<Input value={props.row.field_name} SetValue={UpdateFieldName} />
					<GenTypeButton row={props.row} />

					<div />

					<div
						style={{
							width: "80%",
						}}
					>
						<Input value={props.row.null_str} SetValue={UpdateNullStr} placeholder="null" />
					</div>

					<div
						style={{
							width: "2rem",
						}}
					>
						<Input value={props.row.null_percent} SetValue={UpdateNullPercent} />
					</div>

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
			)}
		</Draggable>
	);
}

export default GeneratorRow;
