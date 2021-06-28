import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = ({ history, loginUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  /*Login*/
  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(userInfo);
    history.push("/");
  };

  /*Register*/
  const handleRegister = (event) => {
    event.preventDefault();
    if (verifyPassword()) {
      loginUser(userInfo);
      history.push("/notes");
    } else {
      alert("Your password do not match");
    }
  };

  const verifyPassword = () => {
    if (userInfo["password"] === userInfo["rewritten-password"]) {
      return true;
    }
    return false;
  };

  /*Change Form*/
  const handleSwitchLogin = () => {
    setIsLogin(!isLogin);
  };

  /*Input change*/
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  return (
    <>
      <Header />
      <div className="login">
        <section className="login-container">
          {isLogin ? (
            <LoginForm
              handleSubmit={handleLogin}
              handleSwitchLogin={handleSwitchLogin}
              handleChange={handleChange}
            />
          ) : (
            <RegisterForm
              handleSubmit={handleRegister}
              handleSwitchLogin={handleSwitchLogin}
              handleChange={handleChange}
            />
          )}
        </section>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
