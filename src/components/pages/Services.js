import React from "react";
import "./css/Services.css";
import { useTranslation } from "react-i18next";
import {  FcNext } from "react-icons/fc";
import {Link} from "react-router-dom";
function Services() {
  const { t } = useTranslation();
  return (
    <div >
      <h1 style={{backgroundImage: "url(/images/bg-black.jpg)"  }}className="h1-col-title">{t("nav.3")}</h1>
      <h5 className="h1-col-title">
        {t("nav.8")}
        <FcNext size={24} /><Link to="/Homepage">{t("nav.12")}</Link>
        <FcNext size={24} />
        {t("nav.3")}
      </h5>
      <div className="services">
        <img
          className="img-res"
          src="/images/bridge-eitai.png"
          alt="Girl in a jacket"
        ></img>
        สินค้าและบริการ เร็วๆ นี้....
      </div>
    </div>
  );
}

export default Services;
