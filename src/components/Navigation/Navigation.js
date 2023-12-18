import './Navigation.css';

import { useLocation, Link } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';

import profilePink from '../../images/profile-min.svg';
import profileBlack from '../../images/profile-min-black.svg';

export const Navigation = ({ loggedIn, toggleMenu }) => {
  const { pathname } = useLocation();
  const isNotDesktop = useMedia('(max-width: 1279px)');

  const isMainPage = pathname === '/';
  const isMoviesPage = pathname === '/movies';
  const isSavedMoviesPage = pathname === '/saved-movies';
  return (
    <nav className={`header__nav ${loggedIn ? 'burger' : ''}`}>
      {!loggedIn ? (
        <>
          <Link
            to={'/signup'}
            className="header__signup link_hover"
            onClick={toggleMenu}
          >
            Регистрация
          </Link>
          <Link
            to={'/signin'}
            className="header__signin link_hover"
            onClick={toggleMenu}
          >
            Вход
          </Link>
        </>
      ) : (
        <>
          <ul className="header__link-container">
            {isNotDesktop && (
              <li>
                <Link
                  to={'/'}
                  className={`header__link link_hover ${
                    isMainPage ? 'header__link_active' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  Главная
                </Link>
              </li>
            )}
            <li>
              <Link
                to={'/movies'}
                className={`header__link link_hover ${
                  isMoviesPage ? 'header__link_active' : ''
                }`}
                onClick={toggleMenu}
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                to={'/saved-movies'}
                className={`header__link link_hover ${
                  isSavedMoviesPage ? 'header__link_active' : ''
                }`}
                onClick={toggleMenu}
              >
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <Link
            to={'/profile'}
            className="header__profile-link link_hover"
            onClick={toggleMenu}
          >
            Аккаунт
            <div
              className={`header__profile-container ${
                isMainPage && !isNotDesktop
                  ? 'header__profile-container_black'
                  : 'header__profile-container_grey'
              }`}
            >
              <img
                src={isMainPage && !isNotDesktop ? profilePink : profileBlack}
                alt="Профиль"
                className="header__profile"
              />
            </div>
          </Link>
        </>
      )}
    </nav>
  );
};
