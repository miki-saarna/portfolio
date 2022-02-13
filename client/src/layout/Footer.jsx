import React, { useState } from "react";
import { animateScroll as scroll } from 'react-scroll';
import githubLogo from "../images/github_logo.png"
import linkedInLogo from "../images/linkedin_logo.png"
import twitterLogo from "../images/twitter_logo.png";
import githubLogoWhite from "../images/github-brands.svg"
import linkedInLogoWhite from "../images/linkedin-brands.svg"
import twitterLogoWhite from "../images/twitter-brands.svg"
import './Footer.css';


const Footer = () => {


    return (
        <footer>
            <div>
                <a href="https://github.com/miki-saarna" target="_blank"><img src={githubLogo} /></a>
                <a href="https://www.linkedin.com/in/mikito-saarna" target="_blank"><img alt="" src={linkedInLogo} /></a>
                <a href="https://twitter.com/MikitoSaarna" target="_blank"><img alt="" src={twitterLogo} /></a>
            </div>
            <a onClick={(() => scroll.scrollToTop())}><h2>Miki</h2></a>
            {/* <a href="https://github.com/miki-saarna" target="_blank"><img src={githubLogoWhite} /></a>
            <a href="https://www.linkedin.com/in/mikito-saarna" target="_blank"><img alt="" src={linkedInLogoWhite} /></a>
            <a href="https://twitter.com/MikitoSaarna" target="_blank"><img alt="" src={twitterLogoWhite} /></a> */}
        </footer>
    )
}

export default Footer