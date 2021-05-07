import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
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
      <hr style={{ margin: " 0px 1rem" }} />
    </div>
  );
};

export default Home;
