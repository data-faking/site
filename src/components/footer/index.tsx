import React from "react";
import "./Footer.scss";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__left-section">
                    <h1 className="footer__logo">LOGO</h1>
                    <div className="footer__copyright">
                        <h2>Copyright @ 2023</h2>
                    </div>
                </div>
                <div className="footer__right-section">
                    <div className="footer__link-section">
                        <h2>Features</h2>
                        <a href="google.com">Financial Reports</a>
                        <a href="google.com">Financial Reports</a>
                        <a href="google.com">Financial Reports</a>
                        <a href="google.com">Financial Reports</a>
                        <a href="google.com">Financial Reports</a>
                    </div>
                    <div className="footer__link-section">
                        <h2>Features</h2>
                        <a href="google.com">Financial Reports</a>
                        <a href="google.com">Financial Reports</a>
                        <a href="google.com">Financial Reports</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;