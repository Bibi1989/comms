import React from "react";
import style from "./Partner.module.css";

const PartnerProfile = () => {
  return (
    <div className={style.partner_profile}>
      <div className={style.partner_profile_img}>
        <img src='../../../../images/partners/person.svg' alt='' />
      </div>
      <div className={style.partner_quote}>
        <p>
          “ Working with TruCSR was the best decision i made for my business,
          most people underestimate the importance of Social responsibilty in
          this country, i’m glad we consulted TruCSR ”
        </p>

        <div className={style.partner_name}>
          <p>Mr Kelechi Onuacho</p>
          <span>CEO, Nestle</span>
          <p className={style.partner_see_more}>SEE MORE TESTIMONIALS</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;
