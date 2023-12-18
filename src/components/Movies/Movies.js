import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';

export const Movies = ({ movies }) => {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </>
  );
};
