// REACT
import React, { useState } from "react";
import { X } from "lucide-react";


// STYLES
import "./App.css";
import profileImg from "./assets/default-ProfileImg.png";

// SERVICES
import { sendEmailService, sendEmailProps } from "./services/apiServices";

// COMPONENTS
import { CButton } from "./components/cButton/cButton";
import { CCard } from "./components/cCard/cCard";
import { CInput } from "./components/cForm/cInput";

const App: React.FC = () => {
  const [show, setShow] = useState({
    sendEmail: false,
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const showSendEmail = () => {
    show.sendEmail
      ? setShow({ sendEmail: false })
      : setShow({ sendEmail: true });
    console.log(show);
    console.log(personalInfo);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const clearInput = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setPersonalInfo((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: "",
  //   }));
  // };

  const ok = () => {
    console.log("no");
  };

  const sendEmail = async () => {
    const data: sendEmailProps = {
      service_id: "service_mbmx9pk",
      template_id: "template_2mpjo6y",
      user_id: "wemvTaWxjgk_PwNK7",
      personalInfo,
      accessToken: "PXcd5iiUOvCdSZH-wGrRh",
    };
    try {
      await sendEmailService(data);
    } catch (error) {
      console.log("error sending:", error);
    }
  };

  return (
    <>
      <CCard className="">
        <img src={profileImg} alt="Profile Image" />
        <CButton
          className=""
          title="Concertar cita"
          disabled={false}
          onClick={showSendEmail}
        />
        <CCard className={show.sendEmail ? "card-sendEmail" : "hidden"}>
          <X className="xIcon" onClick={showSendEmail} />
          <CInput
            type="text"
            name="name"
            placeholder="input name"
            className=""
            value={personalInfo.name || ""}
            onChange={handleInput}
            onBlur={ok}
          />
          <CInput
            type="email"
            name="email"
            placeholder="input email"
            className=""
            value={personalInfo.email || ""}
            onChange={handleInput}
            onBlur={ok}
          />
          <CInput
            type="textarea"
            name="message"
            placeholder="input message"
            className=""
            value={personalInfo.message || ""}
            onChange={handleInput}
            onBlur={ok}
          />
          <CButton
            title="concertar cita"
            className=""
            onClick={sendEmail}
            disabled={false}
          />
        </CCard>
        <p>**texto legal**</p>
      </CCard>
    </>
  );
};

export default App;
