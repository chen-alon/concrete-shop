/** @jsx jsx */
import { jsx, Box, Container, Heading } from "theme-ui";
import { rgba } from "polished";
import bannerBg from "assets/images/banner-bg.jpg";

export default function Banner() {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
              Welcome home. <br /> You are at Concrete Shop.
            </Heading>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ["100%", null, null, null, "cover"],
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: [null, null, null, null, "50vh", "100vh"],
  },
  bannerContent: {
    backgroundColor: rgba("#fff", 0.93),
    boxShadow: [
      "0px 10px 16px rgba(52, 61, 72, 0.12)",
      null,
      null,
      null,
      "none",
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      "20px",
      "30px",
      null,
      null,
      null,
      "30px 50px 60px",
      "50px 60px 90px",
    ],
    borderRadius: 5,
    m: ["110px 0 0", null, null, "110px auto 0", "60px 0 0", null, 0],
    "@media only screen and (max-width: 760px)": {
      maxWidth: 515,
      mt: 70,
      padding: "80px 40px 80px 60px",
    },
  },
  heroTitle: {
    fontSize: [21, 26, 30, 40],
    fontWeight: 700,
    letterSpacing: "heading",
    lineHeight: [1.4, null, null, null, null, null, 1.57],
  },
};
