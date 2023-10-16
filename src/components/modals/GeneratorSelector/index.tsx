/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

// TODO(clearfeld): clean out these disables
// TODO(clearfeld): use immer for better new state cloning

import "./GeneratorSelector.scss";

import { I_DFASSOC, df_assoc } from "@src/data-faking/assoc";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
	T_SelectedGeneratorRowStateData,
	T_SetSelectedGeneratorRowStateData,
	SelectedGeneratorRowStateData,
} from "@src/store/SelectedGeneratorAtom";
import {
	T_GeneratorRowsStateData,
	T_SetGeneratorRowsStateData,
	GeneratorRowsStateData,
	I_GeneratorRow,
} from "@src/store/GeneratorAtom";

// import { useRecoilValue, SetRecoilState, useSetRecoilState } from "recoil";
// import {
// 	T_ReservationsStateData,
// 	T_SetReservationsStateData,
// 	ReservationsStateData,
// } from "@src/store/ReservationsAtom";

interface I_GeneratorSelectorProps {
	CloseModal: () => void;
}

function GeneratorSelector(props: I_GeneratorSelectorProps) {
	const [searchStr, setSearchStr] = useState<string>("");

	const getSelectedGeneratorRowState: T_SelectedGeneratorRowStateData = useRecoilValue(
		SelectedGeneratorRowStateData,
	);
	const setSelectedGeneratorRowState: T_SetSelectedGeneratorRowStateData = useSetRecoilState(
		SelectedGeneratorRowStateData,
	);

	const getGeneratorRowsState: T_GeneratorRowsStateData = useRecoilValue(GeneratorRowsStateData);
	const setGeneratorRowsState: T_SetGeneratorRowsStateData =
		useSetRecoilState(GeneratorRowsStateData);

	function onNameChange(e: any): void {
		if (e.target.value) {
			setSearchStr(e.target.value);
		}
	}

	function SelectDataType(df: I_DFASSOC): void {
		console.log(df);

		const nsr = structuredClone(getSelectedGeneratorRowState);
		if (nsr.row) {
			nsr.row.type = df;
		}

		const ns = [...getGeneratorRowsState.rows];
		for (let i = 0; i < ns.length; ++i) {
			if (ns[i].id === nsr.id) {
				if (nsr.row) {
					ns[i] = nsr.row;
				}
				break;
			}
		}

		setGeneratorRowsState({
            rows: ns
        });
		props.CloseModal();
	}

	return (
		<div className="modal__generator-selector__wrapper">
			<div
				style={{
					display: "flex",
					placeContent: "space-between",
				}}
			>
				<div className="modal__generator-selector__title">Choose a Data Type</div>

				<button onClick={props.CloseModal} className="modal__generator-selector__btn">
					Close
				</button>
			</div>

			<div>
				{df_assoc.map((df: any, didx: number) => {
					return (
						<div key={didx} onClick={() => SelectDataType(df)}>
							<p>{df.title}</p>
							<p>{df.ex_data}</p>
							{/* <p>{df.func()}</p> */}

							{/* {JSON.stringify(df)} */}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default GeneratorSelector;
