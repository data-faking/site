import React from 'react'
import './LandingPage.scss';
import DarkModeIcon from '../../assets/dark-mode.svg';

//TODO resize some heights
//TODO finish form and display
//TODO refactor everything into components
//TODO figure out why theres scroll bar (hint: its probably some 100vh error)
function LandingPage() {
    return (
        <>
            <div className='navbar'>
                <h1 className='navbar__header center'>Data Faking</h1>
                <button className='navbar__dark-mode-button center'>
                    <img src={DarkModeIcon} alt='Dark mode icon'></img>
                </button>
            </div>
            <div className="content">
                <div className='content__data-form'>form</div>
                <div className='content__data-display'>display</div>
            </div>
        </>
    )
}

export default LandingPage