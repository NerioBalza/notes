import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

const Header = ({ isLogin, logoutUser, history }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const darkModeKey = "notes-dark-mode";

  useEffect(() => {
    handleCloseMenu();
    if (localStorage.getItem(darkModeKey) === null) {
      localStorage.setItem(darkModeKey, false);
      setDarkMode(false);
    } else {
      if (localStorage.getItem(darkModeKey) === "false") setDarkMode(false);
      else setDarkMode(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUserLogin(isLogin);
  }, [isLogin]);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  const handleDarkMode = () => {
    localStorage.setItem(darkModeKey, !darkMode);
    setDarkMode(!darkMode);
  };

  const handleShowMenu = () => {
    document.getElementById("menu").classList.add("menu-active");
    window.scrollTo(0, 0);
    document.body.classList.add("limit-body-height");
  };

  const handleCloseMenu = () => {
    document.getElementById("menu").classList.remove("menu-active");
    document.body.classList.remove("limit-body-height");
  };

  const handleLogOut = () => {
    handleCloseMenu();
    logoutUser();
    history.push("/");
  };

  return (
    <header className="header">
      <div className="header-title">
        <h1 className="header-title__text">
          <Link to="/">Notes</Link>
        </h1>
      </div>

      <i className="icon-menu menu-open" onClick={handleShowMenu}></i>
      <div className="menu" id="menu">
        <div className="menu__buttons">
          <div className="dark-mode" id="dark-mode" onClick={handleDarkMode}>
            <div className="dark-mode__icon">🌜</div>
            <div className="dark-mode__icon">🌞</div>
            <div className="dark-mode__button"></div>
          </div>
          <i className="icon-cross menu-close" onClick={handleCloseMenu}></i>
        </div>
        <hr />
        <nav className="menu__navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">GitHub</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="menu__logout">
          {userLogin ? <button onClick={handleLogOut}>Log out</button> : null}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
