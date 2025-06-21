import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import "./Home.css";
import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <p className="home__subtitle text-cs">
          Hello, <span>My name is</span>
        </p>
        <h1 className="home__title text-cs">
          <span>ITAMAR</span> GOUVEIA
        </h1>
        <p className="home__job">
          <span className="text-cs">I am </span>
          <b>Web Developer</b>
        </p>
        <p className="home__text">
          Sou um desenvolvedor full stack com paixão por transformar ideias em
          soluções funcionais. Tenho experiência tanto no desenvolvimento de
          interfaces modernas e responsivas quanto na construção de sistemas
          robustos no back-end.
        </p>
        <div className="home__socials">
          <a href="" className="home__social-link">
            <FaTwitter />
          </a>

          <a href="" className="home__social-link">
            <FaDribbble />
          </a>

          <a href="" className="home__social-link">
            <FaBehance />
          </a>
        </div>
        <div className="home__btns">
          <a href="" className="btn text-cs">
            Download CV
          </a>

          <a href="" className="hero__link text-cs">
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
