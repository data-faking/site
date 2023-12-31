/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import React, { useEffect } from "react";

import "./navbar.scss";

import Cookies from "js-cookie";

import { ReactComponent as DarkModeIconSVG } from "@src/assets/dark-mode.svg";

import {
	//useRecoilValue,
	useSetRecoilState,
	// useSetRecoilState
} from "recoil";
import {
	//T_UserPreferencesData,
	T_SetUserPreferencesStateData,
	UserPreferencesStateData
} from "@src/store/UserPreferencesAtom";

interface I_Cookie_UserPreferences {
	theme: "Dark" | "Light" | string;
}

function Navbar() {
	const user_preferences_cookie = "df__user_preferences";
	//const getUserPreferencesState: T_UserPreferencesData = useRecoilValue(UserPreferencesStateData);
	const setUserPreferencesState: T_SetUserPreferencesStateData =
		useSetRecoilState(UserPreferencesStateData);

	useEffect(() => {
		EnablePreferredTheme();
	}, []);

	function EnablePreferredTheme(): void {
		const up = Cookies.get(user_preferences_cookie);

		if (up) {
			const upc = JSON.parse(up) as I_Cookie_UserPreferences;

			const htmlroot = document.getElementsByTagName("html")[0];

			if (upc.theme === "Dark") {
				setUserPreferencesState({ theme: "DARK", jsonTheme: "twilight" });
				htmlroot.setAttribute("data-theme", "Dark");
			} else {
				setUserPreferencesState({ theme: "LIGHT", jsonTheme: "djv-default" });
				htmlroot.setAttribute("data-theme", "Light");
			}
		}
	}

	function ToggleThemes(): void {
		const htmlroot = document.getElementsByTagName("html")[0];

		const css = document.createElement("style");
		css.type = "text/css";
		css.appendChild(
			document.createTextNode(
				`* {
       				-webkit-transition: none !important;
       				-moz-transition: none !important;
       				-o-transition: none !important;
       				-ms-transition: none !important;
       				transition: none !important;
    			}`,
			),
		);
		document.head.appendChild(css);

		const dt = htmlroot.getAttribute("data-theme");
		let theme = "";
		if (dt === "Dark") {
			setUserPreferencesState({ theme: "LIGHT", jsonTheme: "djv-default" });
			htmlroot.setAttribute("data-theme", "Light");
			theme = "Light";
		} else {
			setUserPreferencesState({ theme: "DARK", jsonTheme: "twilight" });
			htmlroot.setAttribute("data-theme", "Dark");
			theme = "Dark";
		}

		const _ = window.getComputedStyle(css).opacity;
		console.log(_);
		document.head.removeChild(css);

		const up = Cookies.get(user_preferences_cookie);
		if (up) {
			const upc = JSON.parse(up) as I_Cookie_UserPreferences;

			upc.theme = theme;
			Cookies.set(user_preferences_cookie, JSON.stringify(upc), {
				path: "/",
				sameSite: "strict",
				// domain: domain_str
			});
		} else {
			const upc = {
				theme: theme,
			};

			Cookies.set(user_preferences_cookie, JSON.stringify(upc), {
				path: "/",
				sameSite: "strict",
				// domain: domain_str
			});
		}
	}

	return (
		<div className="navbar">
			<h1 className="navbar__header center">Data Faking</h1>

			<button className="navbar__dark-mode-button center" onClick={ToggleThemes}>
				<DarkModeIconSVG
					className="svg-filter"
					height="1.25rem"
					width="1.25rem"
					viewBox="0 0 18 18"
				/>
			</button>
		</div>
	);
}

export default Navbar;
