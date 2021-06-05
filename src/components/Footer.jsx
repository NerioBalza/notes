import React from "react";
import { Link } from "react-router-dom";

import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <Link className="footer__link" to="/">
          Home
        </Link>
      </div>
      <SocialMedia />
      <div>
        <p>
          You can follow this project on{" "}
          <a href="https://github.com/NerioBalza/notes" target="blank">
            <b>GitHub</b>
          </a>
        </p>
      </div>
      <div>
        <p>Handcrafted by @neriobalza - © 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
