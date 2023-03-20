import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

function Movies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <section className="movies_button-wrapper">
        <button className="movies_button" type="button">
          Ещё
        </button>
      </section>
      <Footer />
    </section>
  );
}

export default Movies;
