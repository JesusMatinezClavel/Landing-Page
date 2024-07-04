import "./cInput.css";

interface CFormProps {
  className: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const CInput: React.FC<CFormProps> = ({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  const combinedClasses = `input-design ${className || ""}`;

  return (
    <>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className={combinedClasses}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={combinedClasses}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </>
  );
};
