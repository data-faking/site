import React from "react";

import * as faking from "data-faking";

function WasmTest() {
	return (
		<div>
            Data faking - Last Name - res: {faking.last_name()}
		</div>
	);
}

export default WasmTest;
