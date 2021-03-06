import { ReactElement, useState } from "react";
import { Link } from 'react-scroll';
import MenuData from "./MenuData";
import githubLogo from "../images/github_logo.png"
import linkedInLogo from "../images/linkedin_logo.png"
import twitterLogo from "../images/twitter_logo.png";
import AnimatedEllipse from "../utils/AnimatedEllipse";
import satellite from "../images/satellite.png";
import { MenuDataEntry } from "../utils/types";
import './Menu.css';

export const Menu = () => {
    // document.body.style.position = 'fixed';
    // document.body.style.position = 'static';

    const [menuBar, setMenuBar] = useState(false);
    const [animationId, setAnimationId] = useState(null);
    
    const showMenuBarHandler = () => {
        if (window.innerWidth < 820) {
            setMenuBar(!menuBar);
            // consider just setting to empty string instead of `static`
            document.body.style.position = menuBar ? 'static' : 'fixed';
        }
    }

    const menuItemsHTML = MenuData.map(({ title, path }, index) => {
    // const menuItemsHTML: React.ReactNode[] = MenuData.map(({ title, path }:MenuDataEntry, index) => {
        return (
            <li key={index} className="link" onClick={showMenuBarHandler}>
                {/* use this for navigation to a different page */}
                {/* <Link to={item.path}>
                    {item.title}
                </Link> */}
                <Link to={path} smooth duration={800} offset={path == 'about' ? -225 : 0} onClick={showMenuBarHandler}>
                    {title}
                </Link>
            </li>
            )})
    // useEffect(() => {
    //     if (menuBar) {
    //         setAnimationId(window.requestAnimationFrame(AnimatedEllipse));
    //     } else {
    //         window.cancelAnimationFrame(animationId)
    //     }
    // }, [menuBar])

    // const hey = window.requestAnimationFrame(AnimatedEllipse)

    return (
        <>
            <button className={menuBar ? "exitMenuBtn" : "menuBtn"} onClick={showMenuBarHandler}></button>
                 <>
                    <nav className={menuBar ? "openMenu" : "closeMenu"}>
                        <ul>
                            {menuItemsHTML}
                        </ul>
                        <ul>
                            <li><a href="https://github.com/miki-saarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={githubLogo} width={26} /></a></li>
                            <li><a href="https://www.linkedin.com/in/mikito-saarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={linkedInLogo} width={26} /></a></li>
                            <li><a href="https://twitter.com/MikitoSaarna" target="_blank" onClick={showMenuBarHandler}><img alt="" src={twitterLogo} width={26} /></a></li>
                        </ul>
                        <img className='menu-bar-satellite' data-translate-x-speed="0.1" data-translate-y-speed="0.1" data-scale-speed=".0013" src={satellite} alt="" />
                    </nav>
                    {menuBar ? <div className="pageOverlay" onClick={showMenuBarHandler} /> : null}
                  </>
        </>
    )
}

export default Menu;