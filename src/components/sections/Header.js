import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header id='header' className='header'>
            <div className='header-logo'>
                <i className='fa-solid fa-code'></i>
                <p>Jeff Davis</p>
            </div>

            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className={isMenuOpen ? 'open' : ''}>
                    <li className='nav-item'>
                        <Link
                            to='/'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-link'
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-link'
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-link'
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-link'
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Hamburger Menu */}
            <div className='header-burger' onClick={toggleMenu}>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
        </header>
    )
};

export default Header;