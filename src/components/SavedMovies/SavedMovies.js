import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';

export const SavedMovies = ({ movies }) => {
  const savedMovies = movies.filter(movie => movie.saved);
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </>
  );
};
