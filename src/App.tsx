import React from "react";

import "./App.css";

import {
	createRoutesFromElements,
	createHashRouter,
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
import Footer from "./components/footer";

function App() {
	//const getCountState: T_CountStateData = useRecoilValue(CountStateData);
	//const setCountState: T_SetCountStateData = useSetRecoilState(CountStateData);

	// const router = createBrowserRouter(
	const router = createHashRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={
					<>
						<Navbar />

						<ModalEntryPoint />

						<Outlet />

						<Footer />
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
