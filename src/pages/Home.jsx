import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Layout onApp={false}>
        <main className="home">
          <section className="hero">
            <h2 className="hero__title">Notes</h2>
            <p className="hero__text">
              Write down all the ideas and <br /> tasks you have
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              ...
            </p>
          </section>
          <section className="links">
            <Link className="links__button" to="/login">
              Log In
            </Link>
            <p>or</p>
            <Link className="links__button" to="/signup">
              Sign Up
            </Link>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
