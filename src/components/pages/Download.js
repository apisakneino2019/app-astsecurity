import React from "react";
import "./css/Download.css";
import { useTranslation } from "react-i18next";

function Download() {
  const { t } = useTranslation();
  return (
    <div>
      <h1
        style={{ backgroundImage: "url(/images/bg-black.jpg)" }}
        className="h1-col-title"
      >
        {t("nav.6")}
      </h1>
      {/* <h5 className="h1-col-title">
        {t("nav.8")}
        <FcNext size={24} /><Link to="/Homepage">{t("nav.12")}</Link>
        <FcNext size={24} />
        {t("nav.6")}
      </h5> */}
      <div className="test">
        <img
          className="img-responsive"
          src="/images/bg-tap.jpg"
          alt="Girl in a jacket"
        ></img>

        <h5 className="h1-col-h5"> ข้อมูลเพิ่มเติม เร็วๆ นี้...</h5>
      </div>{" "}
    </div>
  );
}

export default Download;
