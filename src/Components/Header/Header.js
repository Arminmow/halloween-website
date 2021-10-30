import React , {useState} from 'react';
import {Link} from "react-router-dom";
import {Dropdown , DropdownButton , NavDropdown} from "react-bootstrap";
import 'boxicons/css/boxicons.min.css'
import Logo from '../../images/logo.png'
import NavImg from '../../images/nav-img.png'

function Header() {
    const html =document.getElementById('html');
    const [theme , setTheme] =useState(html.className)

    function showMenu(e) {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.add('show-menu')
    }

    function hideMenu() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu')
    }

    function scrollHeader() {
        const header = document.getElementById('header')
        if (this.scrollY >= 50) {
            header.classList.add('scroll-header')
        } else {
            header.classList.remove('scroll-header')
        }
    }

    window.addEventListener('scroll', scrollHeader);

    function changeTheme (e) {
        const html =document.getElementById('html');
        html.className = '';
        html.classList.add(e.target.name)
        setTheme(e.target.name)
    }

    return (
        <header className="header" id="header">

            <nav className="nav myContainer">

                <Link to="/" className="nav-logo">
                    <img src={Logo} alt="logo" className="nav-logo-img"/>
                    Halloween
                </Link>


                <div className="nav-menu" id="nav-menu">

                    <ul className="nav-list" id="menu">

                        <li className="nav-item">
                            <Link to="/" className="nav-link active-link" onClick={hideMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={hideMenu}>About</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/mini-games" className="nav-link" onClick={hideMenu}>Mini Games</Link>
                        </li>
                        <li className="nav-item">
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Theme"
                                menuVariant="light"
                            >
                                <NavDropdown.Item disabled={theme === 'skin-green'} name="skin-green" onClick={changeTheme}>Green Theme</NavDropdown.Item>
                                <NavDropdown.Item disabled={theme === 'skin-red'} name="skin-red" onClick={changeTheme}>Red Theme</NavDropdown.Item>
                                <NavDropdown.Item disabled={theme === 'skin-dark'} name="skin-dark" onClick={changeTheme}>Dark Theme</NavDropdown.Item>
                                <NavDropdown.Item disabled={theme === 'skin-blue'} name="skin-blue" onClick={changeTheme}>Blue Theme</NavDropdown.Item>
                                <NavDropdown.Item disabled={theme === 'skin-light'} name="skin-light" onClick={changeTheme}>Ligh Theme</NavDropdown.Item>
                            </NavDropdown>
                        </li>


                        <Link to="/changelog" className="button button-ghost">Changelog</Link>
                    </ul>

                    <div className="nav-close" id="nav-close">
                        <i className="bx bx-x" onClick={hideMenu}/>
                    </div>

                    <img src={NavImg} className="nav-img"/>

                </div>

                <div className="nav-toggle" id="nav-toggle" onClick={showMenu}>
                    <i className="bx bx-grid-alt"/>
                </div>

            </nav>

        </header>
    );
}

export default Header;
