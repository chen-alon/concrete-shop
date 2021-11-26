import React from "react";
import Accordion from "../../components/Accordion";
import { Box } from "theme-ui";

function FAQ(props) {
  const { data } = props;

  return (
    <div style={styles.list}>
      {data.map((q) => (
        <Box sx={styles.faq} dir="rtl" key={q.id}>
          <Accordion title={q.question} content={q.answer} />
        </Box>
      ))}
    </div>
  );
}

export default FAQ;

const styles = {
  faq: {
    width: "90%",
    display: "block",
    maxWidth: "768px",
    margin: "0.5rem",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    fontSize: "1.8rem",
    "@media only screen and (max-width: 450px)": {
      fontSize: "1rem",
    },
  },
  list: {
    fontFamily: "Calibri Light",
    paddingTop: "2rem",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
};
