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
      <div>
        <InlineWidget styles={{border:'5px solid darkgrey', minWidth: '320px', height: '630px'}} url={url} pageSettings={pageSettings} prefill={prefill} />
      </div>
    </>
  );
};
