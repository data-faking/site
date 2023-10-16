import React from "react";

// import "./App.scss";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
	T_ModalStateData,
	T_SetModalStateData,
	ModalStateData,
	E_MODALS_NAME,
} from "@src/store/ModalStateAtom";

import GeneratorSelector from "./GeneratorSelector";

// import DeleteColumn from "./DeleteColumn/DeleteColumn";

function ModalEntryPoint() {
	const getModalState: T_ModalStateData = useRecoilValue(ModalStateData);
	const setModalState: T_SetModalStateData = useSetRecoilState(ModalStateData);

	// // Should we just put this directly inside the prop and not call it at the top of the function might be better????
	// const org_id = window.location.href.split("/")[4];
	// const project_id = window.location.href.split("/")[6];

	// React.useEffect(() => {}, []);

	function CloseModal(): void {
		// console.log("CLOSE STATE", getKanbanState);

		// const url_query_params_removed = window.location.href.split("?")[0];
		// window.history.replaceState({}, document.title, url_query_params_removed);

		setModalState({
			showModal: false,
			modalString: E_MODALS_NAME.NONE,
		});
	}

	return (
		<div>
			{getModalState.showModal && (
				<div
					style={{
						position: "fixed",
						zIndex: 100,
						top: "0",
						left: "0",
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							background: "black",
							height: "100vh",
							opacity: "0.55",
							position: "absolute",
							width: "100vw",
						}}
					/>

					{getModalState.modalString === E_MODALS_NAME.SELECT_GENERATOR_FUNCTION && (
						<>
							<GeneratorSelector CloseModal={CloseModal} />
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default ModalEntryPoint;
