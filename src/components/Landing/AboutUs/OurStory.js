import React from "react";
import style from "./About.module.css";

const OurStory = () => {
  return (
    <div className={style.ourStory}>
      <div className={style.ourStoryLeft}>
        <img src='./ourstory1.jpg' alt='our story' />
        <img src='./ken-egbas 2.jpg' alt='our story ken' />
      </div>
      <div className={style.ourStoryRight}>
        <h3>Our Story</h3>
        <p>
          The TruContact CSR Nigeria seed was sown long before the founder;
          Kenneth Egbas would even conceive the dream of starting a company.
          Life didn’t always hand him a fair deal. From his early days and upon
          graduation from university he always dreamed of running a business
          based on the idea that outcomes from his business activities would
          promote innovation, equitable distribution of resources, justice,
          reduce wastage and help eradicate poverty in Africa. This gave wings
          to the dream that became TruContact CSR Nigeria. 
          <br />
          <br />
          <br />
          TCSRN was founded in
          2006, and carried out what many have come to acknowledge as trail
          blazing spadework that led to a rapid growth of what has become a
          vibrant and viable corporate social responsibility and sustainability
          industry in Nigeria, and Africa.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
