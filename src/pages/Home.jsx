import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Layout onApp={false}>
        <main className="home">
          <section className="hero">
            <div className="hero__note">
              <h2 className="hero__title">Notes</h2>
              <p className="hero__text">
                Write down all the ideas and tasks you have
              </p>
              <Link className="btn hero__btn" to="/login">
                Login
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
