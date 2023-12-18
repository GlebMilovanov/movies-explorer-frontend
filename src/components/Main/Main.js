import { Hero } from '../Hero/Hero';
import { NavTab } from '../NavTab/NavTab';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';

export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};
