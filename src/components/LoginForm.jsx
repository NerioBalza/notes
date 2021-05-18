import React from "react";

import Input from "./Input";

const LoginForm = ({ handleSubmit, handleSwitchLogin, handleChange }) => {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">Login</h2>
      <Input id="email" handleChange={handleChange} />
      <Input id="password" type="password" handleChange={handleChange} />
      <button className="btn login-form__btn">Send</button>
      <p className="login-form__switch" onClick={handleSwitchLogin}>
        Create an Account
      </p>
    </form>
  );
};

export default LoginForm;
