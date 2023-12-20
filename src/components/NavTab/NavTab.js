import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

export const NavTab = () => {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <HashLink
            to="#about-project"
            className="nav-tab__link link link_hover"
          >
            О проекте
          </HashLink>
        </li>
        <li className="nav-tab__list-item">
          <HashLink to="#techs" className="nav-tab__link link link_hover">
            Технологии
          </HashLink>
        </li>
        <li className="nav-tab__list-item">
          <HashLink to="#about-me" className="nav-tab__link link link_hover">
            Студент
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
