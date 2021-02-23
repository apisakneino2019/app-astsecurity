import "./css/ContactUs.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { FcNext } from "react-icons/fc";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function ContactUs() {
  const Data = {
    username: "",
    email: "",
    subject: "",
    content: "",
  };

  const [formdata, setFormdata] = React.useState(Data);

  const Chagform = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  console.log("ddd", formdata);

  const notify = () =>
    toast.success("ส่งข้อความ สำเร็จ", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });

  const reset = () => {
    this.formRef.current.reset();
  };

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post("http://astsecurity.in.th/send-contact.php", {
      name: formdata.username,
      subject: formdata.subject,
      email: formdata.email,
      content: formdata.content,
    });
    console.log("ทำการส่งข้อความเรียบร้อย");
  };

  const { t } = useTranslation();

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3136.904378559478!2d102.057141!3d14.957799000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x493fec817647dd10!2z4LiB4Lil4LmJ4Lit4LiH4Lin4LiH4LiI4Lij4Lib4Li04LiU4LmC4LiE4Lij4Liy4LiKIENDVFYgSVAgQ2FtZXJhIOC4quC4seC4jeC4jeC4suC4k-C4geC4seC4meC4guC5guC4oeC4oiDguKrguYHguIHguJnguJnguLTguYnguKfguKHguLfguK0g4LiE4Li14Lii4LmM4LiB4Liy4Lij4LmM4LiUIOC5hOC4oeC5ieC4geC4seC5ieC4meC4o-C4luC4ouC4meC4leC5jA!5e1!3m2!1sen!2sth!4v1608796503566!5m2!1sen!2sth"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      />
      <h1
        style={{ backgroundImage: "url(/images/bg-black.jpg)" }}
        className="h1-col-title"
      >
        {t("nav.5")}
      </h1>
      <h5 className="h1-col-title">
        {t("nav.8")}
        <FcNext size={24} />
        <Link to="/Homepage">{t("nav.12")}</Link>
        <FcNext size={24} />
        {t("nav.5")}
      </h5>
      <div className="contact-container">
        <div className="tact-column">
          {/* Column1 */}
          <div className="column-item">
            <div className="ffff-container">
              <p className="pp-form"> {t("footer.11")}</p>
              <hr /> <br />
              <img
                className="col-us-img-2"
                src="/images/icons.png"
                alt="Logohome"
              ></img>
              <div className="col-101">
                <li style={{ listStyle: "none" }}>
                  <img src="/images/company_22169.png" alt="company_22169" />
                  {t("footer.12")}
                </li>
                <hr />
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <img
                    src="/images/google_location_maps_22371.png"
                    alt="google_location_maps_22371"
                  />{" "}
                  {t("footer.13")}
                </li>
                <hr />
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <img
                    src="/images/google_location_maps_22371.png"
                    alt="google_location_maps_22371"
                  />
                  {t("footer.14")}
                </li>
                <hr />
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <img
                    src="/images/1485482192-phone_78665.png"
                    alt="phone_78665"
                  />{" "}
                  {t("footer.15")}
                </li>
                <hr />
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <img src="/images/Gmail_29991.png" alt="Gmail_29991" />{" "}
                  {t("footer.16")}
                </li>
                <hr />
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <img src="/images/facebook.png" alt="facebook" />{" "}
                  {t("footer.18")}{" "}
                </li>
                <hr />
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <img src="/images/line.png" alt="line" /> {t("footer.19")}
                </li>
                <hr />
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <img src="/images/web-icon.png" alt="WebSites" />{" "}
                  {t("footer.20")}
                </li>

                <hr />
              </div>
            </div>
          </div>
          {/* Column2 */}

          <div className="column-item">
            {" "}
            <div className="ff-container">
              <p className="pp-form"> {t("InputForm.1")} </p>
              <div className="container">
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <div className="box-heading">
                    <h1>{t("InputForm.2")}</h1>
                  </div>
                  <div className=" box-feedback-form">
                    <p className="grey">{t("InputForm.3")}</p>
                    {/* input */}
                    <label className="check-label">{t("InputForm.5")}</label>
                    <div className="inputstyle">
                      <input
                        type="text"
                        name="username"
                        placeholder=" ชื่อ-นามสกุล..."
                        required
                        onChange={Chagform}
                        value={formdata.username}
                      />
                    </div>
                    {/* input */}
                    <label className="check-label">{t("InputForm.6")}</label>
                    <div className="inputstyle">
                      <input
                        type="text"
                        name="email"
                        placeholder=" ที่อยู่อีเมล..."
                        required
                        onChange={Chagform}
                        value={formdata.email}
                      />
                    </div>
                    {/* input */}
                    <label className="check-label">{t("InputForm.7")}</label>
                    <div className="inputstyle">
                      <input
                        type="text"
                        name="subject"
                        placeholder="หัวข้อเรื่อง..."
                        onChange={Chagform}
                        value={formdata.subject}
                      />
                    </div>
                    {/* input */}{" "}
                    <label className="check-label">{t("InputForm.8")}</label>
                    <div className="inputstyle">
                      <textarea
                        type="text"
                        name="content"
                        placeholder=" ระบุรายละเอียด..."
                        onChange={Chagform}
                        value={formdata.content}
                      ></textarea>
                    </div>
                    <div className="btnstyle">
                      <button onClick={notify}>{t("InputForm.4")}</button>
                      <ToastContainer />
                    </div>
                    <div className="btnstyle">
                      <p className="guide-reset"> {t("InputForm.10")}</p>
                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
