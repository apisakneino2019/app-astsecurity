import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import { GiCelebrationFire } from "react-icons/gi";
// import { MdDashboard } from "react-icons/md";
import { FcMenu, FcRedo } from "react-icons/fc";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import clsx from "clsx";

function Navbar() {
  const [click, setClick] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  console.log(location);
  function handleClick10(lang) {
    i18next.changeLanguage(lang);
  }

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-container">
            <h5 className="">
              <p className="col-nav-one"> astsecurity  </p>

              <p className="col-nav-two">www.astsecurity.in.th</p>
            </h5>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? < FcRedo style={{boxShadow: "#000 1px 1px 5px 1px" }} /> : <FcMenu size={45} style={{boxShadow: "#000 1px 1px 5px 1px" }} />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Homepage"
                className={clsx("nav-links", {
                  active: location.pathname === "/Homepage",
                })}
              >
                {t("nav.1")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className={clsx("nav-links", {
                  active: location.pathname === "/AboutUs",
                })}
              >
                {t("nav.2")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Products"
                className={clsx("nav-links", {
                  active: location.pathname === "/Products",
                })}
              >
                {t("nav.4")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className={clsx("nav-links", {
                  active: location.pathname === "/ContactUs",
                })}
              >
                {t("nav.5")}
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/Download"
                className={clsx("nav-links", {
                  active: location.pathname === "/Download",
                })}
              >
                {t("nav.6")}
              </Link>
            </li> */}
            <li className="nav-btn">
              <button onClick={() => handleClick10("eng")}>
                <img
                  src="/images/united_states_flags_flag_17080.png"
                  alt="ENG"
                />
              </button>

              <button onClick={() => handleClick10("th")}>
                <img src="/images/thailand_flags_flag_17072.png" alt="TH" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
