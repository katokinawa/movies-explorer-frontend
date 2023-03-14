import "./Main.css";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Movies from '../Movies/Movies'

function Main() {
  return (
    <main className="content">
      {/* <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio /> */}
      <Movies />
    </main>
  );
}

export default Main;
