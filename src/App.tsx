// REACT

// STYLES
import { useState } from "react";
import "./App.css";
import profileImg from "./assets/default-ProfileImg.png";

// COMPONENTS
import { CButton } from "./components/cButton/cButton";
import { CCard } from "./components/cCard/cCard";

const App = () => {
  const [show, setShow] = useState({
    sendEmail: false,
  });

  const showSendEmail = () => {
    show ? setShow({ sendEmail: false }) : setShow({ sendEmail: false });
  };

  return (
    <>
      <CCard className="">
        <img src={profileImg} alt="Profile Image" />
        <CButton className="" title="Concertar cita" disabled={false} onClick={showSendEmail} />
        <p>**texto legal**</p>
      </CCard>
    </>
  );
};

export default App;
