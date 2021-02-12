import React from "react";
import "./css/Homepage.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CgMoreR, CgCrowdfire } from "react-icons/cg";
import { BiChevronsRight } from "react-icons/bi";

function Homepage() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 
        style={{ backgroundImage: "url(/images/bg-black.jpg)" }}
        className="h1-col-title"
      >
        {t("nav.9")} <br /> {t("nav.11")}
      </h1>

      <h5 className="h1-col-title">
        {t("nav.8")}
        <BiChevronsRight size={20} />
        <BiChevronsRight size={20} />
        {t("nav.10")}
      </h5>

      <div className="btn-btn-homepage">
        {/* Col 1 */}
        <div className="con-homepage">
          {/* sub-col 1 */}
          <div className="con-homepage-column">
            <Link to="/Products">
              {" "}
              <img
                src="https://www.maplearmor.com/wp-content/uploads/2020/02/FW106_re-1-1024x1024.jpg"
                alt="Girl in a jacket"
              ></img>
              <div className="content-item">
                <button className="button">
                  <CgCrowdfire size={30} /> {t("page.5")}
                </button>
                <p style={{ textDecoration: "none" }}>{t("page.11")}</p>
              </div>
            </Link>
          </div>
          {/* sub-col 2 */}
          <div className="con-homepage-column">
            <Link to="/Products">
              <img
                src="https://www.maplearmor.com/wp-content/uploads/2020/02/FireWatcher-Module-1024x1024.jpg"
                alt="Girl in a jacket"
              ></img>
              <div className="content-item">
                {" "}
                <button className="button">
                  {" "}
                  <CgCrowdfire size={30} />
                  {t("page.12")}
                </button>
              
                <p>{t("page.11")}</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Col 2*/}
        <div className="con-homepage">
          {/* sub-col 2 */}
          <div className="con-homepage-column">
            <Link to="/Products">
              <img
                src="https://www.maplearmor.com/wp-content/uploads/2020/08/FW123-FireWatcher-123-Remote-LCD-Annunciator-Gray-1-scaled-1-2048x2048.jpg"
                alt="Girl in a jacket"
              ></img>
              <div className="content-item">
                <button className="button">
                  <CgCrowdfire size={30} /> {t("page.6")}
                </button>
                <p style={{ textDecoration: "none" }}>{t("page.11")}</p>
              </div>
            </Link>
          </div>
          {/* sub-col 2 */}
          <div className="con-homepage-column">
            <Link to="/Products">
              <img
                src="https://www.maplearmor.com/wp-content/uploads/2020/02/FW721-1-1024x1024.jpg"
                alt="Girl in a jacket"
              ></img>
              <div className="content-item">
                <button className="button">
                  <CgCrowdfire size={30} /> {t("page.10")}
                </button>
                <p style={{ textDecoration: "none" }}>{t("page.11")}</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Col 3 */}
        <div className="con-homepage">
          <div className="con-homepage-column">
            <Link to="/Products">
              <img
                src="https://www.maplearmor.com/wp-content/uploads/2020/02/FW962-White-1024x1014.jpg"
                alt="Girl in a jacket"
              ></img>
              <div className="content-item">
                <button className="button">
                  <CgCrowdfire size={30} /> {t("page.7")}
                </button>
                <p style={{ textDecoration: "none" }}>{t("page.11")}</p>
              </div>
            </Link>
          </div>
          <div className="con-homepage-column">
            <Link to="/Products">
              <img
                src="https://www.maplearmor.com/wp-content/uploads/2020/02/FW511withbase.jpg"
                alt="Girl in a jacket"
              ></img>
              <div className="content-item">
                <button className="button">
                  {" "}
                  <CgCrowdfire size={30} />
                  {t("page.8")}
                </button>
                <p style={{ textDecoration: "none" }}>{t("page.11")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
