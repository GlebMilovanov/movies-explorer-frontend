import './MoviesCard.css';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import savedIcon from '../../images/saved-icon.svg';
import deleteIcon from '../../images/delete-icon.svg';

export const MoviesCard = ({ name, duration, image, trailer, saved }) => {
  const { pathname } = useLocation();
  const [savedCard, setSavedCard] = useState(saved);

  const convertTime = minutes => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours === 0
      ? `${mins}м`
      : mins === 0
        ? `${hours}ч`
        : `${hours}ч ${mins}м`;
  };
  const time = convertTime(duration);

  const getButtonType = () => {
    if (pathname === '/saved-movies') {
      return 'delete';
    }
    if (savedCard) {
      return 'saved';
    }
    return 'standard';
  };
  const buttonType = getButtonType();

  const handleSaveClick = event => {
    event.preventDefault();
    event.stopPropagation();
    console.log('saved');
    setSavedCard(true);
  };

  const handleDeleteClick = event => {
    event.preventDefault();
    event.stopPropagation();
    console.log('deleted');
    setSavedCard(false);
  };

  return (
    <li className="movie">
      <a
        href={trailer}
        target="_blank"
        rel="noreferrer noopener"
        className="movie__link"
      >
        <img src={image} alt={name} className="movie__image" />
        {
          {
            standard: (
              <button
                type="button"
                className="movie__button movie__button_type_save button_hover"
                onClick={handleSaveClick}
              >
                Сохранить
              </button>
            ),
            saved: (
              <button
                type="button"
                className="movie__button movie__button_type_saved button_hover"
                onClick={handleDeleteClick}
              >
                <img src={savedIcon} alt="Сохранен" className='movie__saved-icon'/>
              </button>
            ),
            delete: (
              <button
                type="button"
                className="movie__button movie__button_type_delete button_hover"
                onClick={handleDeleteClick}
              >
                <img src={deleteIcon} alt="Удалить" className='movie__delete-icon'/>
              </button>
            ),
          }[buttonType]
        }
      </a>
      <div className="movie__info">
        <h2 className="movie__title">{name}</h2>
        <p className="movie__duration">{time}</p>
      </div>
    </li>
  );
};
