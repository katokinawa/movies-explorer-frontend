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
  const [currentUser, setCurrentUser] = useState({});
  const [message, setMessage] = useState("");
  const [errorColor, setErrorColor] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // БЛОК С ЛОГИНОМ, РЕГИСТРАЦИЕЙ, РЕДАКТИРОВАНИЕМ ПРОФИЛЯ
  const isMainHeaderVisible = ["/"];
  const isOtherHeaderVisible = ["/movies", "/saved-movies", "/profile"];
  const isFooterVisible = ["/", "/movies", "/saved-movies"];

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
        setMessage("Что-то пошло не так...");
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
        setMessage("Что-то пошло не так...");
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
        setMessage("Что-то пошло не так...");
      });
  }

  function handleLogout() {
    localStorage.removeItem("moviesFiltered");
    localStorage.removeItem("movFilterDuration");
    localStorage.removeItem("searchValue");
    localStorage.removeItem("checkboxState");
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
                  user={currentUser}
                  element={Movies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  user={currentUser}
                  element={SavedMovies}
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
