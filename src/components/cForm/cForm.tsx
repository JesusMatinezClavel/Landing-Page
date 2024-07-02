import "./cForm.css";

import { CButton } from "../cButton/cButton";

interface cFormProps {
  className: string;
}

export const CForm: React.FC<cFormProps> = ({ className }) => {

  const combinedClasses = `form-design ${className || ""}`;

  const ok = () => {
    console.log("hola");
  };



  return (
    <>
      <div className={combinedClasses}>
        {/* <X onClick={hideCard} /> */}
        <form action="">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Input your name"
            required
          />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Input your email"
            required
          />
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Input your message"
            rows={4}
            required
          ></textarea>
          <CButton
            className="button-design"
            title="Concertar cita"
            onClick={ok}
            disabled={true}
          />
        </form>
      </div>
    </>
  );
};
