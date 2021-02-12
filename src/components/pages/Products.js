import React from "react";
import "./css/Products.css";
import { useTranslation } from "react-i18next";
import { FcAlarmClock, FcCheckmark, FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
function Products() {
  const { t } = useTranslation();
  return (
    <div id="tact-homepage">
      <h1
        style={{ backgroundImage: "url(/images/bg-black.jpg)" }}
        className="h1-col-title"
      >
        {t("nav.4")}
      </h1>
      <h5 className="h1-col-title">
        {t("nav.8")}
        <FcNext size={24} />
        <Link to="/Homepage">{t("nav.12")}</Link>
        <FcNext size={24} />
        {t("nav.4")}
      </h5>
     
      {/* ก่อนชุดที่ 1 */}
      <div className="tact-container">
        <div className="tact-column-inner">
          <div className="tact-only-column-one">
            {" "}
            <div className="tact-column-one">
              {" "}
              <div className="container-test">
                <img
                  src="/images/panels3.png"
                  alt="FW106_re-1-1024x1024"
                  className="image-test"
                />
                <div className="overlay-test">
                  <div className="text-test">{t("test.1")}</div>
                </div>
              </div>
            </div>{" "}
            <hr className="text-hr" />
            <div className="tact-column-one">
           
              <div className="container-test">
                <img
                  src="/images/an3.png"
                  alt="FW122-1-1024x722"
                  className="image-test"
                />
                <div className="overlay-test">
                  <div className="text-test">{t("test.2")}</div>
                </div>
              </div>{" "}
            </div>{" "}
            <hr className="text-hr" />
           
            <div className="tact-column-one">
              {" "}
              <p>
                <span className="span-col-203"> {t("home1.2")}</span>
                <br />
                {t("home1.3")}
                {t("home1.4")}
                {t("home1.5")}
                {t("home1.6")}
                {t("home1.7")}
                {t("home1.8")}
                {t("home1.9")}
              </p>
            </div>
            <hr className="text-hr" />
          </div>
        </div>

        {/* ชุดที่ 1 */}
        <div className="tact-container-inner">
          {/* Column1 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/panels2.png"
              alt="FireWatcher 106S"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={32} />
                {t("proitem.1")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.2")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.3")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.4")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.5")}
              </li>
            </span>
          </div>
          {/* Column2 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/panels3.png"
              alt="FireWatcher 106"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={32} />
                {t("proitem.6")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.7")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.8")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.9")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.10")}
              </li>
            </span>
          </div>
          {/* Column3 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/panels4.png"
              alt="External Network Unit"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={32} />
                {t("proitem.11")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.12")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.13")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.14")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={28} />
                {t("proitem.15")}
              </li>
            </span>
          </div>
        </div>
      </div>

      {/* ชุดที่ 2 */}
      <div className="tact-container">
        <div className="tact-container-inner">
          {/* Column1 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/an1.png"
              alt="FireWatcher 122 Remote LCD Annunciator"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem2.1")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.2")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.3")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.4")}
              </li>
            </span>
          </div>
          {/* Column2 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/an2.png"
              alt="FireWatcher 123 Remote LCD Annunciator"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem2.6")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.7")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.8")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.9")}
              </li>
            </span>
          </div>
          {/* Column3 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/an3.png"
              alt="FireWatcher 129 Remote LED Annunciator"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem2.11")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.12")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.13")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem2.14")}
              </li>
            </span>
          </div>
        </div>
      </div>

      {/* ชุดที่ 3 */}

      <div id="tact-homepage2" className="tact-container">
        <div className="tact-column-inner">
          <div className="tact-only-column">
            {" "}
            <div className="tact-column">
              {" "}
              <div className="container-test">
                <img
                  src="/images/dev2.png"
                  alt="FW106_re"
                  className="image-test"
                />
                <div className="overlay-test">
                  <div className="text-test">{t("test.3")}</div>
                </div>
              </div>
            </div>
            <div className="tact-column">
              {" "}
              <p>
                <span className="span-col-203"> {t("Device.2")}</span>
                <br />
                {t("Device.3")}
                {t("Device.4")}
                {t("Device.5")}
                {t("Device.6")}
                {t("Device.7")}
                {t("Device.8")}
                {t("Device.9")}
              </p>
            </div>
          </div>
        </div>

        <div className="tact-container-inner">
          {/* Column1 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/dev2.png"
              alt="FireWatcher 982 Multi-Candela Strobe"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem3.1")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.2")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.3")}
              </li>
            
            </span>
          </div>
          {/* Column2 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/dev3.png"
              alt="FireWatcher 962 Multi-Candela Horn/Strobe"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem3.6")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.7")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.8")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.9")}
              </li>
            </span>
          </div>
          {/* Column3 */}
          <div className="col-tact-column">
            {" "}
            <img
              className="col-us-img-3"
              src="/images/Device-4.png"
              alt="Mini Horn Device"
            ></img>
            <span className="span-list">
              <ul>
                {" "}
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem3.11")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.12")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.13")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.14")}
              </li>
            </span>
          </div>
        </div>
      </div>

      <ul className="style-type">
        <li className="list-style-type">
          {" "}
          <Link to="/Products">
            {" "}
            <FcNext size={18} />
            {t("nav.12")}
          </Link>
        </li>
        <li className="list-style-type">
          {" "}
          <Link1 to="tact-homepage" spy={true} smooth={true}>
            {" "}
            <FcNext size={18} />
            {t("home1.2")}
          </Link1>
        </li>
        <li className="list-style-type">
          {" "}
          <Link1 to="tact-homepage2" spy={true} smooth={true}>
            {" "}
            <FcNext size={18} />
            {t("Device.2")}
          </Link1>
        </li>

        <li className="list-style-type">
          {" "}
          <Link to="/ContactUs">
            {" "}
            <FcNext size={18} />
            {t("nav.5")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
