import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  const { pathname } = useLocation();
  const footerPath =
    pathname === '/movies' || pathname === '/' || pathname === '/saved-movies';

  if (!footerPath) {
    return null;
  }

  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <nav className="footer__nav">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links">
          <li className="footer__element">
            <Link
              to="https://practicum.yandex.ru"
              className="footer__link link link_hover"
              target="_blank"
              rel="noreferrer noopener"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__element">
            <Link
              to="https://github.com/GlebMilovanov"
              className="footer__link link link_hover"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
