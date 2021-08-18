import React, { useState } from "react";
import { Link } from "react-router-dom";

import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import { connect } from "react-redux";
import { loginUser } from "../actions";

import Layout from "../components/Layout";
import Input from "../components/Input";

const Login = ({ history, loginUser }) => {
  const [loginInfo, setLoginInfo] = useState({});
  const firebase = useFirebaseApp();
  const user = useUser();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not Found. Create a new account");
          break;
        default:
          break;
      }
    }
  };

  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.id]: event.target.value });
  };

  return (
    <Layout>
      <main className="login">
        <section className="login-container">
          <h2 className="login__title">Log In</h2>
          <form className="login__form" onSubmit={handleLogin}>
            <Input id="email" handleChange={handleChange} />
            <Input id="password" type="password" handleChange={handleChange} />
            <button className="login__button">Send</button>
          </form>
          <Link className="login__signup" to="/signup">
            Sign Up
          </Link>
        </section>
      </main>
    </Layout>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);

// const [newUser, setNewUser] = useState(false);
// const [userInfo, setUserInfo] = useState({});

// const firebase = useFirebaseApp();
// const user = useUser();

// Login
// const handleLogin = async (event) => {
//   event.preventDefault();
//   // await firebase
//   //   .auth()
//   //   .createUserWithEmailAndPassword(userInfo.email, userInfo.password);
//   console.log(user);
//   // loginUser(userInfo);
//   // history.push("/");
// };

// Register
// const handleRegister = (event) => {
//   event.preventDefault();
//   if (verifyPassword()) {
//     loginUser(userInfo);
//     history.push("/notes");
//   } else {
//     alert("Your password do not match");
//   }
// };

// const verifyPassword = () => {
//   if (userInfo["password"] === userInfo["rewritten-password"]) {
//     return true;
//   }
//   return false;
// };

// /*Change Form*/
// const handleSwitchLogin = () => {
//   setNewUser(!newUser);
// };

// /*Input change*/
// const handleChange = (event) => {
//   setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
// };
