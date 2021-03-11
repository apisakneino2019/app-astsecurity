import React from "react";
import "./css/Products.css";
import { useTranslation } from "react-i18next";
import { FcAlarmClock, FcCheckmark, FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import ModalImage from "react-modal-image";

function Products() {
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
          <div id="tact-homepage" className="tact-only-column-one">
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
            <ModalImage
              small={"/images/panels2.png"}
              large={"/images/panels2.png"}
              alt="Fire Watcher 106s แผงควบคุมสัญญาณแจ้งเหตุเพลิงไหม้"
            />
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
            {/* <img
              className="col-us-img-3"
              src="/images/panels3.png"
              alt="FireWatcher 106"
            ></img> */}
            <ModalImage
              small={"/images/panels3.png"}
              large={"/images/panels3.png"}
              alt=" Fire Watcher 106 แผงควบคุมสัญญาณแจ้งเหตุเพลิงไหม้ "
            />
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
            {/* <img
              className="col-us-img-3"
              src="/images/panels4.png"
              alt="External Network Unit"
            ></img> */}
            <ModalImage
              small={"/images/panels4.png"}
              large={"/images/panels4.png"}
              alt="หน่วยเครือข่ายภายนอก"
            />
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
            {/* <img
              className="col-us-img-3"
              src="/images/an1.png"
              alt="FireWatcher 122 Remote LCD Annunciator"
            ></img> */}
            <ModalImage
              small={"/images/an1.png"}
              large={"/images/an1.png"}
              alt="FireWatcher 122 รีโมท LCD สัญญาณแจ้งเหตุเพลิงไหม้"
            />
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
            {/* <img
              className="col-us-img-3"
              src="/images/an2.png"
              alt="FireWatcher 123 Remote LCD Annunciator"
            ></img> */}
            <ModalImage
              small={"/images/an2.png"}
              large={"/images/an2.png"}
              alt="FireWatcher 123 รีโมท LCD สัญญาณแจ้งเหตุเพลิงไหม้"
            />
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
            {/* <img
              className="col-us-img-3"
              src="/images/an3.png"
              alt="FireWatcher 129 Remote LED Annunciator"
            ></img> */}
            <ModalImage
              small={"/images/an3.png"}
              large={"/images/an3.png"}
              alt="FireWatcher 129 รีโมท LED สัญญาณแจ้งเหตุเพลิงไหม้"
            />
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
              </p>
            </div>
          </div>
        </div>

        <div className="tact-container-inner">
          {/* Column1 */}
          <div className="col-tact-column">
            <ModalImage
              small={"/images/dev2.png"}
              large={"/images/dev2.png"}
              alt="FireWatcher 971 อุปกรณ์แจ้งเตือน - Horn"
            />
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
            <ModalImage
              small={"/images/dev3.png"}
              large={"/images/dev3.png"}
              alt="FireWatcher 962 Multi-Candela Horn/Strobe" />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem3.6")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.7")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.8")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.9")}
              </li>
            </span>
          </div>
          {/* Column3 */}
          <div className="col-tact-column">
            <ModalImage
              small={"/images/Device-4.png"}
              large={"/images/Device-4.png"}
              alt="Mini Horn Device"/>
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("proitem3.11")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.12")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.13")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("proitem3.14")}
              </li>
            </span>
          </div>
        </div>
      </div>

      {/* ชุดที่ 4 */}
      <div id="tact-homepage4" className="tact-container">
        <div className="tact-column-inner">
          <div className="tact-only-column">
            {" "}
            <div className="tact-column">
              {" "}
              <div className="container-test">
                <img
                  src="/images/FW811.png"
                  alt="FW811"
                  className="image-test"
                />
                <div className="overlay-test">
                  <div className="text-test">{t("Modules.0")}</div>
                </div>
              </div>
            </div>
            <div className="tact-column">
              {" "}
              <p>
                <span className="span-col-203"> {t("Modules.0")} </span>
                <br />
                {t("Modules.1")}
              </p>
            </div>
          </div>
        </div>

        <div className="tact-container-inner">
        
          {/* Column1 */}
          <div className="col-tact-column">
              <ModalImage
              small={"/images/FW811.png"}
              large={"/images/FW811.png"}
              alt="โมดูลอินพุต FireWatcher 811"
            />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Modules.2")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.3")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.4")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.5")}
              </li>
            </span>
          </div>
        
          {/* Column2 */}
          <div className="col-tact-column">
              <ModalImage
              small={"/images/FW811M.png"}
              large={"/images/FW811M.png"}
              alt="FireWatcher 811M โมดูลอินพุตขนาดเล็ก"
            />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Modules.6")}
              </ul>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.7")}
              </li>
              <li>
                {" "}
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.8")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.9")}
              </li>
            </span>
          </div>

          {/* Column3 */}
          <div className="col-tact-column">
              <ModalImage
              small={"/images/FW821.png"}
              large={"/images/FW821.png"}
              alt="โมดูลอินพุต-เอาต์พุต FireWatcher 821"
            />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Modules.10")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.11")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.12")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.13")}
              </li>
            </span>
          </div>
        
          {/* Column4 */}
          <div className="col-tact-column">
            <ModalImage
              small={"/images/FW831.png"}
              large={"/images/FW831.png"}
              alt="โมดูลรีเลย์ FireWatcher 831"
            />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Modules.14")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.15")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.16")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.17")}
              </li>
            </span>
          </div>
        
          {/* Column5 */}
          <div className="col-tact-column">
            <ModalImage
              small={"/images/FW951-3.png"}
              large={"/images/FW951-3.png"}
              alt="โมดูลซิงค์ FireWatcher 951"
            />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Modules.18")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.19")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.20")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.21")}
              </li>
            </span>
          </div>
        
          {/* Column6 */}
          <div className="col-tact-column">
            <ModalImage
              small={"/images/FW851-2.png"}
              large={"/images/FW851-2.png"}
              alt="โมดูลแยก FireWatcher 851" />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Modules.22")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.23")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Modules.24")}
              </li>
            </span>
          </div>
        </div>
      </div>

      {/* ชุดที่ 5 */}
      <div id="tact-homepage5" className="tact-container">
        <div className="tact-column-inner">
          <div className="tact-only-column">
            {" "}
            <div className="tact-column">

              <div className="container-test">
                <img
                  src="/images/FireWatcher721Manual.png"
                  alt="FireWatcher721Manual.png"
                  className="image-test"
                />
                <div className="overlay-test">
                  <div className="text-test">{t("Manual.0")}</div>
                </div>
              </div>
            </div>
            <div className="tact-column">
              {" "}
              <p>
                <span className="span-col-203"> {t("Manual.0")} </span>
                <br />
                {t("Manual.1")}
              </p>
            </div>
          </div>
        </div>

        <div className="tact-container-inner">
          {/* Column1 */}
          <div className="col-tact-column">
              <ModalImage
        small={"/images/FireWatcher721Manual.png"}
        large={"/images/FireWatcher721Manual.png"}
        alt="FireWatcher 721 สถานีดึงคู่มือแจ้งเตือนอัคคีภัย"
      />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Manual.2")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Manual.3")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Manual.4")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Manual.5")}
              </li>
            </span>
          </div>
          {/* Column2 */}
          <div className="col-tact-column">
              <ModalImage
        small={"/images/FireWatcher722Manual.png"}
        large={"/images/FireWatcher722Manual.png"}
        alt="FireWatcher 722 สถานีดึงคู่มือแจ้งเตือนอัคคีภัย"
      />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Manual.6")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Manual.7")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Manual.8")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Manual.9")}
              </li>
            </span>
          </div>
        </div>
      </div>

      {/* ชุดที่ 6 */}
      <div id="tact-homepage6" className="tact-container">
        <div className="tact-column-inner">
          <div className="tact-only-column">
            <div className="tact-column">
              
              <div className="container-test">
                <img
                  src="/images/FireWatcher 511.png"
                  alt="FireWatcher511"
                  className="image-test"
                />
                <div className="overlay-test">
                  <div className="text-test">{t("Smoke.0")}</div>
                </div>
              </div>
            </div>
            <div className="tact-column">
              <p>
                <span className="span-col-203"> {t("Smoke.0")} </span>
                <br />
                {t("Smoke.1")}
              </p>
            </div>
          </div>
        </div>

        <div className="tact-container-inner">
          {/* Column1 */}
          <div className="col-tact-column">
              <ModalImage
        small={"/images/FireWatcher 511.png"}
        large={"/images/FireWatcher 511.png"}
        alt="FireWatcher 511 เครื่องตรวจจับควันโฟโตอิเล็กทริคอัจฉริยะ"
      />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Smoke.2")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Smoke.3")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Smoke.4")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Smoke.5")}
              </li>
            </span>
          </div>
          {/* Column2 */}
          <div className="col-tact-column">
              <ModalImage
        small={"/images/FireWatcher 521 .png"}
        large={"/images/FireWatcher 521 .png"}
        alt="เครื่องตรวจจับความร้อนอัจฉริยะ FireWatcher 521"
      />
            <span className="span-list">
              <ul>
                <FcCheckmark className="icons-Us" size={34} />
                {t("Smoke.6")}
              </ul>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Smoke.7")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Smoke.8")}
              </li>
              <li>
                <FcAlarmClock className="icons-Us" size={34} />
                {t("Smoke.9")}
              </li>
            </span>
          </div>
        </div>
      </div>
      <ul className="style-type">
        <li className="list-style-type">
          {" "}
          <Link to="/">
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
          <Link1 to="tact-homepage4" spy={true} smooth={true}>
            {" "}
            <FcNext size={18} />
            {t("Device.44")}
          </Link1>
        </li>
        <li className="list-style-type">
          {" "}
          <Link1 to="tact-homepage5" spy={true} smooth={true}>
            {" "}
            <FcNext size={18} />
            {t("Device.55")}
          </Link1>
        </li>
        <li className="list-style-type">
          {" "}
          <Link1 to="tact-homepage6" spy={true} smooth={true}>
            {" "}
            <FcNext size={18} />
            {t("Device.66")}
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
