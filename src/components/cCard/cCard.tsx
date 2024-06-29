import React from "react";
import "./cCard.css";

interface cCardProps {
  children: React.ReactNode;
}

export const CCard: React.FC<cCardProps> = ({ children }) => {
  return (
    <>
      <div className="card-design">{children}</div>
    </>
  );
};
