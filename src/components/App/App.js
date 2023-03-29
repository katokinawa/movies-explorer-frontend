import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRouteElement/ProtectedRouteElement";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import movies from "../../utils/movies";
import * as api from "../../utils/MainApi";
import * as BeatfilmMoviesApi from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const location = useLocation();
  const history = useNavigate();
  const isMainHeaderVisible = ["/"];
  const isOtherHeaderVisible = ["/movies", "/saved-movies", "/profile"];
  const isFooterVisible = ["/", "/movies", "/saved-movies"];

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      api
        .getUser()
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          history("/movies");
        })
        .catch((err) => err);
    }
  }, [history]);

  function handleRegister(data) {
    api
      .register(data)
      .then(() => {
        history("/movies");
      })
      .catch((err) => err);
  }

  function handeUpdateProfile(data) {
    api
      .updateProfile(data)
      .then(() => {
        history("/profile");
      })
      .catch((err) => err);
  }

  function handleLogin(data) {
    api
      .login(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history("/");
        }
      })
      .catch((err) => err);
  }

  function handleMovieLike(movies) {
    // // Снова проверяем, есть ли уже лайк на этой карточке
    // const isLiked = movies.likes.some((i) => i === currentUser._id);
    // // Отправляем запрос в API и получаем обновлённые данные карточки
    // api
    //   .like(card._id, !isLiked)
    //   .then((newCard) => {
    //     setCards((state) =>
    //       state.map((cardForLike) =>
    //         cardForLike._id === card._id ? newCard : cardForLike
    //       )
    //     );
    //   })
    //   .catch((err) => console.error(err));
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history("/signin");
  }

  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          {isMainHeaderVisible.includes(location.pathname) ? (
            <Header />
          ) : isOtherHeaderVisible.includes(location.pathname) ? (
            <Header loggedIn={loggedIn} />
          ) : (
            ""
          )}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Movies}
                  movies={movies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  movies={movies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  logout={handleLogout}
                  updateProfile={handeUpdateProfile}
                />
              }
            />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/signup"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          {isFooterVisible.includes(location.pathname) && <Footer />}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
