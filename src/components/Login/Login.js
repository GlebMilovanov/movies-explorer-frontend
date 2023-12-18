import './Login.css';

import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-min.svg';

export const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const { values, errors, isInputValid, isValid, handleChange } =
    useFormAndValidation();

  const onLogin = evt => {
    evt.preventDefault();
    navigate('/movies');
    setLoggedIn(true);
  };

  return (
    <section className="login">
      <div className="login__header">
        <Link to={'/'} className="login__logo-link link_hover">
          <img className="login__logo" src={logo} alt="Лого" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <Form name="login" onSubmit={onLogin}>
        <Input
          title="E-mail"
          name="email"
          type="email"
          placeholder="E-mail"
          value={values.email || ''}
          error={errors.email}
          onChange={handleChange}
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
          isValid={isInputValid.password}
          required
        />
        <SubmitButton title="Войти" isDisabled={!isValid} type="login" />
      </Form>
      <p className="login__text">
        Ещё не зарегистрированы?{' '}
        <Link to={'/signup'} className="login__link link_hover">
          Регистрация
        </Link>
      </p>
    </section>
  );
};
