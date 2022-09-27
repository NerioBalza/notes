import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleToggleMenu = () => {
    document.getElementById("menu-button").classList.toggle("active");
    document.getElementById("menu").classList.toggle("active");
  };

  const handleRemoveMenu = () => {
    document.getElementById("menu-button").classList.remove("active");
    document.getElementById("menu").classList.remove("active");
  };

  const handleResizeWindow = () => {
    if (window.innerWidth > 768) {
      handleRemoveMenu();
    }
  };

  useEffect(() => {
    window.onresize = handleResizeWindow;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">Notes</h1>

      <button
        className="burger-button"
        id="menu-button"
        onClick={handleToggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <nav className="header__navbar" id="menu">
        <ul className="list">
          <li className="list__link">
            <Link className="list__link--archor" to="/">
              Home
            </Link>
          </li>
          <li className="list__link">
            <Link className="list__link--archor" to="/">
              About
            </Link>
          </li>
          <li className="list__link">
            <Link className="list__link--archor" to="/">
              Sign in
            </Link>
          </li>
          <li className="list__link">
            <Link className="list__link--archor" to="/">
              Sing up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { logoutUser } from "../actions";
// import { useFirebaseApp, useUser } from "reactfire";

// const Header = ({ isLogin, logoutUser, history }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const darkModeKey = "notes-dark-mode";
//   const firebase = useFirebaseApp();
//   const userData = useUser().data;

//   useEffect(() => {
//     handleCloseMenu();
//     if (localStorage.getItem(darkModeKey) === null) {
//       localStorage.setItem(darkModeKey, false);
//       setDarkMode(false);
//     } else {
//       if (localStorage.getItem(darkModeKey) === "false") setDarkMode(false);
//       else setDarkMode(true);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     darkMode
//       ? document.body.classList.add("dark")
//       : document.body.classList.remove("dark");
//   }, [darkMode]);

//   const handleDarkMode = () => {
//     localStorage.setItem(darkModeKey, !darkMode);
//     setDarkMode(!darkMode);
//   };

//   const handleShowMenu = () => {
//     document.getElementById("menu").classList.add("menu-active");
//     window.scrollTo(0, 0);
//     document.body.classList.add("limit-body-height");
//   };

//   const handleCloseMenu = () => {
//     document.getElementById("menu").classList.remove("menu-active");
//     document.body.classList.remove("limit-body-height");
//   };

//   const handleLogOut = () => {
//     handleCloseMenu();
//     firebase
//       .auth()
//       .signOut()
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <header className="header">
//       <div className="header-title">
//         <h1 className="header-title__text">
//           <Link to="/">Notes</Link>
//         </h1>
//       </div>

//       <i className="icon-menu menu-open" onClick={handleShowMenu}></i>
//       <div className="menu" id="menu">
//         <div className="menu__buttons">
//           <div className="dark-mode" id="dark-mode" onClick={handleDarkMode}>
//             <div className="dark-mode__icon">🌜</div>
//             <div className="dark-mode__icon">🌞</div>
//             <div className="dark-mode__button"></div>
//           </div>
//           <i className="icon-cross menu-close" onClick={handleCloseMenu}></i>
//         </div>
//         <hr />
//         <nav className="menu__navbar">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/">About</Link>
//             </li>
//             <li>
//               <Link to="/">GitHub</Link>
//             </li>
//           </ul>
//         </nav>
//         <hr />
//         <div className="menu__logout">
//           {userData && <button onClick={handleLogOut}>Log out</button>}
//         </div>
//       </div>
//     </header>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     isLogin: state.notes,
//   };
// };

// const mapDispatchToProps = {
//   logoutUser,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
