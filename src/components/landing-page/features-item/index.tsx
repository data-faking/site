import React from "react";
import "./FeaturesItem.scss";
export interface FeaturesItemProps {
    header: string,
    description: string,
    imageSrc: string,
    cName: string,
}
function FeaturesItem({ header, description, imageSrc, cName }: FeaturesItemProps) {

    return (
        <div className={`features-item ${cName}`}>
            <div className="features-item__wrapper">
                <div>
                    <img className="features_item__image" alt="feature" src={imageSrc}></img>
                </div>
                <h1 className="features_item__header">{header}</h1>
                <p className="features_item__description">{description}</p>
            </div>
        </div>
    )
}

export default FeaturesItem;