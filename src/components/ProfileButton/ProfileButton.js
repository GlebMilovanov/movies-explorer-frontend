import './ProfileButton.css';
import profile from '../../images/profile-min.svg';
import profileMovies from '../../images/profile-movies-min.svg';
import { Link, useLocation } from 'react-router-dom';

export const ProfileButton = () => {
  const { location } = useLocation();

  return (
    <Link to={'/profile'} className="header__profile-link">
      Аккаунт
      <div className="header__profile-container">
        <img
          src={location === '/' ? profile : profileMovies}
          alt="Профиль"
          className="header__profile"
        />
      </div>
    </Link>
  );
};
