import { Link } from 'react-router-dom';

import './Portfolio.css';

import { portfolioInfo } from '../../utils/constants';

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        {portfolioInfo.map((item, idx) => {
          return (
            <li key={idx} className="portfolio__element">
              <Link
                className="portfolio__link link_hover"
                to={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
                <span className="portfolio__icon">↗</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
