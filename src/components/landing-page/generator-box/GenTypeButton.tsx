/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import "./GenTypeButton.scss";

import { I_GeneratorRow } from "@src/store/GeneratorAtom";

import {
	// useRecoilValue,
	useSetRecoilState,
} from "recoil";
import {
	// T_ModalStateData,
	T_SetModalStateData,
	ModalStateData,
	E_MODALS_NAME,
} from "@src/store/ModalStateAtom";
import {
	// T_SelectedGeneratorRowStateData,
	T_SetSelectedGeneratorRowStateData,
	SelectedGeneratorRowStateData,
} from "@src/store/SelectedGeneratorAtom";

// import { produce } from "immer";

interface I_GenTypeButtonProps {
	row: I_GeneratorRow;
}

function GenTypeButton(props: I_GenTypeButtonProps) {
	const setModalState: T_SetModalStateData = useSetRecoilState(ModalStateData);
	const setSelectedGeneratorRowState: T_SetSelectedGeneratorRowStateData = useSetRecoilState(
		SelectedGeneratorRowStateData,
	);

	function OpenSelectorModal(): void {
		setSelectedGeneratorRowState({
			id: props.row.id,
			row: props.row,
		});
		setModalState({
			showModal: true,
			modalString: E_MODALS_NAME.SELECT_GENERATOR_FUNCTION,
		});
	}

	return (
		<div
            className="gen-type-btn__wrapper"
            onClick={OpenSelectorModal}
        >
			{props.row.type.title}
			{/* <input value={props.row.type.title} onClick={OpenSelectorModal} /> */}
		</div>
	);
}

export default GenTypeButton;
