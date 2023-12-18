import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';

import './Header.css';

import logo from '../../images/logo-min.svg';
import { Navigation } from '../Navigation/Navigation';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = ({ loggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMedia('(min-width: 1280px)');
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const headerPath =
    pathname === '/movies' ||
    pathname === '/' ||
    pathname === '/saved-movies' ||
    pathname === '/profile';

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!headerPath) {
    return null;
  }

  const isMain = pathname === '/';

  return (
    <header className={`header ${isMain ? 'header_pink' : ''}`}>
      <Link to={'/'} className="header__logo-link link link_hover">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      {isDesktop || !loggedIn ? (
        <Navigation loggedIn={loggedIn} />
      ) : (
        <>
          <button
            type="button"
            onClick={handleMenuClick}
            className={`burger-button button button_hover ${
              isMenuOpen ? 'burger-button_active' : ''
            }`}
          />
          <BurgerMenu
            toggleMenu={handleMenuClick}
            isActive={isMenuOpen}
            loggedIn={loggedIn}
          />
        </>
      )}
    </header>
  );
};
