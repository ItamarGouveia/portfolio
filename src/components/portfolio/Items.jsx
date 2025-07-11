import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem, index) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 1 }}
            key={index}
            className="portfolio__items card card-two"
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs"> {category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>

            <a href="" className="link">
              Veja mais
              <FaArrowRight className="link__icon" />
            </a>
            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
