import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { NotFound } from './NotFound/NotFound';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { Profile } from './Profile/Profile';

import { movies } from '../utils/constants';
import { Movies } from './Movies/Movies';
import { SavedMovies } from './SavedMovies/SavedMovies';
import { Main } from './Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Main name="home" />} />
        <Route
          path="/movies"
          element={<Main name="movies" movies={movies} />}
        />
        <Route
          path="/saved-movies"
          element={<Main name="savedMovies" movies={movies} />}
        />
        <Route
          path="/profile"
          element={<Main name="profile" setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Main name="signup" setRegistered={setLoggedIn} />}
        />
        <Route
          path="/signin"
          element={<Main name="signin" setLoggedIn={setLoggedIn} />}
        />
        <Route path="*" element={<Main name="notFound" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
