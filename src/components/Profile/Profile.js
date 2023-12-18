import './Profile.css';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export const Profile = ({ setLoggedIn }) => {
  const [isSubmitVisible, setIsSubmitVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isError, setIsError] = useState(false);
  const { values, handleChange, errors, isValid, setValue, isInputValid } =
    useFormAndValidation();

  useEffect(() => {
    setValue('profileName', 'Виталий');
    setValue('profileEmail', 'pochta@yandex.ru');
  }, [setValue]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setIsError(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsSubmitVisible(isSubmitVisible => !isSubmitVisible);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <section className="profile">
      <h1 className="profile__greeting">Привет, Виталий!</h1>
      <form
        className="profile__form"
        name="profile"
        onSubmit={handleSubmit}
        isValid={isValid}
        noValidate
      >
        <>
          <label className="profile__input-label">
            <span className="profile__input-title">Имя</span>
            <input
              className={`profile__input ${
                isInputValid.name === undefined || isInputValid.name
                  ? ''
                  : 'profile__input_type_invalid'
              }`}
              type="text"
              name="profileName"
              placeholder="Имя"
              value={values.profileName}
              minLength={3}
              maxLength={30}
              required
              onChange={handleChange}
              disabled={!isEditing}
            />
          </label>
          <span className="profile__input-error">{errors.profileName}</span>
        </>
        <>
          <label className="profile__input-label">
            <span className="profile__input-title">E-mail</span>
            <input
              className={`profile__input ${
                isInputValid.email === undefined || isInputValid.email
                  ? ''
                  : 'profile__input_type_invalid'
              }`}
              type="email"
              name="profileEmail"
              placeholder="E-mail"
              value={values.profileEmail}
              minLength={3}
              required
              onChange={handleChange}
              disabled={!isEditing}
            />
          </label>
          <span className="profile__input-error">{errors.profileEmail}</span>
        </>
        {isSubmitVisible ? (
          <>
            <span
              className={`profile__error ${
                isError ? 'profile__error_visible' : ''
              } `}
            >
              При обновлении профиля произошла ошибка.
            </span>
            <button
              type="submit"
              className={`profile__submit-btn button button_hover ${
                isValid ? '' : 'profile__submit-btn_disabled'
              }`}
              disabled={!isValid}
            >
              Сохранить
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="profile__edit-btn button button_hover"
              onClick={handleEdit}
            >
              Редактировать
            </button>
            <Link
              to={'/'}
              onClick={handleLogout}
              className="profile__logout-link link link_hover"
            >
              Выйти из аккаунта
            </Link>
          </>
        )}
      </form>
    </section>
  );
};
