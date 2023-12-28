/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./LandingPage.scss";

import GeneratorBox from "./generator-box";
import PreviewBox from "./preview-box";
import RightArrowIcon from "../../assets/right-arrow.svg";
import FeaturesPage from "./features-page";
import HeroPage from "./hero-page";
//TODO resize some heights
//TODO finish form and display
//TODO refactor everything into components
//TODO figure out why theres scroll bar (hint: its probably some 100vh error)
//TODO incorporate different button states and variants from figma
//TODO reactbeautifuldnd for drag and drop features
//TODO spacing on input row is not correct
//having a hard time seeing with light mode, added borders for sanity

// const DummyData = [
// 	{
// 		id: 1,
// 		first_name: "Hadley",
// 		last_name: "Thorrington",
// 		email: "hthorrington0@sfgate.com",
// 		gender: "Male",
// 		ip_address: "88.1.4.109",
// 	},
// 	{
// 		id: 2,
// 		first_name: "Ruggiero",
// 		last_name: "Cruickshanks",
// 		email: "rcruickshanks1@reverbnation.com",
// 		gender: "Male",
// 		ip_address: "129.16.119.144",
// 	},
// 	{
// 		id: 3,
// 		first_name: "Corty",
// 		last_name: "Nappin",
// 		email: "cnappin2@canalblog.com",
// 		gender: "Male",
// 		ip_address: "78.137.32.251",
// 	},
// 	{
// 		id: 4,
// 		first_name: "Ashely",
// 		last_name: "Spirit",
// 		email: "aspirit3@google.de",
// 		gender: "Female",
// 		ip_address: "59.255.154.122",
// 	},
// 	{
// 		id: 5,
// 		first_name: "Janenna",
// 		last_name: "Saket",
// 		email: "jsaket4@feedburner.com",
// 		gender: "Female",
// 		ip_address: "248.235.23.165",
// 	},
// 	{
// 		id: 6,
// 		first_name: "Ethelin",
// 		last_name: "Miell",
// 		email: "emiell5@businesswire.com",
// 		gender: "Genderfluid",
// 		ip_address: "66.58.105.77",
// 	},
// 	{
// 		id: 7,
// 		first_name: "Clemens",
// 		last_name: "Pye",
// 		email: "cpye6@bbb.org",
// 		gender: "Male",
// 		ip_address: "185.85.194.72",
// 	},
// 	{
// 		id: 8,
// 		first_name: "Shem",
// 		last_name: "Lamble",
// 		email: "slamble7@cargocollective.com",
// 		gender: "Male",
// 		ip_address: "190.98.92.120",
// 	},
// 	{
// 		id: 9,
// 		first_name: "Andriana",
// 		last_name: "Petrashov",
// 		email: "apetrashov8@ucoz.com",
// 		gender: "Female",
// 		ip_address: "26.171.10.156",
// 	},
// 	{
// 		id: 10,
// 		first_name: "Klarrisa",
// 		last_name: "Queyos",
// 		email: "kqueyos9@yale.edu",
// 		gender: "Female",
// 		ip_address: "125.79.146.43",
// 	},
// ];

//TODO fade image at the bottom
//TODO typography
//TODO footer
function LandingPage() {
    return (
        <>
            <HeroPage />
            <FeaturesPage />
            {/* <div className="content">
                <div className="content__left">
                    <GeneratorBox />
                </div>

                <PreviewBox />
            </div> */}
        </>
    );
}
export default LandingPage;
