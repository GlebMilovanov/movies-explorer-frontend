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
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/saved-movies" element={<SavedMovies movies={movies} />} />
        <Route
          path="/profile"
          element={<Profile setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Register setRegistered={setLoggedIn} />}
        />
        <Route path="/signin" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
