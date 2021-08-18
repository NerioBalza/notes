import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Input from "../components/Input";

const SingUp = () => {
  const [signupInfo, setSignupInfo] = useState({});
  const handleSignUp = () => {
    verifyPassword();
  };

  const verifyPassword = () => {};

  const handleChange = (event) => {
    setSignupInfo({ ...signupInfo, [event.target.id]: event.target.value });
  };

  return (
    <Layout>
      <main className="signup">
        <section className="signup-container">
          <h2 className="signup__title">Sign Up</h2>
          <form className="signup__form" onSubmit={handleSignUp}>
            <Input id="email" handleChange={handleChange} />
            <Input id="password" type="password" handleChange={handleChange} />
            <Input
              id="password2"
              placeholder="Type your passoword again"
              label="confirm password"
              type="password"
              handleChange={handleChange}
            />
            <button className="signup__button">Send</button>
          </form>
          <Link className="signup__login" to="/login">
            Log In
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default SingUp;
