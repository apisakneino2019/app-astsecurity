import React from "react";
import "./css/Download.css";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
function Download() {
  const { t } = useTranslation();
  return (
    <div>
      <img className="img-top" src="/images/Banner-banner.png" alt="ast-Banner"></img>
      <h1
        style={{
          backgroundImage:
            "url(https://images.wallpaperscraft.com/image/laptop_cup_glasses_plant_114948_1920x1200.jpg)",
        }}
        className="h1-col-title"
      >
        {t("nav.6")}
      </h1>
      <div
        style={{
          backgroundImage:
            "url(https://images.wallpaperscraft.com/image/china_shanghai_night_city_city_lights_47925_1920x1080.jpg)",
        }}
        className="test"
      >
        <h1 className="title">
          {t("sers.0")} <br />
          <span> {t("sers.00")}</span>
        </h1>

        <div className="test-col-column">
          {/* col 1 */}
          <div className="test-col-item">
            {" "}
            <button className="item-button" type="button">
              {" "}
              <Link
                className="item-Link"
                to="/document/Fire Alarm System.pdf"
                target="_blank"
                download
              >
                1) {t("sers.1")} <br />  <br />
                <label className = "label-span">{t("label.1")}</label>
              </Link>
            </button>
            <button className="item-button" type="button">
              <Link
                className="item-Link"
                to="/document/FST-851 Series.pdf"
                target="_blank"
                download
              >
                2) {t("sers.3")}<br />  <br />
                <label className = "label-span">{t("label.3")}</label>
              </Link>
            </button>
            <button className="item-button" type="button">
              <Link
                className="item-Link"
                to="/document/NBG-12LX_pdf.pdf"
                target="_blank"
                download
              >
                3) {t("sers.5")}<br />  <br />
                <label className = "label-span">{t("label.5")}</label>
              </Link>
            </button>
          </div>
          {/* col 2 */}
          <div className="test-col-item">
            <button className="item-button" type="button">
              <Link
                className="item-Link"
                to="/document/Product_Brochure.pdf"
                target="_blank"
                download
              >
                4) {t("sers.2")}<br />  <br />
                <label className = "label-span">{t("label.2")}</label>
              </Link>
            </button>
            <button className="item-button" type="button">
              <Link
                className="item-Link"
                to="/document/SSM24-6 Alarm Bell.pdf"
                target="_blank"
                download
              >
                5) {t("sers.4")}<br />  <br />
                <label className = "label-span">{t("label.4")}</label>
              </Link>
            </button>

            <button className="item-button" type="button">
              <Link
                className="item-Link"
                to="/document/NFS-320.pdf"
                target="_blank"
                download
              >
                6) {t("sers.6")}<br />  <br />
                <label className = "label-span">{t("label.6")}</label>
              </Link>
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Download;
