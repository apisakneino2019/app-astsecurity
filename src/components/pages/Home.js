import React from "react";
import "./css/Home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-router-dom";
import {
  FcGlobe,
  FcAbout,
  FcBusinessContact,
  FcDownload,
} from "react-icons/fc";
import ModalImage from "react-modal-image";

function Home() {
  const { t } = useTranslation();
  return (
    <div id="HomeToTop" className="hero-container">
       <ModalImage
        small={"/images/Banner-banner.png"}
        large={"/images/Banner-banner.png"}
        alt="ast-Banner"
      />

      <div style={{ backgroundImage: "url(/images/apocalypse.jpg)" }}>
        <h1>{t("home.1")} </h1>
        <h5>{t("home.2")}</h5>
        <h5>
          {t("home.7")} <br />
          <FcDownload size={35} />
        </h5>
        <h2>{t("home.3")} </h2>
        <p>{t("home.4")}</p>
        {/* เข้าเว็บไซต์ */}
        <Link to="/Homepage">
          <button>
            {" "}
            {t("home.5")}<br />
            <FcGlobe size={35} />
          </button>
        </Link>{" "}
        {/* เกี่ยวกับเรา */}
        <Link to="/AboutUs">
          <button>
            {" "}
            {t("home.6")}<br />
            <FcAbout size={35} />
          </button>
        </Link>
        {/* ติดต่อเรา */}
        <Link to="/ContactUs">
          <button>
            {" "}
            {t("nav.5")}<br />
            <FcBusinessContact size={35} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
