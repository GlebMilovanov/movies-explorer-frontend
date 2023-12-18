import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { useState } from 'react';
import useMedia from '../../hooks/useMedia';

export const MoviesCardList = ({ movies }) => {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(max-width: 1279px)');
  const getInitialCount = () => {
    if (isMobile) return 5;
    if (isTablet) return 8;
    return 16;
  };

  const [count, setCount] = useState(getInitialCount());

  const getStepCount = () => {
    return isTablet ? 2 : 4;
  };

  const clickMore = () => {
    setCount(prevCount => prevCount + getStepCount());
  };

  const displayedMovies = movies.slice(0, count);

  return (
    <section className="gallery">
      <ul className="gallery__list">
        {displayedMovies.map(movie => (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            image={movie.image}
            trailer={movie.trailer}
            duration={movie.duration}
            saved={movie.saved}
          />
        ))}
      </ul>
      <button
        type="button"
        className={`gallery__more button_hover ${
          count >= movies.length && 'gallery__more_hidden'
        }`}
        onClick={clickMore}
      >
        Еще
      </button>
    </section>
  );
};
