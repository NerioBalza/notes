import React from "react";

import Input from "./Input";

const RegisterForm = ({ handleSubmit, handleSwitchLogin, handleChange }) => {
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-form__title">Create an Account</h2>
      <Input id="email" handleChange={handleChange} />
      <Input id="password" type="password" handleChange={handleChange} />
      <Input
        id="rewritten-password"
        label="password"
        type="password"
        placeholder="Type your password again"
        handleChange={handleChange}
      />
      <button className="btn register-form__btn">Send</button>
      <p className="register-form__switch" onClick={handleSwitchLogin}>
        Login
      </p>
    </form>
  );
};

export default RegisterForm;
