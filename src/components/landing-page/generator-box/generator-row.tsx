import React from "react";

// import "./LandingPage.scss";

import { ReactComponent as DragHandleSVG } from "@src/assets/drag-handle.svg";
import { ReactComponent as DeleteIconSVG } from "@src/assets/delete-icon.svg";
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

interface I_GeneratorRowProps {
	row: I_GeneratorRow;
}

function GeneratorRow(props: I_GeneratorRowProps) {
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
		<div className="content__input-row">
			<button>
				<DragHandleSVG className="svg-filter" height="1rem" width="1rem" viewBox="0 0 10 16" />
			</button>

			<input value={props.row.field_name} />
			<input value={props.row.type.title} onClick={OpenSelectorModal} />
			<input value={props.row.null_str ?? ""} />
			<input value={props.row.null_percent} />

			<button>
				<DeleteIconSVG className="svg-filter" height="1rem" width="1rem" viewBox="0 0 16 18" />
			</button>
		</div>
	);
}

export default GeneratorRow;
