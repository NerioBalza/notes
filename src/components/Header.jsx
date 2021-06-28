import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SocialMedia from "./SocialMedia";
import { logoutUser } from "../actions";

const Header = ({ isLogin, logoutUser, history }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const darkModeKey = "notes-dark-mode";

  useEffect(() => {
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

  const logOut = () => {
    handleCloseMenu();
    logoutUser();
    history.push("/");
  };

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Notes</h1>
      </Link>

      <i className="icon-menu menu-btn" onClick={handleShowMenu}></i>

      <div className="menu" id="menu">
        <div className="menu-buttons">
          <div className="dark-mode" id="dark-mode" onClick={handleDarkMode}>
            <div className="dark-mode__icon">🌜</div>
            <div className="dark-mode__icon">🌞</div>
            <div className="dark-mode__button"></div>
          </div>
          <i
            className="icon-cross close-menu-btn"
            onClick={handleCloseMenu}
          ></i>
        </div>

        <hr />

        <div className="menu-links">
          <ul>
            {userLogin ? (
              <>
                <li>
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  <p onClick={logOut}>Log out</p>
                </li>
              </>
            ) : null}
          </ul>

          <SocialMedia />
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
