import './SearchForm.css';

import search from '../../images/search.svg';

export const SearchForm = () => {
  return (
    <div className="search">
      <form className="search__form" name="searchForm">
        <div className="search__container">
          <img src={search} alt="Поиск" className="search__image" />
          <input
            type="text"
            name="search"
            className="search__input"
            placeholder="Фильм"
            required
          />
          <button type="submit" className="search__button button button_hover">
            Найти
          </button>
        </div>
        <label className="search__checkbox-label button button_hover">
          <input className="search__checkbox" type="checkbox" />
          <span className="search__checkbox-appearance" />
          <span className="search__checkbox-caption">Короткометражки</span>
        </label>
      </form>
      <div className="search__line" />
    </div>
  );
};
