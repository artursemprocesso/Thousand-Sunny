import React, { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Header({ currentPage }) {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="header">
            <div className="header__container">

                <Link className="header__logo" to="/"><img src="/logo.svg" alt="Logo" /></Link>

                <button className="header__menu-toggle" onClick={() => setToggleMenu(!toggleMenu)} />

                <div className={toggleMenu ? 'header__menu--aberto' : 'header__menu'}>
                    <button className="header__menu-toggle--close" onClick={() => setToggleMenu(!toggleMenu)} />

                    <Link className={currentPage === 1 ? 'header__menu__link' : 'header__menu__link--selected'} to="/">Home</Link>

                    <Link cclassName={currentPage === 2 ? 'header__menu__link' : 'header__menu__link--selected'} to="/destinations">Destinations</Link>

                    <Link cclassName={currentPage === 3 ? 'header__menu__link' : 'header__menu__link--selected'} to="/about">About</Link>

                    <Link cclassName={currentPage === 4 ? 'header__menu__link' : 'header__menu__link--selected'} to="/partner">Partner</Link>

                    <Link className="btn--outlined" to="/login">Login</Link>

                    <Link className="btn" to="/register">Register</Link>

                </div>
            </div>
        </div>
    )
}
