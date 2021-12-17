import React, { useState } from "react";
import { Box, Image } from "theme-ui";
import flus from "../assets/images/icons/expand-arrow.png";
import minus from "../assets/images/icons/collapse-arrow.png";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Box dir="rtl">
      <div style={styles.button} onClick={toggle} type="button">
        <p>
          {props.title}
          <Image
            src={!isShowing ? flus : minus}
            width="30"
            sx={{ float: "left", left: 0, maxWidth: "30%" }}
          />
        </p>
      </div>

      <div
        style={{
          display: isShowing ? "block" : "none",
          fontSize: [15, 20],
          marginRight: "4%",
          marginLeft: "4%",
          marginBottom: "2rem",
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </Box>
  );
}

const styles = {
  button: {
    padding: "0.5rem",
    marginRight: "1rem",
    marginLeft: "1rem",
    borderRadius: 0,
    fontWeight: "bold",
    ":hover": {
      backgroundColor: "transparent",
      opacity: "0.8",
    },
  },
};
