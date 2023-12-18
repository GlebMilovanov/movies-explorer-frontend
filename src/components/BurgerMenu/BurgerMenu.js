import './BurgerMenu.css';

import { Navigation } from '../Navigation/Navigation';

export const BurgerMenu = ({ isActive, toggleMenu, loggedIn }) => {
  return (
    <div
      className={`burger-menu ${isActive ? 'burger-menu_active' : ''}`}
      onClick={toggleMenu}
    >
      <div className="burger-menu__content" onClick={e => e.stopPropagation()}>
        <Navigation loggedIn={loggedIn} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};
