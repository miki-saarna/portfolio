import React, { useState } from "react";
import { Link } from "react-router-dom";
import githubLogo from "../images/github_logo.png"
import linkedInLogo from "../images/linkedin_logo.png"
import twitterLogo from "../images/twitter_logo.png";

const Footer = () => {


    return (
        <footer>
            <a href="https://github.com/miki-saarna" target="_blank"><img alt="" src={githubLogo} width={26} /></a>
            <a href="https://www.linkedin.com/in/mikito-saarna" target="_blank"><img alt="" src={linkedInLogo} width={26} /></a>
            <a href="https://twitter.com/MikitoSaarna" target="_blank"><img alt="" src={twitterLogo} width={26} /></a>
        </footer>
    )
}

export default Footer