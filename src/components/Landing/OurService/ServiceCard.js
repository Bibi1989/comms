import React from "react";
import style from './Service.module.css'

const ServiceCard = ({content}) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={content?.img} alt='' width="100%" />
      </div>
      <div className={style.content}>
        <h3>{content.name}</h3>
        <p>
          {content?.description}
        </p>
        <span>WORK WITH US </span>
      </div>
    </div>
  );
};

export default ServiceCard;
