/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import "./Input.scss";

interface I_InputProps {
	value: string | number;
	SetValue?: (val: any) => void;
}

function Input(props: I_InputProps) {
	function OnChange(e: any): void {
		if (e.target.value) {
			if (props.SetValue) {
				props.SetValue(e.target.value);
			}
		}
	}

	return <input className="commons__input__wrapper" value={props.value} onChange={OnChange} />;
}

export default Input;
