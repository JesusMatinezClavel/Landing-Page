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
      <CCard>
        <img src={profileImg} alt="Profile Image" />
        <CButton title="Concertar cita" onClick={showSendEmail} />
        {/* <CButton title="Otra función" onClick={sendEmail} /> */}
        <p>**texto legal**</p>
      </CCard>
    </>
  );
};

export default App;
