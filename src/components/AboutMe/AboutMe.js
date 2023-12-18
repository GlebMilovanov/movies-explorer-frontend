import './AboutMe.css';

import { Link } from 'react-router-dom';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import portfolioPic from '../../images/profile-pic.png';

export const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <SectionTitle>Студент</SectionTitle>
      <div className="about-me__info">
        <div className="about-me__container">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании
            &laquo;СКБ Контур&raquo;. После того, как прошёл курс по
            веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и ушёл
            с постоянной работы.
          </p>
          <Link
            to="https://github.com/GlebMilovanov"
            className="about-me__link link_hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
        <img
          className="about-me__photo"
          src={portfolioPic}
          alt="Фото студента"
        />
      </div>
    </section>
  );
};
