import { Accordion, AccordionSummary, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import React from "react";

interface FAQAccordionProps {
  faq: any;
  style?: Object;
}

const expandIcon = <ControlPointOutlinedIcon htmlColor="#9859AC" />;

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faq, style }) => {
  return (
    <Accordion
      style={{
        ...style,
        border: "1px solid #9859AC",
        padding: "15px 15px 15px 0px",
      }}
    >
      <AccordionSummary
        expandIcon={expandIcon}
        aria-controls={`panel-${faq.id}-content`}
        id={`panel-${faq.id}-header`}
      >
        <Typography fontWeight={600}>{faq.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{faq.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQAccordion;
