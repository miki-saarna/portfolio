import React, { useState } from "react";
import { Link } from 'react-scroll';
import MenuData from "./MenuData";
import githubLogo from "../images/github_logo.png"
import linkedInLogo from "../images/linkedin_logo.png"
import twitterLogo from "../images/twitter_logo.png";
import githubLogoWhite from "../images/github-brands.svg"
import linkedInLogoWhite from "../images/linkedin-brands.svg"
import twitterLogoWhite from "../images/twitter-brands.svg"
import AnimatedEllipse from "../utils/AnimatedEllipse";
import satellite from "../images/satellite.png";

export const Menu = () => {

    const [menuBar, setMenuBar] = useState(false);

    const showMenuBarHandler = () => setMenuBar(!menuBar);

    return (
        <>
            <button className={menuBar ? "exitMenuBtn" : "menuBtn"} onClick={showMenuBarHandler}></button>
            {/* <button className={menuBar ? "exitMenuBtn" : "menuBtn"} onClick={showMenuBarHandler}>{menuBar ? <MdIcons.MdClose /> : <GiIcons.GiHamburgerMenu />}</button> */}
                 <>
                    <nav className={menuBar ? "openMenu" : "closeMenu"}>
                    {/* <nav className={menuBar ? "openMenu active" : "closeMenu"}> */}
                        <ul>
                            {MenuData.map((item, index) => {
                                return (
                                    <li key={index} className="link" onClick={showMenuBarHandler}>
                                        {/* <Link to={item.path}>
                                            {item.title}
                                        </Link> */}
                                        <Link to={item.path} smooth duration={800} offset={item.path == 'about' ? -250 : 0} onClick={showMenuBarHandler}>
                                            {item.title}
                                        </Link>
                                    </li>
                                    )})
                            }
                        </ul>
                        <ul>
                            <li><a href="https://github.com/miki-saarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={githubLogo} width={26} /></a></li>
                            <li><a href="https://www.linkedin.com/in/mikito-saarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={linkedInLogo} width={26} /></a></li>
                            <li><a href="https://twitter.com/MikitoSaarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={twitterLogo} width={26} /></a></li>
                            {/* <li><a href="https://github.com/miki-saarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={githubLogoWhite} width={26} /></a></li>
                            <li><a href="https://www.linkedin.com/in/mikito-saarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={linkedInLogoWhite} width={26} /></a></li>
                            <li><a href="https://twitter.com/MikitoSaarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={twitterLogoWhite} width={26} /></a></li> */}
                        </ul>
                        <img className='scale-satellite' data-translate-x-speed="0.1" data-translate-y-speed="0.1" data-scale-speed=".0013" src={satellite} alt="" />
                    </nav>
                    <div className={menuBar ? "pageGradient" : null} onClick={menuBar ? showMenuBarHandler : null}></div>
                  </>
        </>
    )
}

export default Menu;