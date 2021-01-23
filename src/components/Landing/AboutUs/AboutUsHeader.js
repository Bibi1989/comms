import React from "react";
import style from './About.module.css'

const AboutUsHeader = () => {
  return (
    <div className={style.mainHeader}>
      <div className={style.mainHeaderAboutUs}>
        <div className={style.mainHeaderLine}></div>
        <h3>ABOUT US</h3>
      </div>
      <p>
        TCSRN founded in 2006, is a consulting company that helps organisations
        to contribute to their societal goals of a philanthropic, activist, or
        charitable nature by engaging in or supporting volunteering or
        ethically-oriented practices.
      </p>
    </div>
  );
};

export default AboutUsHeader;
