import React from "react";
import logo from "../../logo.jpg";
import s from './Header.module.css';

const Header = () => (
    <div className={s.header_wrapper}>
        <header className={s.header}>
            <img src={logo} alt='logo'/>
        </header>
    </div>
);

export default Header;