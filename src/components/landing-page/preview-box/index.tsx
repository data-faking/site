/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
//import "./LandingPage.scss";
import ReactJson, { ThemeKeys } from "react-json-view";

import {
	useRecoilValue,
	//useSetRecoilState,
	// useSetRecoilState
} from "recoil";
import {
	T_UserPreferencesData,
	//T_SetUserPreferencesStateData,
	UserPreferencesStateData,
} from "@src/store/UserPreferencesAtom";
import { PreviewGeneratorDataStateData } from "@src/store/PreviewGeneratorDataAtom";

//TODO resize some heights
//TODO figure out why theres scroll bar (hint: its probably some 100vh error)
//TODO incorporate different button states and variants from figma
//TODO spacing on input row is not correct
//having a hard time seeing with light mode, added borders for sanity

//TODO need some help figuring how to cause a rerender when someone switched themes
/* const viewerStyles = [
    { value: 'apathy', label: 'apathy' },
    { value: 'apathy:inverted', label: 'apathy:inverted' },
    { value: 'ashes', label: 'ashes' },
    { value: 'bespin', label: 'bespin' },
    { value: 'brewer', label: 'brewer' },
    { value: 'bright:inverted', label: 'bright:inverted' },
    { value: 'bright', label: 'bright' },
    { value: 'chalk', label: 'chalk' },
    { value: 'codeschool', label: 'codeschool' },
    { value: 'colors', label: 'colors' },
    { value: 'eighties', label: 'eighties' },
    { value: 'embers', label: 'embers' },
    { value: 'flat', label: 'flat' },
    { value: 'google', label: 'google' },
    { value: 'grayscale', label: 'grayscale' },
    {
        value: 'grayscale:inverted',
        label: 'grayscale:inverted'
    },
    { value: 'greenscreen', label: 'greenscreen' },
    { value: 'harmonic', label: 'harmonic' },
    { value: 'hopscotch', label: 'hopscotch' },
    { value: 'isotope', label: 'isotope' },
    { value: 'marrakesh', label: 'marrakesh' },
    { value: 'mocha', label: 'mocha' },
    { value: 'monokai', label: 'monokai' },
    { value: 'ocean', label: 'ocean' },
    { value: 'paraiso', label: 'paraiso' },
    { value: 'pop', label: 'pop' },
    { value: 'railscasts', label: 'railscasts' },
    { value: 'rjv-default', label: 'rjv-default' },
    { value: 'shapeshifter', label: 'shapeshifter' },
    {
        value: 'shapeshifter:inverted',
        label: 'shapeshifter:inverted'
    },
    { value: 'solarized', label: 'solarized' },
    { value: 'summerfruit', label: 'summerfruit' },
    {
        value: 'summerfruit:inverted',
        label: 'summerfruit:inverted'
    },
    { value: 'threezerotwofour', label: 'threezerotwofour' },
    { value: 'tomorrow', label: 'tomorrow' },
    { value: 'tube', label: 'tube' },
    { value: 'twilight', label: 'twilight' }
] */

function PreviewBox() {
	const getUserPreferencesState: T_UserPreferencesData = useRecoilValue(UserPreferencesStateData);
	/* const setUserPreferencesState: T_SetUserPreferencesStateData =
        useSetRecoilState(UserPreferencesStateData); */

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const getPreviewGeneratorData: any = useRecoilValue(PreviewGeneratorDataStateData);

	useEffect(() => {}, [getPreviewGeneratorData]);

	return (
		<div className="content__right">
			<div className="content__right-wrapper">
				<ReactJson
					src={getPreviewGeneratorData}
					theme={getUserPreferencesState.jsonTheme as ThemeKeys}
					style={{ backgroundColor: "transparent" }}
				/>
			</div>
		</div>
	);
}
export default PreviewBox;
