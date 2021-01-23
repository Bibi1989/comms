import React from "react";
import SectionHeader from "../../UI/SectionHeader";
import OurPartner from "./OurPartner";
import style from "./Partner.module.css";
import PartnerProfile from "./PartnerProfile";

const Partner = () => {
  return (
    <div className={style.partner}>
      <SectionHeader title='Out Partners'>
        <p>
          Our team seek to help your organization navigate this threshold that
          stands between your brands and distinctive innovations, and finding
          your brands inner sanctum.
        </p>
      </SectionHeader>
      <OurPartner />
      <PartnerProfile />
    </div>
  );
};

export default Partner;
