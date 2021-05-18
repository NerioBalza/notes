import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeKey = "notes-dark-mode";

  useEffect(() => {
    if (localStorage.getItem(darkModeKey) === null) {
      localStorage.setItem(darkModeKey, false);
      setDarkMode(false);
    } else {
      if (localStorage.getItem(darkModeKey) === "false") setDarkMode(false);
      else setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  const handleDarkMode = () => {
    localStorage.setItem(darkModeKey, !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Notes</h1>
      </Link>
      <div>
        <div className="dark-mode" id="dark-mode" onClick={handleDarkMode}>
          <div className="dark-mode__icon">🌜</div>
          <div className="dark-mode__icon">🌞</div>
          <div className="dark-mode__button"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
