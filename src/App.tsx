// REACT
import { useState } from "react";
import { X } from "lucide-react";

// STYLES
import "./App.css";
import profileImg from "./assets/default-ProfileImg.png";

// COMPONENTS
import { CButton } from "./components/cButton/cButton";
import { CCard } from "./components/cCard/cCard";
import { CInput } from "./components/cForm/cInput";

const App = () => {
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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
          <CInput className="" type='email' name='name' value='value'/>
        </CCard>
        <p>**texto legal**</p>
      </CCard>
    </>
  );
};

export default App;
