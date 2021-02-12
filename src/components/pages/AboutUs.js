import React from "react";
import "./css/AboutUs.css";
import { useTranslation } from "react-i18next";
import { FcAlarmClock, FcCheckmark, FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";
function AboutUs() {
  const { t } = useTranslation();
  return (
    <div>
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
              className="col-us-img"
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
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://cdn.pixabay.com/photo/2017/08/25/06/58/firefighter-2679283_960_720.jpg"
      ></img>
    </div>
  );
}

export default AboutUs;
