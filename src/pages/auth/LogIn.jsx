import React, { useState } from "react";
import { Link } from "react-router-dom";

import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { loginUser } from "../actions";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Loader from "../components/Loader";
import Notification from "../components/Notification";

const Login = ({ history, loginUser }) => {
  const [loginInfo, setLoginInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState("");
  const firebase = useFirebaseApp();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
      history.push("/");
    } catch (error) {
      setNotification(true);
      let code = error.code.slice(error.code.indexOf("/") + 1);
      while (code.indexOf("-") > 0) {
        code = code.replace("-", " ");
      }
      setMessage(code);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.id]: event.target.value });
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  return (
    <Layout>
      <main className="login">
        {loading ? (
          <Loader />
        ) : (
          <section className="login-container">
            <h2 className="login__title">Log In</h2>
            <form className="login__form" onSubmit={handleLogin}>
              <Input id="email" handleChange={handleChange} />
              <Input
                id="password"
                type="password"
                handleChange={handleChange}
              />
              <button className="login__button">Send</button>
            </form>
            <Link className="login__signup" to="/signup">
              Sign Up
            </Link>
          </section>
        )}
      </main>
      <Notification
        isOpen={notification}
        message={message}
        onClick={handleCloseNotification}
      />
    </Layout>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);

// const [newUser, setNewUser] = useState(false);
// const [userInfo, setUserInfo] = useState({});

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
