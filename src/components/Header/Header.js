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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!headerPath) {
    return null;
  }

  const isMainPage = pathname === '/';

  let headerClass = 'header';

  if (scrolled && isMainPage) {
    headerClass += ' header-scrolled-main';
  } else if (scrolled) {
    headerClass += ' header-scrolled';
  }

  return (
    <header className={headerClass}>
      <Link to={'/'} className="header__logo-link link_hover">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      {isDesktop || !loggedIn ? (
        <Navigation loggedIn={loggedIn} />
      ) : (
        <>
          <button
            type="button"
            onClick={handleMenuClick}
            className={`burger-button button_hover ${
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
