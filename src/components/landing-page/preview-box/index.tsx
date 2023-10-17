import React from "react";
//import "./LandingPage.scss";
import ReactJson, { ThemeKeys, ThemeObject } from 'react-json-view';


import {
    useRecoilValue,
    //useSetRecoilState,
    // useSetRecoilState
} from "recoil";
import {
    T_UserPreferencesData,
    //T_SetUserPreferencesStateData,
    UserPreferencesStateData
} from "@src/store/UserPreferencesAtom";

//TODO resize some heights
//TODO finish form and display
//TODO refactor everything into components
//TODO figure out why theres scroll bar (hint: its probably some 100vh error)
//TODO incorporate different button states and variants from figma
//TODO reactbeautifuldnd for drag and drop features
//TODO spacing on input row is not correct
//having a hard time seeing with light mode, added borders for sanity

//TODO need some help figuring how to cause a rerender when someone switched themes
const DummyData = [
    {
        id: 1,
        first_name: "Hadley",
        last_name: "Thorrington",
        email: "hthorrington0@sfgate.com",
        gender: "Male",
        ip_address: "88.1.4.109",
    },
    {
        id: 2,
        first_name: "Ruggiero",
        last_name: "Cruickshanks",
        email: "rcruickshanks1@reverbnation.com",
        gender: "Male",
        ip_address: "129.16.119.144",
    },
    {
        id: 3,
        first_name: "Corty",
        last_name: "Nappin",
        email: "cnappin2@canalblog.com",
        gender: "Male",
        ip_address: "78.137.32.251",
    },
    {
        id: 4,
        first_name: "Ashely",
        last_name: "Spirit",
        email: "aspirit3@google.de",
        gender: "Female",
        ip_address: "59.255.154.122",
    },
    {
        id: 5,
        first_name: "Janenna",
        last_name: "Saket",
        email: "jsaket4@feedburner.com",
        gender: "Female",
        ip_address: "248.235.23.165",
    },
    {
        id: 6,
        first_name: "Ethelin",
        last_name: "Miell",
        email: "emiell5@businesswire.com",
        gender: "Genderfluid",
        ip_address: "66.58.105.77",
    },
    {
        id: 7,
        first_name: "Clemens",
        last_name: "Pye",
        email: "cpye6@bbb.org",
        gender: "Male",
        ip_address: "185.85.194.72",
    },
    {
        id: 8,
        first_name: "Shem",
        last_name: "Lamble",
        email: "slamble7@cargocollective.com",
        gender: "Male",
        ip_address: "190.98.92.120",
    },
    {
        id: 9,
        first_name: "Andriana",
        last_name: "Petrashov",
        email: "apetrashov8@ucoz.com",
        gender: "Female",
        ip_address: "26.171.10.156",
    },
    {
        id: 10,
        first_name: "Klarrisa",
        last_name: "Queyos",
        email: "kqueyos9@yale.edu",
        gender: "Female",
        ip_address: "125.79.146.43",
    },
];

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

    return (
        <div className="content__right">
            <div className="content__right-wrapper">
                <ReactJson src={DummyData} theme={getUserPreferencesState.jsonTheme as ThemeKeys | ThemeObject | undefined} style={{ backgroundColor: "transparent" }} />
            </div>
        </div>
    );
}
export default PreviewBox;
