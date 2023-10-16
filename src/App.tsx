import React from "react";

import "./App.css";

import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet
} from "react-router-dom";

//import { useRecoilValue, useSetRecoilState } from "recoil";
//import { T_CountStateData, T_SetCountStateData, CountStateData } from "@store/CountAtom";

//import { ReactComponent as LogoSVG } from "./logo.svg";
//import CheckboxWithLabel from "./CheckboxWithLabel";

// import WasmTime from "./components/wasm_test";

import Navbar from "@src/components/navbar";
import LandingPage from "@src/components/landing-page";
import ModalEntryPoint from "@src/components/modals/ModalEntryPoint";

function App() {
	//const getCountState: T_CountStateData = useRecoilValue(CountStateData);
	//const setCountState: T_SetCountStateData = useSetRecoilState(CountStateData);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={
					<>
						<Navbar />

						<ModalEntryPoint />

						<Outlet />
					</>
				}
			>
				<Route index element={<LandingPage />} />
			</Route>,
		),
	);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
