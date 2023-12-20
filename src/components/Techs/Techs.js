import './Techs.css';
import { technologies } from '../../utils/constants';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const Techs = () => {
  return (
    <section className="techs" id="techs">
      <SectionTitle>Технологии</SectionTitle>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        {technologies.map((tech, idx) => {
          return (
            <li key={idx} className="techs__technology">
              {tech}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
