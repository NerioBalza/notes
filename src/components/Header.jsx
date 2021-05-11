import React from "react";

const Header = () => {
  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="header">
      <h1 className="header__title">Notes</h1>
      <div className="dark-mode" id="dark-mode" onClick={handleDarkMode}>
        <div className="dark-mode__button"></div>
      </div>
    </header>
  );
};

export default Header;
