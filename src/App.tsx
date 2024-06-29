// REACT

// STYLES
import "./App.css";
import profileImg from "./assets/default-ProfileImg.png";

// COMPONENTS
import { CButton } from "./components/cButton/cButton";

function App() {

  return (
    <>
    <div className="landing-card">
    <img src={profileImg} alt="Profile Image" />
    <CButton title="Concertar cita" />
    </div>
    </>
  );
}

export default App;
