import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.customer}>
        <h3>CUSTOMER SERVICE</h3>
        <p>FAQs</p>
        <span>Customer Service</span>
      </div>
      <div className={style.business}>
        <h3>BUSINESS</h3>
        <span>Careers</span>
        <span>Partner with Us</span>
        <span>Investor Relations</span>
      </div>
      <div className={style.company}>
        <h3>COMPANY</h3>
        <span>About Us</span>
        <span>Services</span>
        <span>Partners</span>
        <span>Customer Stories</span>
        <span>Contact Us</span>
      </div>
      <div className={style.location}>
        <p>
          LAGOS NIGERIA <br /> 30, Shakiru Anjorin Street, Road 39, Off Admiralty
          Way,Lekki Phase 1, Lekki, Lagos, Phone: +234 123 4456
        </p>
        <div className={style.location_social_btns}>
          <div className="img">
            <img src="../../../../images/socials/twitter.svg" alt=""/>
          </div>
          <div className="img">
            <img src="../../../../images/socials/facebook.svg" alt=""/>
          </div>
          <div className="img">
            <img src="../../../../images/socials/linkedin.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
