import "./cInput.css";

interface CFormProps {
  className: string;
  inputs: {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  }[];
}

export const CInput: React.FC<CFormProps> = ({ className, inputs }) => {
  const combinedClasses = `input-design ${className || ""}`;

  return (
    <div className={combinedClasses}>
      {inputs.map((input) => {
        if (input.type === "textarea") {
          return (
            <textarea
              className={className}
              name={input.name}
              value={input.value}
              placeholder={input.placeholder}
              onChange={input.onChange}
              onBlur={input.onBlur}
              rows={4}
              required
            />
          );
        }
        return (
          <input
            className={className}
            type={input.type}
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            onChange={input.onChange}
            onBlur={input.onBlur}
            required
          />
        );
      })}
    </div>
  );
};
