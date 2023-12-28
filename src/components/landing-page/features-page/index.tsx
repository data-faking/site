import React from "react";
import FeaturesItem from "../features-item";
import "./FeaturesPage.scss";
import ServerIcon from "@src/assets/server-icon.svg";
function FeaturesPage() {
    return (
        <div className="features-page">
            <div className="features-page__wrapper">
                <h1 className="features-page__header">Generate your <span className="features-page__header--accent">testing data</span> automatically</h1>
                <div className="features-page__bento-grid">
                    <FeaturesItem cName="item0" header="Built for your needs" description="Generate data that is realistic and consistent no matter where it lives." imageSrc={ServerIcon} />
                    <FeaturesItem cName="item1" header="Built for your needs" description="Generate data that is realistic and consistent no matter where it lives." imageSrc={ServerIcon} />
                    <FeaturesItem cName="item2" header="Built for your needs" description="Generate data that is realistic and consistent no matter where it lives." imageSrc={ServerIcon} />
                    <FeaturesItem cName="item3" header="Built for your needs" description="Generate data that is realistic and consistent no matter where it lives." imageSrc={ServerIcon} />
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage;