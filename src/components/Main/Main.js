import './Main.css';
import { movies } from '../../utils/constants';

import { Hero } from '../Hero/Hero';
import { NavTab } from '../NavTab/NavTab';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';
import { Movies } from '../Movies/Movies';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';

export const Main = ({ name, setLoggedIn }) => {
  return (
    <main className="main">
      {
        {
          home: (
            <>
              <Hero />
              <NavTab />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </>
          ),
          movies: (
            <>
              <Movies movies={movies} />
            </>
          ),
          savedMovies: (
            <>
              <Movies movies={movies} />
            </>
          ),
          signin: (
            <>
              <Login setLoggedIn={setLoggedIn} />
            </>
          ),
          signup: (
            <>
              <Register setLoggedIn={setLoggedIn} />
            </>
          ),
          profile: (
            <>
              <Profile setLoggedIn={setLoggedIn} />
            </>
          ),
          notFound: (
            <>
              <NotFound />
            </>
          ),
        }[name]
      }
    </main>
  );
};
