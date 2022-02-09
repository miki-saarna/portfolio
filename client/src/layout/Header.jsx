import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export const Header = () => {

    return (
        <>
            <header>
                {/* might be able to delete classes 'link' and 'title' */}
                <div>
                <Link className="link title" to="/"><h1>Miki</h1></Link>
                <h2>Software Engineer</h2>
                </div>
                <Menu />
                {/* <nav>
                    <ul>
                        <li><Link className="link" to="/about">About</Link></li>
                        <li><Link className="link" to="/contact">Contact</Link></li>
                        <li><Link className="link" to="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav> */}
            </header>
        </>
    )
}

export default Header;
