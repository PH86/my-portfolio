import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/logo-02.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/my-portfolio' className='navbar-logo' onClick={closeMobileMenu}>
            Peter Hodgson
            <img className="navbar-img" src={Logo} alt="Logo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/my-portfolio' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/my-portfolio/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/my-portfolio/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to='/my-portfolio/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--primary'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;