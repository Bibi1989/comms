import React from "react";
import SectionHeader from "../../UI/SectionHeader";
import ServiceCards from "./Service";
import style from './Service.module.css'

const Service = () => {
  return (
    <div className={style.service}>
      <SectionHeader title="OUR SERVICES">
        <p>
          Our team seek to help your organization navigate this threshold that
          stands between your brands and distinctive innovations, and finding
          your brands inner sanctum.
        </p>
      </SectionHeader>
      <ServiceCards />
    </div>
  );
};

export default Service;
