import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Link onClick={() => navigate(-1)} className="not-found__link link_hover">
        Назад
      </Link>
    </section>
  );
};
