import './SubmitButton.css';

export const SubmitButton = ({ title, isDisabled, type }) => {
  return (
    <>
      {type === 'login' ? (
        <span className="error">При авторизации произошла ошибка.</span>
      ) : (
        <span className="error">
          При регистрации пользователя произошла ошибка.
        </span>
      )}
      <button
        type="submit"
        className={`submit-button button_hover ${
          isDisabled ? 'submit-button_disabled' : ''
        }`}
        disabled={isDisabled}
      >
        {title}
      </button>
    </>
  );
};
