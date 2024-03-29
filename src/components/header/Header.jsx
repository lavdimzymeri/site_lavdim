import React from "react";
import "./header.css";
import CTA from "./CTA";
import lleo from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lavdim Zymeri</h1>
        <h5 className="text-light"> Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={lleo} alt="me"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default header;
