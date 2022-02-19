import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import './Header.css';

export const Header = (): ReactElement => {

    return (
        <>
            <header>
                {/* might be able to delete classes 'link' and 'title' */}
                <div>
                <Link className="link title" to="/"><h1>Miki</h1></Link>
                <h2>Software Engineer</h2>
                </div>
                <Menu />
            </header>
        </>
    )
}

export default Header;
