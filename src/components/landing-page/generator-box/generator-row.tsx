import React from "react";

// import "./LandingPage.scss";

import { ReactComponent as DragHandleSVG } from "@src/assets/drag-handle.svg";
import { ReactComponent as DeleteIconSVG } from "@src/assets/delete-icon.svg";

function GeneratorRow() {
	return (
		<div className="content__input-row">
			<button>
				<DragHandleSVG className="svg-filter" height="1rem" width="1rem" viewBox="0 0 10 16" />
			</button>

			<input />
			<input />
			<input />
			<input />

			<button>
				<DeleteIconSVG className="svg-filter" height="1rem" width="1rem" viewBox="0 0 16 18" />
			</button>
		</div>
	);
}
export default GeneratorRow;
