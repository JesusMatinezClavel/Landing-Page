import React from "react";
import "./cCard.css";

interface cCardProps {
  children: React.ReactNode;
  className: string;
}

export const CCard: React.FC<cCardProps> = ({
  children,
  className,
}) => {
  const combinedClasses = `card-design ${className || ""}`;
  return (
    <>
      <div className={combinedClasses}>{children}</div>
    </>
  );
};
