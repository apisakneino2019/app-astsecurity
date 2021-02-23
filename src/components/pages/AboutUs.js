import React from "react";
import "./css/AboutUs.css";
import { useTranslation } from "react-i18next";
import { FcAlarmClock, FcCheckmark, FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
function AboutUs() {
  const { t } = useTranslation();
  return (
    <div>
      <ModalImage
        small={"/images/Banner-banner.png"}
        large={"/images/Banner-banner.png"}
        alt="ast-Banner"
      />
      <h1
        style={{ backgroundImage: "url(/images/bg-black.jpg)" }}
        className="h1-col-title"
      >
        {t("nav.2")}
      </h1>
      <h5 className="h1-col-title">
        {t("nav.8")}
        <FcNext size={24} /> <Link to="/Homepage">{t("nav.12")}</Link>
        <FcNext size={24} />
        {t("nav.2")}
      </h5>
      <div className="us-container">
        <div className="us-container-inner">
          {/* Column1 */}
          <div className="col-us-column">
            <hr /> <br />
            <img
              className="col-us-img-icons"
              src="/images/icons.png"
              alt="ast-icons"
            ></img>
          </div>
          {/* Column2 */}
          <div className="col-us-column">
            <hr /> <br />
            <img
              className="col-us-img-2"
              src="/images/icons.png"
              alt="ast-logo"
            ></img>
            <p className="col-us-pdata">
              {" "}
              {t("aboutus.1")}
              {t("aboutus.1.1")}
              {t("aboutus.2")}
              <br />
            </p>
          </div>
          {/* Column3 */}
          <div className="col-us-column">
            <div>
              <img
                className="col-us-img"
                style={{ width: "50%", height: "auto" }}
                src="/images/fire-alarm-hand-station.jpg"
              ></img>
              <p className="col-uss-pdata">
                {" "}
                {t("abitem.1111")}
                {t("abitem.2221")}
                {t("abitem.3331")}
                {t("abitem.4441")}
                <br />
                <Link to="/Products">{t("page.11")}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
