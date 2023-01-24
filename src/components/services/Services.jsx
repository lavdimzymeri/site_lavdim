import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";
const services = () => {
  return (
    <section id="services">
      <h5>Primary Jobs </h5>
      <h2>My knowledge about the web!</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>The most common languages I use are HTML & CSS.. </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>JavaScript is a secondary language. </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>I Java Uses for Back-end development. </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>I have basic knowledge in PHP as well. </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>The most suitable language for me is Java in the Back-end. </p>
            </li>
          </ul>
        </article>
        {/*FUNDI UI DESIGN*/}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Web creation in different types of programming languages. </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I also completed several courses related to web development.{" "}
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>I use React Js for Web Development. </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I learned about web development before I started at the faculty.{" "}
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>The first beginnings were with Html and CSS. </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>My passion is coding for Web Development. </p>
            </li>
          </ul>
          {/*FUNDI WEB DEV*/}
        </article>
      </div>
    </section>
  );
};

export default services;
