import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
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
