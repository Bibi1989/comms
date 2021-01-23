import React from "react";
import style from './Service.module.css'
import blogStyle from '../Blog/Blog.module.css'

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
        {/* <span>WORK WITH US </span> */}
        <div className={style.read_more}>
            <p style={{textDecoration: 'underline'}}>WORK WITH US</p>{" "}<p style={{marginLeft: 10}}>&#8594;</p>
          </div>
      </div>
    </div>
  );
};

export default ServiceCard;
