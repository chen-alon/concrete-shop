/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import bannerBg from "assets/images/banner-bg.jpg";
import bannerBgMobile from "assets/images/banner-bg-mobile.jpg";

export default function Banner() {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}></Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ["100%", null, null, null, "cover"],
    "@media only screen and (max-width: 760px)": {
      background: `url(${bannerBgMobile}) no-repeat center top / cover`,
      backgroundSize: ["100%", null, null, null, "cover"],
    },
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: [
      "30vh",
      "40vh",
      "50vh",
      "60vh",
      "70vh",
      "80vh",
      "90vh",
      "100vh",
    ],
    "@media only screen and (max-width: 760px)": {
      justifyContent: "center",
    },
  },
};
