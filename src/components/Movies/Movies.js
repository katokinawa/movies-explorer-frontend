import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <section className="movies">
      <Header isLoggedIn={!props.isLoggedIn} />
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
