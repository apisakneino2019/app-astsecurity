import React from "react";

import "./Footer.css";
import { useTranslation } from "react-i18next";
import { ImStack } from "react-icons/im";
import {
  FaAddressCard,
  FaPhone,
  FaHome,
  FaMapMarkedAlt,
  FaClipboardList,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <hr /> <br />
            <FaClipboardList className="icons-nav" size={34} />{" "}
            <h2>{t("footer.1")}</h2>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="https://allweb.co.th/2019/%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%87.html"
            >
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.2")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.3")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.4")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.5")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.6")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.7")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.8")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.9")}
              </li>
              <li style={{ listStyle: "none" }}>
                {" "}
                <ImStack className="icons-nav" /> {t("footer.10")}
              </li>
            </a>
          </div>
          {/* Column2 */}
          <div className="col">
            <hr /> <br />
            <FaAddressCard className="icons-nav" size={34} />{" "}
            <h2> {t("footer.11")}</h2>
            <li style={{ listStyle: "none" }}>
              <FaHome className="icons-nav" /> {t("footer.12")}
            </li>
            <li style={{ listStyle: "none" }}>
              {" "}
              <FaAddressCard className="icons-nav" /> {t("footer.13")}
            </li>
            <li style={{ listStyle: "none" }}>
              {" "}
              <FaAddressCard className="icons-nav" /> {t("footer.14")}
            </li>
            <li style={{ listStyle: "none" }}>
              {" "}
              <FaPhone className="icons-nav" /> {t("footer.15")}
            </li>
            <li style={{ listStyle: "none" }}>
              {" "}
              <MdEmail className="icons-nav" /> {t("footer.16")}
            </li>
          </div>
          {/* Column3 */}
          <div className="col">
            <hr /> <br />
            <FaMapMarkedAlt className="icons-nav" size={34} />{" "}
            <h2> {t("footer.17")} </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3136.904378559478!2d102.057141!3d14.957799000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x493fec817647dd10!2z4LiB4Lil4LmJ4Lit4LiH4Lin4LiH4LiI4Lij4Lib4Li04LiU4LmC4LiE4Lij4Liy4LiKIENDVFYgSVAgQ2FtZXJhIOC4quC4seC4jeC4jeC4suC4k-C4geC4seC4meC4guC5guC4oeC4oiDguKrguYHguIHguJnguJnguLTguYnguKfguKHguLfguK0g4LiE4Li14Lii4LmM4LiB4Liy4Lij4LmM4LiUIOC5hOC4oeC5ieC4geC4seC5ieC4meC4o-C4luC4ouC4meC4leC5jA!5e1!3m2!1sen!2sth!4v1608796503566!5m2!1sen!2sth"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
            <a style={{ textDecoration: "none" }} target="_blank" href="">
              <img
                className="footer-img"
                src="https://allweb.co.th/2019/images/Line/QRCODEP-PONG.jpg"
                alt="QR Code"
              />
            </a>
            <tr />{" "}
            <a style={{ textDecoration: "none" }} target="_blank" href="https://www.facebook.com/allwebtechnology/">
              <img
                className="footer-img"
                src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1.png"
                alt="Facebook"
              />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" href="https://line.me/R/ti/p/%40hua8211q">
              <img
                className="footer-img"
                src="https://allweb.co.th/2019/images/Line/en.png"
                alt="Line"
              />
            </a>
          </div>
        </div>
        <br /> <hr /> <br />
      </div>
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
