import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <main className="not-found">
        <section className="not-found__container">
          <div className="not-found__message">
            <h2>Error 404:</h2>
            <h3>Not Found</h3>
          </div>
          <Link className="not-found__link" to="/">
            Go back to Home
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default NotFound;
