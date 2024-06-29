// REACT

// STYLES
import { useState } from "react";
import "./App.css";
import profileImg from "./assets/default-ProfileImg.png";

// COMPONENTS
import { CButton } from "./components/cButton/cButton";
import { CCard } from "./components/cCard/cCard";
import { CForm } from "./components/cForm/cForm";

const App = () => {
  const [show, setShow] = useState({
    sendEmail: false,
  });

  const showSendEmail = () => {
    show.sendEmail ? setShow({ sendEmail: false }) : setShow({ sendEmail: true });
    console.log(show);
    
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
          <CForm className=""/>
        </CCard>
        <p>**texto legal**</p>
      </CCard>
    </>
  );
};

export default App;
