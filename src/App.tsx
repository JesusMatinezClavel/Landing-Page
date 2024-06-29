// REACT

// STYLES
import "./App.css";
import profileImg from "./assets/default-ProfileImg.png";

// COMPONENTS
import { CButton } from "./components/cButton/cButton";

function App() {
  const sendEmail = () => {
    console.log("hola");
  };

  return (
    <>
      <div className="landing-card">
        <img src={profileImg} alt="Profile Image" />
        <CButton title="Concertar cita" onClick={sendEmail} />
        <CButton title="Otra función" onClick={sendEmail} />
        <p>**texto legal**</p>
      </div>
    </>
  );
}

export default App;
