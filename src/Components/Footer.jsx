import React from "react";

export default function Footer() {
    return (
        <>
            <footer>

                <img src="src/assets/images/logo.svg" alt="" />

                <div className="flex-Div">

                    <div className="features">
                        <h3>Features</h3>
                        <p>Link Shortening</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>
                    <div className="Resources">
                        <h3>Resources</h3>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                    <div className="Company">
                        <h3>Comhany</h3>
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>

                </div>
                <div className="iconDiv">
                    <img src="./src/assets/images/icon-facebook.svg" alt="fb" />
                    <img src="./src/assets/images/icon-twitter.svg" alt="twitter" />
                    <img src="./src/assets/images/icon-pinterest.svg" alt="pinterset"/>
                    <img src="./src/assets/images/icon-instagram.svg" alt="insta" />
                </div>
            </footer>
        </>
    )
}
