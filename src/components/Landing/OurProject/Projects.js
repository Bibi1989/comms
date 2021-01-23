import React from "react";
import style from "./Project.module.css";

const Projects = () => {
  return (
    <div className={style.project_parent}>

      <div className={style.project1}>
        <div className={style.image1}>
          <img src="../../../../images/project1.svg" alt=""/>
        </div>
        <div className={style.overlay1}>
          <h3>Save the Children initiative powered by Chevron</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
            pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna
            interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.
          </p>
        </div>
      </div>

      <div className={style.project2}>
        <div className={style.image1}>
          <img src="../../../../images/project2.svg" alt=""/>
        </div>
        <div className={style.overlay1}>
          <h3>14th Edition of The SERAS CSR Awards.</h3>
          <p>
            The SERAS is an acronym for Sustainability, Entrepreneurship and
            Responsibility Awards. The Story of The SERAS began in 2007 when the
            very first edition held at Lagos, Nigeria.
          </p>
        </div>
      </div>

      <div className={style.project3}>
        <div className={style.image1}>
          <img src="../../../../images/project1.svg" alt=""/>
        </div>
        <div className={style.overlay1}>
          <h3>14th Edition of The SERAS CSR Awards.</h3>
          <p>
            The SERAS is an acronym for Sustainability, Entrepreneurship and
            Responsibility Awards. The Story of The SERAS began in 2007 when the
            very first edition held at Lagos, Nigeria.
          </p>
        </div>
      </div>

      <div className={style.project4}>
        <div className={style.image1}>
          <img src="../../../../images/project3.svg" alt=""/>
        </div>
        <div className={style.overlay1}>
          <h3>14th Edition of The SERAS CSR Awards.</h3>
          <p>
            The SERAS is an acronym for Sustainability, Entrepreneurship and
            Responsibility Awards. The Story of The SERAS began in 2007 when the
            very first edition held at Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
