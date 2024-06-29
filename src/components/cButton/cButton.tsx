import "./cButton.css";

interface CButtonProps {
  title: string;
  disabled: boolean;
  className: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const CButton: React.FC<CButtonProps> = ({
  title,
  className,
  disabled,
  onClick,
}) => {
  const combinedClasses = `button-design ${className || ""}`;

  return (
    <>
      <div
        onClick={disabled ? undefined : onClick}
        className={disabled ? "disabled" : combinedClasses}
      >
        {title}
      </div>
    </>
  );
};
