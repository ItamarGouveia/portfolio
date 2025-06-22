import React, { useState } from "react";
import "./Portfolio.css";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setMenuItems(newProjectItems);
  };

  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portifólio</h2>
      <p className="section__subtitle">
        Meus <span>Trabalhos</span>
      </p>
      <List list={navList} filterItems={filterItems} />
      <div className="portfolio__container container grid">
        <Items projectItems={projectItems} />
      </div>
    </section>
  );
};

export default Portfolio;
