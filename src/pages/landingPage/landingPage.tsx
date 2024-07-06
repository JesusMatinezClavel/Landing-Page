// REACT
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

// STYLES
import "./landingPage.css";
import profileImg from "../../assets/photoLandingPage.jpg";

// SERVICES
import { sendEmailService, sendEmailProps } from "../../services/apiServices";

// COMPONENTS
import { CButton } from "../../components/cButton/cButton";
import { CCard } from "../../components/cCard/cCard";
import { CInput } from "../../components/cForm/cInput";
import { CalendlyComponent } from "../../components/calendly/calendly";

export const LandingPage: React.FC = () => {
  const [show, setShow] = useState({
    sendEmail: false,
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
  });
  const [textInfo, setTextInfo] = useState("");

  useEffect(() => {
    document.title = "Concertar cita";
  }, []);

  const showSendEmail = () => {
    show.sendEmail
      ? (setShow({ sendEmail: false }),
        setPersonalInfo({
          name: "",
          email: "",
          message: "",
          date: "",
        }))
      : (setShow({ sendEmail: true }),
        setPersonalInfo({
          name: "",
          email: "",
          message: "",
          date: "",
        }));
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const ok = () => {
    console.log("no");
  };

  const calendlyURL = "https://calendly.com/tradingchiqui/mentoria";

  const sendEmail = async () => {
    const service_id = import.meta.env.VITE_SERVICE;
    const template_id = import.meta.env.VITE_TEMPLATE;
    const user_id = import.meta.env.VITE_USER;
    const accessToken = import.meta.env.VITE_ACCESS;

    const data: sendEmailProps = {
      service_id,
      template_id,
      user_id,
      personalInfo,
      accessToken,
    };
    try {
      const response = await sendEmailService(data);
      setTextInfo(response!);
      setTimeout(() => {
        setTextInfo("");
      }, 500);
      setPersonalInfo({
        name: "",
        email: "",
        message: "",
        date: "",
      });
      setShow({
        sendEmail: false,
      });
    } catch (error) {
      console.log("error sending:", error);
    }
  };

  return (
    <>
      <div className="landingPage-design">
        <CCard className="">
          <p>{textInfo}</p>
          <img src={profileImg} alt="Profile Image" />
          <p>**texto presentacion**</p>
          <CButton
            className=""
            title="Concertar cita"
            disabled={false}
            onClick={showSendEmail}
          />
          <CCard className={show.sendEmail ? "card-sendEmail" : "hidden"}>
            <X className="xIcon" onClick={showSendEmail} />
            {/* <CInput
            type="text"
            name="name"
            placeholder="input name *"
            className=""
            value={personalInfo.name || ""}
            onChange={handleInput}
            onBlur={ok}
          />
          <CInput
            type="email"
            name="email"
            placeholder="input email *"
            className=""
            value={personalInfo.email || ""}
            onChange={handleInput}
            onBlur={ok}
          />
          <CInput
            type="textarea"
            name="message"
            placeholder="input message"
            className="input-textarea"
            value={personalInfo.message || ""}
            onChange={handleInput}
            onBlur={ok}
          /> */}
            <CalendlyComponent url={calendlyURL} />
            {/* <CInput
            type="datetime-local"
            name="date"
            placeholder="input date"
            className="input-date"
            value={personalInfo.date || ""}
            onChange={handleInput}
            onBlur={ok}
          /> */}
            {/* <CButton
            title="concertar cita"
            className=""
            onClick={sendEmail}
            disabled={
              personalInfo.name !== "" &&
              personalInfo.email !== "" &&
              personalInfo.date !== ""
                ? false
                : true
            }
          /> */}
          </CCard>
          <p>**texto legal**</p>
        </CCard>
      </div>
    </>
  );
};
