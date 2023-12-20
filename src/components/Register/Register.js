import './Register.css';

import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-min.svg';

export const Register = ({ setRegistered }) => {
  const navigate = useNavigate();
  const { values, errors, isInputValid, isValid, handleChange } =
    useFormAndValidation();

  const onRegister = evt => {
    evt.preventDefault();
    navigate('/signin');
    setRegistered(true);
  };

  return (
    <section className="register">
      <div className="register__header">
        <Link to={'/'} className="register__logo-link link link_hover">
          <img className="register__logo" src={logo} alt="Лого" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <Form name="register" onSubmit={onRegister}>
        <Input
          title="Имя"
          name="name"
          type="text"
          placeholder="Имя"
          value={values.name || ''}
          error={errors.name}
          onChange={handleChange}
          minLength="3"
          maxLength="30"
          isValid={isInputValid.name}
          required
        />
        <Input
          title="E-mail"
          name="email"
          type="email"
          placeholder="E-mail"
          value={values.email || ''}
          error={errors.email}
          onChange={handleChange}
          minLength="2"
          isValid={isInputValid.email}
          required
        />
        <Input
          title="Пароль"
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password || ''}
          error={errors.password}
          onChange={handleChange}
          minLength="8"
          maxLength="30"
          isValid={isInputValid.password}
          required
        />
        <SubmitButton title="Зарегистрироваться" isDisabled={!isValid} />
      </Form>
      <p className="register__text">
        Уже зарегистрированы?{' '}
        <Link to={'/signin'} className="register__link link link_hover">
          Войти
        </Link>
      </p>
    </section>
  );
};
