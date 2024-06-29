import "./cForm.css";

interface cFormProps {
  className: string;
}

export const CForm: React.FC<cFormProps> = ({ className }) => {
  const combinedClasses = `form-design ${className || ""}`;

  return (
    <>
      <form className={combinedClasses} action="">
        <input type="text" placeholder="input text"/>
      </form>
    </>
  );
};
