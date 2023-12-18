import './Input.css';

export const Input = ({ onChange, error, title, isValid, ...rest }) => {
  return (
    <label className="input__label">
      <span className="input__title">{title}</span>
      <input
        placeholder=""
        className={`input ${isValid ? '' : 'input_type_invalid'}`}
        onChange={onChange}
        {...rest}
      />
      <span className="input__error">{error}</span>
    </label>
  );
};
