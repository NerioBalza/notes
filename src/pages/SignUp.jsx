import React, { useState } from "react";
import { Link } from "react-router-dom";

import "firebase/auth";
import { useFirebaseApp } from "reactfire";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Loader from "../components/Loader";
import Notification from "../components/Notification";

const SingUp = ({ history }) => {
  const [signupInfo, setSignupInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState("");
  const firebase = useFirebaseApp();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (verifyPassword()) {
      try {
        setLoading(true);
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            signupInfo.email,
            signupInfo.password
          );
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
    } else {
      setNotification(true);
      setMessage("Your password don't match");
    }
  };

  const verifyPassword = () => {
    return signupInfo.password === signupInfo.password2 ? true : false;
  };

  const handleChange = (event) => {
    setSignupInfo({ ...signupInfo, [event.target.id]: event.target.value });
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  return (
    <Layout>
      <main className="signup">
        {loading ? (
          <Loader />
        ) : (
          <section className="signup-container">
            <h2 className="signup__title">Sign Up</h2>
            <form className="signup__form" onSubmit={handleSignUp}>
              <Input id="email" handleChange={handleChange} />
              <Input
                id="password"
                type="password"
                handleChange={handleChange}
              />
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

export default SingUp;
