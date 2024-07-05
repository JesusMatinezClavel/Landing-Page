import "./calendly.css";

import React from "react";
import { InlineWidget } from "react-calendly";

interface CalendlyComponentProps {
  url: string;
  pageSettings?: any;
  prefill?: any;
}

export const CalendlyComponent: React.FC<CalendlyComponentProps> = ({
  url,
  pageSettings,
  prefill,
}) => {
  return (
    <>
      <div className="calendly-inline-widget">
        <InlineWidget url={url} pageSettings={pageSettings} prefill={prefill} />
      </div>
    </>
  );
};
