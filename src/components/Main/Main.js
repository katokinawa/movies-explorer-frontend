import "./Main.css";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



function Main() {
  return (
    <main className="content">
      <Header />
      <Profile />
      {/* <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Movies />
      <Footer /> */}
    </main>
  );
}

export default Main;
