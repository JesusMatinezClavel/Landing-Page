import "./calendly.css";

import React, { useEffect, useRef } from "react";
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

  const calendlyRef = useRef(InlineWidget)
  return (
    <>
      <div className="calendly-inline-widget">
        <InlineWidget styles={{border:'2px solid darkgrey', minWidth: '320px', height: '630px'}} url={url} pageSettings={pageSettings} prefill={prefill} />
      </div>
    </>
  );
};
