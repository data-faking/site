import React from "react";
import "./HeroPage.scss";
import RightArrowIcon from '@src/assets/right-arrow.svg';
function HeroPage() {
    return (
        <div className="hero-page">
            <div className="hero-page__wrapper">
                <h1 className="hero-page__header">Datamanz is a better way to generate <span className="hero-page__header--accent">fake data</span></h1>
                <p className="hero-page__description">Generate data that is realistic and consistent no matter where it lives.</p>
                <button className="hero-page__button">Get Started<img alt="right arrow" src={RightArrowIcon}></img></button>
                <img className="hero-page__image" src="../../assets/test-hero.png" alt="product example"></img>
            </div>
        </div>
    )
}

export default HeroPage;