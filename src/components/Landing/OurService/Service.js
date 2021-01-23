import React, { useState } from "react";
import style from "./Service.module.css";
import ServiceCard from "./ServiceCard";

const image1 = "./shake.png";
const image2 = "./writing.png";

const ServiceCards = () => {
  const [contents] = useState([
    {
      id: 1,
      name: "Consulting",
      img: image1,
      description:
        "Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.",
     },
    {
      id: 2,
      name: "Impact Measurement & Accessment ",
      img: image2,
      description:
        "Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.",
     },
    {
      id: 3,
      name: "Engagement Design",
      img: image2,
      description:
        "Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.",
     },
    {
      id: 4,
      name: "Strategy",
      img: image1,
      description:
        "Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.",
     },
  ]);
  return <div className={style.serviceCard}>
    <div className={style.serviceGrid}>
      {contents?.map(content => (
        <ServiceCard content={content} key={content?.id} />
      ))}
    </div>
  </div>;
};

export default ServiceCards;
