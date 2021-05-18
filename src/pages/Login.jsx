import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = ({ history, user, loginUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (user.email) history.push("/notes");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*Login*/
  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(userInfo);
    history.push("/notes");
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
  );
};

const mapDispatchToProps = {
  loginUser,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
