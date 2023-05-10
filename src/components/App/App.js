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
import * as api from "../../utils/MainApi";

function App() {
  // Функциональные константы
  const history = useNavigate();
  const location = useLocation();

  // Хуки
  const [checked, setChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [message, setMessage] = useState("");
  const [errorColor, setErrorColor] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [liked, setLikedMovies] = useState([]);
  const [moviesListNumber, setMoviesListNumber] = useState(Number());
  const [addMore, setAddMore] = useState(Number());

  // БЛОК С ЛОГИНОМ, РЕГИСТРАЦИЕЙ, РЕДАКТИРОВАНИЕМ ПРОФИЛЯ
  const isMainHeaderVisible = ["/"];
  const isOtherHeaderVisible = [
    "/movies",
    "/saved-movies",
    "/profile",
    `${loggedIn && location.pathname === "/" ? "/" : ""}`,
  ];
  const isFooterVisible = ["/", "/movies", "/saved-movies"];

  function haandleResize() {
    if (window.innerWidth < 480) {
      setAddMore(5);
      setMoviesListNumber(5);
    } else if (window.innerWidth < 768) {
      setAddMore(7);
      setMoviesListNumber(7);
    } else {
      setAddMore(7);
      setMoviesListNumber(7);
    }
  }

  let timeOutHandler;

  function onResize() {
    clearTimeout(timeOutHandler);
    timeOutHandler = setTimeout(haandleResize, 1000);
  }

  useEffect(() => {
    checkToken();
    window.addEventListener("resize", onResize);
    haandleResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      api
        .getUser()
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          history(location.pathname);
        })
        .catch((err) => err);
    }
  }

  function handleRegister(data) {
    api
      .register(data)
      .then(() => {
        handleLogin(data);
      })
      .catch(() => {
        setErrorColor(true);
        setMessage("Некорректные/используемые данные для регистрации");
      });
  }

  function handeUpdateProfile(data) {
    api
      .updateProfile(data)
      .then(() => {
        setMessage("Данные обновлены.");
        setTimeout(() => {
          setErrorColor(false);
          setMessage("");
        }, 2000);
      })
      .catch(() => {
        setErrorColor(true);
        setMessage("Что-то не так с сервером...");
      });
  }

  function handleLogin(data) {
    api
      .login(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          setErrorColor(false);
          setMessage("Успешный вход!");
          setTimeout(() => {
            history("/movies");
            setMessage("");
          }, 1000);
        }
      })
      .catch(() => {
        setErrorColor(true);
        setMessage("Неверный логин или пароль");
      });
  }

  function handleLike(movie) {
    return api
      .likeMovie(movie)
      .then((res) => {
        setLikedMovies([...liked, res]);
      })
      .catch(() => {
        throw(new Error("Что-то пошло не так..."));
      });
  }

  function handleDislike(movieForDelete) {
    const { movieId } = movieForDelete;
    return Promise.resolve(liked.find((movies) => movies.movieId === movieId))
      .then((res) => {
        if (res !== undefined && res._id) {
          return res._id;
        } else {
          throw(new Error("Что-то пошло не так..."));
        }
      })
      .then((res) => {
        return api.dislikeMovie(res);
      })
      .then((res) => {
        api.getUserMovie().then((likeMovies) => {
          setLikedMovies(likeMovies);
        });
      })
      .catch(() => {
        throw(new Error("Что-то пошло не так..."));
      });
  }

  function handleLogout() {
    localStorage.clear();
    api.deleteToken();
    localStorage.removeItem("jwt");
    history("/signin");
  }
  // Разметка
  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          {isMainHeaderVisible.includes(location.pathname) ? (
            <Header loggedIn={loggedIn} />
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
                  user={currentUser}
                  liked={liked}
                  moviesListNumber={moviesListNumber}
                  setLikedMovies={setLikedMovies}
                  addMore={addMore}
                  element={Movies}
                  setChecked={setChecked}
                  checked={checked}
                  setMoviesListNumber={setMoviesListNumber}
                  onLikeMovies={handleLike}
                  onDislikeMovies={handleDislike}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  user={currentUser}
                  liked={liked}
                  setLikedMovies={setLikedMovies}
                  setAddMore={setAddMore}
                  onLikeMovies={handleLike}
                  onDislikeMovies={handleDislike}
                  element={SavedMovies}
                  setChecked={setChecked}
                  checked={checked}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  user={currentUser}
                  loggedIn={loggedIn}
                  message={message}
                  errorColor={errorColor}
                  logout={handleLogout}
                  updateProfile={handeUpdateProfile}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  message={message}
                  setMessage={setMessage}
                  errorColor={errorColor}
                  onLogin={handleLogin}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  message={message}
                  setMessage={setMessage}
                  errorColor={errorColor}
                  onRegister={handleRegister}
                />
              }
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
