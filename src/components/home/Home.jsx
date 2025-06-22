import React from "react";
import profileImg from "../../assets/profile2-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import "./Home.css";
import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Olá, <span>Meu nome é</span>
          </p>
          <h1 className="home__title text-cs">
            <span>ITAMAR</span> <br />
            GOUVEIA
          </h1>
          <p className="home__job">
            <span className="text-cs">Eu sou um </span>
            <b>Desenvolvedor Web</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                12 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Anos de <span>Experiência</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">30</span>

              <span className="text-sm text-cs">
                Projetos <span>completados</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeOne} alt="" className="shape shape__3" />
          </div>

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
      </div>
    </section>
  );
};

export default Home;
